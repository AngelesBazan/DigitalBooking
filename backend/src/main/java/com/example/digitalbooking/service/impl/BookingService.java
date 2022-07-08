package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.BookingDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Booking;
import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.model.User;
import com.example.digitalbooking.repository.IBookingRepository;
import com.example.digitalbooking.repository.IProductRepository;
import com.example.digitalbooking.repository.IUserRepository;
import com.example.digitalbooking.service.IBookingService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service @RequiredArgsConstructor
public class BookingService implements IBookingService {
    private final IBookingRepository bookingRepository;
    private final IProductRepository productRepository;
    private final IUserRepository userRepository;
    private final ObjectMapper mapper;

    @Override
    public BookingDTO findById(Long id) throws ResourceNotFoundException {
        Booking booking = bookingRepository.findById(id).orElse(null);
        if(booking == null) {
            throw new ResourceNotFoundException("There is no booking with id=" + id + ".");
        }
        return mapper.convertValue(booking, BookingDTO.class);
    }

    @Override //Primero chequeamos que no exista una reserva en esas fechas para ese producto
    public BookingDTO create(BookingDTO bookingDTO) throws Exception {
        Set<Booking> bookings = productRepository.getById(bookingDTO.getProduct().getId()).getBookings();
        boolean available = true;
        for(Booking b : bookings) {
            LocalDate iDate = bookingDTO.getInitial_date();
            LocalDate fDate = bookingDTO.getFinal_date();
            LocalDate iDateDB = b.getInitial_date();
            LocalDate fDateDB = b.getFinal_date();
            if(iDate.equals(iDateDB)) {
                available = false;
            }
            if(iDate.isAfter(iDateDB) && iDate.isBefore(fDateDB)) {
                available = false;
            }
            if(fDate.isAfter(iDateDB) && fDate.isBefore(fDateDB)) {
                available = false;
            }
            if(fDate.equals(fDateDB)) {
                available = false;
            }
        }
        if(!available) {
            throw new Exception("There is already a booking for that date.");
        } else {
            bookingDTO.setUser(getUser(bookingDTO));
            bookingDTO.setProduct(getProduct(bookingDTO));

            Booking booking = mapper.convertValue(bookingDTO, Booking.class);
            System.out.println(booking);
            return mapper.convertValue(bookingRepository.save(booking), BookingDTO.class);
        }
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        Booking booking =bookingRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no booking with id=" + id + ".");
        }
        bookingRepository.delete(booking);
    }

    @Override
    public BookingDTO update(BookingDTO bookingDTO) throws ResourceNotFoundException, BadRequestException {
        if(bookingDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(bookingDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no booking with id=" + bookingDTO.getId() + ".");
        }

        bookingDTO.setUser(getUser(bookingDTO));
        bookingDTO.setProduct(getProduct(bookingDTO));

        Booking booking = mapper.convertValue(bookingDTO, Booking.class);
        Booking newBookingSave = bookingRepository.save(booking);
        return mapper.convertValue(newBookingSave, BookingDTO.class);
    }

    @Override
    public List<BookingDTO> findAll() {
        List<Booking> bookingList = bookingRepository.findAll();

        List<BookingDTO> bookingDTOList = bookingList.stream().map(booking -> mapper.convertValue(booking, BookingDTO.class)).collect(Collectors.toList());
        return bookingDTOList;
    }

//    @Override
//    public Page<BookingDTO> findAll(Pageable pageable) {
//        return null;
//    }



    private User getUser(BookingDTO bookingDTO) {
        User user = userRepository.findById(bookingDTO.getUser().getId()).get();
        return user;
    }

    private Product getProduct(BookingDTO bookingDTO) {
        Product product = productRepository.findById(bookingDTO.getProduct().getId()).get();
        return product;
    }
}

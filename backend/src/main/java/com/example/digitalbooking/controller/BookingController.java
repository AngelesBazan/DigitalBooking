package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.BookingDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.BookingService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/bookings")
public class BookingController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final BookingService bookingService;

    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> findCategoryById(@PathVariable Long id)  throws ResourceNotFoundException {
        BookingDTO bookingDTO = bookingService.findById(id);
        logger.info("Booking successfully returned: " + bookingDTO);
        return ResponseEntity.ok(bookingDTO);
    }

    @PostMapping
    public ResponseEntity<BookingDTO> createBooking(@RequestBody BookingDTO bookingDTO) throws Exception {
        BookingDTO bookingCreated = bookingService.create(bookingDTO);
        logger.info("Booking successfully saved: " + bookingCreated);
        return ResponseEntity.status(201).body(bookingCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteBookingById(@PathVariable long id) throws ResourceNotFoundException, BadRequestException {
        bookingService.deleteById(id);
        logger.info("Booking with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Booking deleted");
    }

    @PutMapping
    public ResponseEntity<BookingDTO> updateBooking(@RequestBody BookingDTO bookingDTO) throws ResourceNotFoundException, BadRequestException {
        System.out.println(bookingDTO);
        BookingDTO bookingUpdated = bookingService.update(bookingDTO);
        logger.info("Booking successfully updated: " + bookingDTO);
        return ResponseEntity.ok(bookingUpdated);
    }

    @GetMapping
    public ResponseEntity<List<BookingDTO>> findAllBookings() {
        List<BookingDTO> bookings = bookingService.findAll();
        logger.info(bookings.size() + (bookings.size() == 1 ? " booking" : " bookings")  + " successfully returned.");
        return ResponseEntity.ok(bookings);
    }
}

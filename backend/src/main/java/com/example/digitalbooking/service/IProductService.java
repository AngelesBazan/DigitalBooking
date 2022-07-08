package com.example.digitalbooking.service;

import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.model.Booking;

import java.time.LocalDate;
import java.util.List;

public interface IProductService extends ICRUDService<ProductDTO>{
    //Page<ProductDTO> findAll(Pageable pageable);
    List<ProductDTO> filterByDate(LocalDate initial_date, LocalDate final_date);
    List<ProductDTO> filterByCity(String cityName);
    List<ProductDTO> filterByCategory(String category);
    List<ProductDTO> filterByDateAndCity(LocalDate initial_date, LocalDate final_date, String name );
    List<ProductDTO> filterByDateAndCategory(LocalDate initial_date, LocalDate final_date, String categoryName);
    List<ProductDTO> filterByCityAndCategory(String cityName, String categoryName);
    List<ProductDTO> filterByDateCityAndCategory(LocalDate initial_date, LocalDate final_date, String cityName, String category);
    List<Booking> getBookingsByProductId(Long id);
    List<ProductDTO> findProductsByUserId(Long id);
}

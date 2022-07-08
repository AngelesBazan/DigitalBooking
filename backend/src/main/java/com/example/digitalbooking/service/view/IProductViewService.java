package com.example.digitalbooking.service.view;

import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.dto.view.ProductViewDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.view.ProductView;
import com.example.digitalbooking.service.ICRUDService;

import java.time.LocalDate;
import java.util.List;

public interface IProductViewService {
    public ProductView findById(Long id) throws ResourceNotFoundException;
    public ProductViewDTO create(ProductViewDTO productViewDTO) throws Exception;
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException;
    public ProductViewDTO update(ProductViewDTO productViewDTO) throws ResourceNotFoundException, BadRequestException;
    public List<ProductView> findAll();
    List<ProductView> filterByDate(LocalDate initial_date, LocalDate final_date);
    List<ProductView> filterByCity(String cityName);
    List<ProductView> filterByCategory(String category);
    List<ProductView> filterByDateAndCity(LocalDate initial_date, LocalDate final_date, String name);
    List<ProductView> filterByDateAndCategory(LocalDate initial_date, LocalDate final_date, String categoryName);
    List<ProductView> filterByCityAndCategory(String cityName, String categoryName);
    List<ProductView> filterByDateCityAndCategory(LocalDate initial_date, LocalDate final_date, String cityName, String category);
}

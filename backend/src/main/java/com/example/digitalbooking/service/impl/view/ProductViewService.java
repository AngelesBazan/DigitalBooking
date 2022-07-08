package com.example.digitalbooking.service.impl.view;

import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.dto.view.ProductViewDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.model.view.ProductView;
import com.example.digitalbooking.repository.view.IProductViewRepository;
import com.example.digitalbooking.service.view.IProductViewService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductViewService implements IProductViewService {
    @Autowired
    private IProductViewRepository productViewRepository;

    @Override
    public ProductView findById(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public ProductViewDTO create(ProductViewDTO productViewDTO) throws Exception {
        return null;
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {

    }

    @Override
    public ProductViewDTO update(ProductViewDTO productViewDTO) throws ResourceNotFoundException, BadRequestException {
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductView> findAll() {
        List<ProductView> productViewList = productViewRepository.findAll();

        return productViewList;
    }

    @Override
    public List<ProductView> filterByDate(LocalDate initial_date, LocalDate final_date) {
        List<ProductView> products = productViewRepository.filterByDate(initial_date, final_date);

        return products;
    }

    @Override
    public List<ProductView> filterByCity(String cityName) {
        List<ProductView> products = productViewRepository.filterByCity(cityName);

        return products;
    }

    @Override
    public List<ProductView> filterByCategory(String category) {
        List<ProductView> products = productViewRepository.filterByCategory(category);

        return products;
    }

    @Override
    public List<ProductView> filterByDateAndCity(LocalDate initial_date, LocalDate final_date, String name) {
        List<ProductView> products = productViewRepository.filterByDateAndCity(initial_date, final_date, name);

        return products;
    }

    @Override
    public List<ProductView> filterByDateAndCategory(LocalDate initial_date, LocalDate final_date, String categoryName) {
        List<ProductView> products = productViewRepository.filterByDateAndCategory(initial_date, final_date, categoryName);

        return products;
    }

    @Override
    public List<ProductView> filterByCityAndCategory(String cityName, String categoryName) {
        List<ProductView> products = productViewRepository.filterByCityAndCategory(cityName, categoryName);

        return products;
    }

    @Override
    public List<ProductView> filterByDateCityAndCategory(LocalDate initial_date, LocalDate final_date, String cityName, String category) {
        List<ProductView> products = productViewRepository.filterByDateCityAndCategory(initial_date, final_date, cityName, category);

        return products;
    }
}

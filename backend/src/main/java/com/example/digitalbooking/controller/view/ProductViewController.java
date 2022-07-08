package com.example.digitalbooking.controller.view;

import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.dto.view.ProductViewDTO;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.view.ProductView;
import com.example.digitalbooking.service.impl.view.ProductViewService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/productsview")
public class ProductViewController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final ProductViewService productViewService;
    private final ObjectMapper mapper;

    @GetMapping
    public ResponseEntity<List<ProductView>> seeAll() {
        List<ProductView> products = productViewService.findAll();
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("dates/{initial_date}/{final_date}")
    public ResponseEntity<List<ProductView>> filterByDate(@PathVariable("initial_date")
                                                         @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                         @PathVariable("final_date")
                                                         @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date) {
        List<ProductView> products = productViewService.filterByDate(initial_date, final_date);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("/city/{cityName}")
    public ResponseEntity<List<ProductView>> filterByCity(@PathVariable String cityName) throws ResourceNotFoundException {
        List<ProductView> productsByCity = productViewService.filterByCity(cityName);
        logger.info(productsByCity.size() + (productsByCity.size() == 1 ? " product" : " products") + " successfully returned.");
        return ResponseEntity.ok(productsByCity);
    }

    @GetMapping("category/{category}")
    public ResponseEntity<List<ProductView>> filterByCategory(@PathVariable String category) {
        List<ProductView> products = productViewService.filterByCategory(category);
        if(products != null) {
            logger.info(products.size() + (products.size() == 1 ? " product" : " products") + " successfully returned.");
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("dates/{initial_date}/{final_date}/city/{name}")
    public ResponseEntity<List<ProductView>> filterByDateAndCity(@PathVariable("initial_date")
                                                                @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                                @PathVariable("final_date")
                                                                @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date,
                                                                @PathVariable("name") String name) {
        List<ProductView> products = productViewService.filterByDateAndCity(initial_date, final_date, name);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("dates/{initial_date}/{final_date}/category/{categoryName}")
    public ResponseEntity<List<ProductView>> filterByDateAndCategory(@PathVariable("initial_date")
                                                                    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                                    @PathVariable("final_date")
                                                                    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date,
                                                                    @PathVariable("categoryName") String categoryName) {
        List<ProductView> products = productViewService.filterByDateAndCategory(initial_date, final_date, categoryName);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("city/{cityName}/category/{categoryName}")
    public ResponseEntity<List<ProductView>> filterByCityAndCategory(@PathVariable("cityName") String cityName,
                                                                    @PathVariable("categoryName") String categoryName) {
        List<ProductView> products = productViewService.filterByCityAndCategory(cityName, categoryName);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("dates/{initial_date}/{final_date}/city/{cityName}/category/{category}")
    public ResponseEntity<List<ProductView>> filterByDateCityAndCategory(@PathVariable("initial_date")
                                                                        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                                        @PathVariable("final_date")
                                                                        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date,
                                                                        @PathVariable("cityName") String cityName,
                                                                        @PathVariable("category") String category) {
        List<ProductView> products = productViewService.filterByDateCityAndCategory(initial_date, final_date, cityName, category);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }
}

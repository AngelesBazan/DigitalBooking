package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.BookingDTO;
import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Booking;
import com.example.digitalbooking.service.impl.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/products")
public class ProductController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final ProductService productService;
    private final ObjectMapper mapper;

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findProductById(@PathVariable Long id) throws ResourceNotFoundException {
        ProductDTO productDTO = productService.findById(id);
        logger.info("Product successfully returned: " + productDTO);
        return ResponseEntity.ok(productDTO);
    }

    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) throws ResourceNotFoundException {
        ProductDTO productCreated = productService.create(productDTO);
        logger.info("Product successfully saved: " + productCreated);
        return ResponseEntity.ok(productCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProductById(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        productService.deleteById(id);
        logger.info("Product with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Product deleted");
    }

    @PutMapping
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO productDTO) throws ResourceNotFoundException, BadRequestException {
        ProductDTO productUpdated = productService.update(productDTO);
        logger.info("Product successfully updated: " + productDTO);
        return ResponseEntity.ok(productUpdated);
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAllProducts() {
        List<ProductDTO> products = productService.findAll();
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

//    @GetMapping("/paged/{pageNumberProduct}/{page}")
//    public ResponseEntity<Page<ProductDTO>> findAllProducts(@PathVariable Integer pageNumberProduct, @PathVariable Integer page) {
//        Page<ProductDTO> products = productService.findAll(PageRequest.of(page, pageNumberProduct));
//        return ResponseEntity.ok(products);
//    }

    @GetMapping("dates/{initial_date}/{final_date}")
    public ResponseEntity<List<ProductDTO>> filterByDate(@PathVariable("initial_date")
                                                         @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                         @PathVariable("final_date")
                                                         @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date) {
        List<ProductDTO> products = productService.filterByDate(initial_date, final_date);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("/city/{cityName}")
    public ResponseEntity<List<ProductDTO>> filterByCity(@PathVariable String cityName) throws ResourceNotFoundException {
        List<ProductDTO> productsByCity = productService.filterByCity(cityName);
        logger.info(productsByCity.size() + (productsByCity.size() == 1 ? " product" : " products") + " successfully returned.");
        return ResponseEntity.ok(productsByCity);
    }

    @GetMapping("category/{category}")
    public ResponseEntity<List<ProductDTO>> filterByCategory(@PathVariable String category) {
        List<ProductDTO> products = productService.filterByCategory(category);
        if(products != null) {
            logger.info(products.size() + (products.size() == 1 ? " product" : " products") + " successfully returned.");
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("dates/{initial_date}/{final_date}/city/{name}")
    public ResponseEntity<List<ProductDTO>> filterByDateAndCity(@PathVariable("initial_date")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                           @PathVariable("final_date")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date,
                                                           @PathVariable("name") String name) {
        List<ProductDTO> products = productService.filterByDateAndCity(initial_date, final_date, name);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("dates/{initial_date}/{final_date}/category/{categoryName}")
    public ResponseEntity<List<ProductDTO>> filterByDateAndCategory(@PathVariable("initial_date")
                                                                    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                                    @PathVariable("final_date")
                                                                    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date,
                                                                    @PathVariable("categoryName") String categoryName) {
        List<ProductDTO> products = productService.filterByDateAndCategory(initial_date, final_date, categoryName);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("city/{cityName}/category/{categoryName}")
    public ResponseEntity<List<ProductDTO>> filterByCityAndCategory(@PathVariable("cityName") String cityName,
                                                                    @PathVariable("categoryName") String categoryName) {
        List<ProductDTO> products = productService.filterByCityAndCategory(cityName, categoryName);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    @GetMapping("dates/{initial_date}/{final_date}/city/{cityName}/category/{category}")
    public ResponseEntity<List<ProductDTO>> filterByDateCityAndCategory(@PathVariable("initial_date")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initial_date,
                                                           @PathVariable("final_date")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate final_date,
                                                           @PathVariable("cityName") String cityName,
                                                           @PathVariable("category") String category) {
        List<ProductDTO> products = productService.filterByDateCityAndCategory(initial_date, final_date, cityName, category);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }

    //Reservas por id de producto
    @GetMapping("/{id}/bookings")
    public ResponseEntity<List<BookingDTO>> findBookingsByProductId(@PathVariable Long id)  throws ResourceNotFoundException {
        List<Booking> bookingList =  productService.getBookingsByProductId(id);
        List<BookingDTO> bookingDTOList =  new ArrayList<>();
        for (Booking b : bookingList) {
            bookingDTOList.add(mapper.convertValue(b, BookingDTO.class));
        }
        return ResponseEntity.ok(bookingDTOList);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<List<ProductDTO>> findBookingsByUserId(@PathVariable Long id)  throws ResourceNotFoundException {
        List<ProductDTO> products = productService.findProductsByUserId(id);
        logger.info(products.size() + (products.size() == 1 ? " product" : " products")  + " successfully returned.");
        return ResponseEntity.ok(products);
    }
}

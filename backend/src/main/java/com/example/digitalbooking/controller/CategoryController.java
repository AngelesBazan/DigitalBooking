package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.CategoryDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.CategoryService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/categories")
public class CategoryController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final CategoryService categoryService;

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> findCategoryById(@PathVariable Long id)  throws ResourceNotFoundException {
        CategoryDTO categoryDTO = categoryService.findById(id);
        logger.info("Category successfully returned: " + categoryDTO);
        return ResponseEntity.ok(categoryDTO);
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryDTO categoryDTO) {
        CategoryDTO categoryCreated = categoryService.create(categoryDTO);
        logger.info("Category successfully saved: " + categoryCreated);
        return ResponseEntity.ok(categoryCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCategoryById(@PathVariable long id) throws ResourceNotFoundException, BadRequestException{
        categoryService.deleteById(id);
        logger.info("Category with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Category deleted");
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO categoryDTO) throws ResourceNotFoundException, BadRequestException {
        CategoryDTO categoryUpdated = categoryService.update(categoryDTO);
        logger.info("Category successfully updated: " + categoryDTO);
        return ResponseEntity.ok(categoryUpdated);
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> findAllCategories() {
        List<CategoryDTO> categories = categoryService.findAll();
        logger.info(categories.size() + (categories.size() == 1 ? " category" : " categories")  + " successfully returned.");
        return ResponseEntity.ok(categories);
    }
}

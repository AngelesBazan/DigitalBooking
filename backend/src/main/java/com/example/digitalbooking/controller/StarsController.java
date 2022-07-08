package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.StarsDTO;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.StarsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/stars")
public class StarsController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final StarsService starsService;
    private final ObjectMapper mapper;

    @GetMapping("/{id}")
    public ResponseEntity<StarsDTO> findProductById(@PathVariable Long id) throws ResourceNotFoundException {
        StarsDTO starsDTO = starsService.findById(id);
        logger.info("Rating successfully returned: " + starsDTO);
        return ResponseEntity.ok(starsDTO);
    }

    @PostMapping("/{productId}")
    public ResponseEntity<StarsDTO> createRate(@RequestBody StarsDTO starsDTO) throws Exception {
        StarsDTO rateCreated = starsService.createRate(starsDTO);
        logger.info("Rate successfully created: " + rateCreated);
        return ResponseEntity.status(201).body(rateCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteRate(@PathVariable Long id) throws Exception {
        starsService.deleteRate(id);
        logger.info("Rate with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Rate deleted");
    }

    @GetMapping
    public ResponseEntity<List<StarsDTO>> findAllProducts() {
        List<StarsDTO> ratings = starsService.findAll();
        logger.info(ratings.size() + (ratings.size() == 1 ? " rate" : " rates") + " successfully returned.");
        return ResponseEntity.ok(ratings);
    }
}

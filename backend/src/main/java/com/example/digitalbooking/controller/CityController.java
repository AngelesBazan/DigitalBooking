package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.CityDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.CityService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cities")
public class CityController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final CityService cityService;

    @GetMapping("/{id}")
    public ResponseEntity<CityDTO> findCategoryById(@PathVariable Long id)  throws ResourceNotFoundException {
        CityDTO cityDTO = cityService.findById(id);
        logger.info("City successfully returned: " + cityDTO);
        return ResponseEntity.ok(cityDTO);
    }

    @PostMapping
    public ResponseEntity<CityDTO> createCity(@RequestBody CityDTO cityDTO) {
        CityDTO cityCreated = cityService.create(cityDTO);
        logger.info("City successfully saved: " + cityCreated);
        return ResponseEntity.ok(cityCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCityById(@PathVariable long id) throws ResourceNotFoundException, BadRequestException {
        cityService.deleteById(id);
        logger.info("City with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("City deleted");
    }

    @PutMapping
    public ResponseEntity<CityDTO> updateCity(@RequestBody CityDTO cityDTO) throws ResourceNotFoundException, BadRequestException {
        CityDTO cityUpdated = cityService.update(cityDTO);
        logger.info("City successfully updated: " + cityDTO);
        return ResponseEntity.ok(cityUpdated);
    }

    @GetMapping
    public ResponseEntity<List<CityDTO>> findAllCategories() {
        List<CityDTO> cities = cityService.findAll();
        logger.info(cities.size() + (cities.size() == 1 ? " city" : " cities")  + " successfully returned.");
        return ResponseEntity.ok(cities);
    }
}

package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.ImageDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.ImageService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/images")
public class ImageController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final ImageService imageService;

    @GetMapping("/{id}")
    public ResponseEntity<ImageDTO> findImageById(@PathVariable long id)  throws ResourceNotFoundException {
        ImageDTO imageDTO = imageService.findById(id);
        logger.info("Image successfully returned: " + imageDTO);
        return ResponseEntity.ok(imageDTO);
    }

    @PostMapping
    public ResponseEntity<ImageDTO> createImage(@RequestBody ImageDTO imageDTO) {
        ImageDTO imageCreated = imageService.create(imageDTO);
        logger.info("Image successfully saved: " + imageCreated);
        return ResponseEntity.ok(imageCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteImageById(@PathVariable long id) throws ResourceNotFoundException, BadRequestException {
        imageService.deleteById(id);
        logger.info("Image with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Image deleted");
    }

    @PutMapping
    public ResponseEntity<ImageDTO> updateImage(@RequestBody ImageDTO imageDTO) throws ResourceNotFoundException, BadRequestException {
        ImageDTO imageUpdated = imageService.update(imageDTO);
        logger.info("Image successfully updated: " + imageDTO);
        return ResponseEntity.ok(imageUpdated);
    }

    @GetMapping
    public ResponseEntity<List<ImageDTO>> findAllImages() {
        List<ImageDTO> images = imageService.findAll();
        logger.info(images.size() + (images.size() == 1 ? " image" : " images")  + " successfully returned.");
        return ResponseEntity.ok(images);
    }
}

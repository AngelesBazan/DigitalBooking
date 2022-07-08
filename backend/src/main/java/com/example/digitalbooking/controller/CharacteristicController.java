package com.example.digitalbooking.controller;

import com.example.digitalbooking.dto.CharacteristicDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.service.impl.CharacteristicService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/characteristics")
public class CharacteristicController {
    private static final Logger logger = Logger.getLogger(GlobalExceptionHandler.class);
    private final CharacteristicService characteristicService;

    @GetMapping("/{id}")
    public ResponseEntity<CharacteristicDTO> findCharacteristicById(@PathVariable long id)  throws ResourceNotFoundException {
        CharacteristicDTO characteristicDTO = characteristicService.findById(id);
        logger.info("Characteristic successfully returned: " + characteristicDTO);
        return ResponseEntity.ok(characteristicDTO);
    }

    @PostMapping
    public ResponseEntity<CharacteristicDTO> createCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) {
        CharacteristicDTO characteristicCreated = characteristicService.create(characteristicDTO);
        logger.info("Characteristic successfully saved: " + characteristicCreated);
        return ResponseEntity.ok(characteristicCreated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCharacteristicById(@PathVariable long id) throws ResourceNotFoundException, BadRequestException {
        characteristicService.deleteById(id);
        logger.info("Characteristic with id: " + id + ", successfully deleted.");
        return ResponseEntity.ok("Characteristic deleted");
    }

    @PutMapping
    public ResponseEntity<CharacteristicDTO> updateCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) throws ResourceNotFoundException, BadRequestException {
        CharacteristicDTO characteristicUpdated = characteristicService.update(characteristicDTO);
        logger.info("Characteristic successfully updated: " + characteristicDTO);
        return ResponseEntity.ok(characteristicUpdated);
    }

    @GetMapping
    public ResponseEntity<List<CharacteristicDTO>> findAllCharacteristics() {
        List<CharacteristicDTO> characteristics = characteristicService.findAll();
        logger.info(characteristics.size() + (characteristics.size() == 1 ? " characteristic" : " characteristics")  + " successfully returned.");
        return ResponseEntity.ok(characteristics);
    }
}

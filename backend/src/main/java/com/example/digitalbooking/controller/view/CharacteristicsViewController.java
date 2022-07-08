package com.example.digitalbooking.controller.view;

import com.example.digitalbooking.exceptions.GlobalExceptionHandler;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.view.CharacteristicsView;
import com.example.digitalbooking.service.impl.view.CharacteristicsViewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/characteristicsview")
public class CharacteristicsViewController {
    private final CharacteristicsViewService characteristicsViewService;

    @GetMapping("/{id}")
    public ResponseEntity<List<CharacteristicsView>> findProductById(@PathVariable Long id) throws ResourceNotFoundException {
        List<CharacteristicsView> characteristics = characteristicsViewService.findProductById(id);
        return ResponseEntity.ok(characteristics);
    }

    @GetMapping
    public ResponseEntity<List<CharacteristicsView>> seeAll() {
        List<CharacteristicsView> characteristics = characteristicsViewService.findAll();
        return ResponseEntity.ok(characteristics);
    }
}

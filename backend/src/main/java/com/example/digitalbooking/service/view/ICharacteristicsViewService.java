package com.example.digitalbooking.service.view;

import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.view.CharacteristicsView;

import java.util.List;

public interface ICharacteristicsViewService {
    public List<CharacteristicsView> findProductById(Long id) throws ResourceNotFoundException;
    public List<CharacteristicsView> findAll();
}

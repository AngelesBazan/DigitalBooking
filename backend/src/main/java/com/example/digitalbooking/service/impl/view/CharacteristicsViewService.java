package com.example.digitalbooking.service.impl.view;

import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.model.view.CharacteristicsView;
import com.example.digitalbooking.model.view.ProductView;
import com.example.digitalbooking.repository.view.ICharacteristicsViewRepository;
import com.example.digitalbooking.repository.view.IProductViewRepository;
import com.example.digitalbooking.service.view.ICharacteristicsViewService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CharacteristicsViewService implements ICharacteristicsViewService {
    @Autowired
    private ICharacteristicsViewRepository characteristicsViewRepository;

    @Override
    public List<CharacteristicsView> findProductById(Long id) throws ResourceNotFoundException {
        List<CharacteristicsView> characteristicsView = characteristicsViewRepository.findProductById(id);
        if(characteristicsView == null) {
            throw new ResourceNotFoundException("There is no product with id=" + id + ".");
        }

        return characteristicsView;
    }

    @Override
    @Transactional(readOnly = true)
    public List<CharacteristicsView> findAll() {
        List<CharacteristicsView> characteristicsViewList = characteristicsViewRepository.findAll();

        return characteristicsViewList;
    }
}

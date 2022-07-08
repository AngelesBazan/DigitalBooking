package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.CharacteristicDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Characteristic;
import com.example.digitalbooking.repository.ICharacteristicRepository;
import com.example.digitalbooking.service.ICharacteristicService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CharacteristicService implements ICharacteristicService {
    private final ICharacteristicRepository characteristicRepository;
    private final ObjectMapper mapper;

    @Override
    public CharacteristicDTO findById(Long id) throws ResourceNotFoundException {
        Characteristic characteristic = characteristicRepository.findById(id).orElse(null);
        if(characteristic == null) {
            throw new ResourceNotFoundException("There is no characteristic with id=" + id + ".");
        }
        return mapper.convertValue(characteristic, CharacteristicDTO.class);
    }

    @Override
    public CharacteristicDTO create(CharacteristicDTO characteristicDTO) {
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        return mapper.convertValue(characteristicRepository.save(characteristic), CharacteristicDTO.class);
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        Characteristic characteristic = characteristicRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no characteristic with id=" + id + ".");
        }
        characteristicRepository.delete(characteristic);
    }

    @Override
    public CharacteristicDTO update(CharacteristicDTO characteristicDTO) throws ResourceNotFoundException, BadRequestException {
        if(characteristicDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(characteristicDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no characteristic with id=" + characteristicDTO.getId() + ".");
        }
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        Characteristic newCharacteristicSave = characteristicRepository.save(characteristic);
        return mapper.convertValue(newCharacteristicSave, CharacteristicDTO.class);
    }

    @Override
    public List<CharacteristicDTO> findAll() {
        List<Characteristic> characteristicList = characteristicRepository.findAll();

        List<CharacteristicDTO> characteristicDTOList = characteristicList.stream().map(characteristic -> mapper.convertValue(characteristic, CharacteristicDTO.class)).collect(Collectors.toList());
        return characteristicDTOList;
    }

//    @Override
//    public Page<CharacteristicDTO> findAll(Pageable pageable) {
//        return null;
//    }
}

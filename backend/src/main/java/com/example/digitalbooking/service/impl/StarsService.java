package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.StarsDTO;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Stars;
import com.example.digitalbooking.repository.IStarsRepository;
import com.example.digitalbooking.service.IStarsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StarsService implements IStarsService {

    private final IStarsRepository starsRepository;
    private final ObjectMapper mapper;

    @Override
    public StarsDTO findById(Long id) throws ResourceNotFoundException {
        Stars like = starsRepository.findById(id).orElse(null);
        if(like == null) {
            throw new ResourceNotFoundException("There is no like with id = " + id + ".");
        }

        return mapper.convertValue(like, StarsDTO.class);
    }

    @Override
    public List<StarsDTO> findAll() {
        List <Stars> starsList = starsRepository.findAll();

        List<StarsDTO> starsDTOList = starsList.stream().map(star -> mapper.convertValue(star, StarsDTO.class)).collect(Collectors.toList());
        return starsDTOList;
    }

    @Override
    public StarsDTO createRate(StarsDTO starsDTO) throws Exception {
        starsDTO.setScore(starsDTO.getScore());
        starsDTO.setUser(starsDTO.getUser());
        starsDTO.setProduct(starsDTO.getProduct());

        Stars rate = mapper.convertValue(starsDTO, Stars.class);
        return mapper.convertValue(starsRepository.save(rate), StarsDTO.class);
    }

    @Override
    public void deleteRate(Long id) throws Exception {
        Stars rate = starsRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no like with id = " + id + ".");
        }
        starsRepository.delete(rate);
    }
}

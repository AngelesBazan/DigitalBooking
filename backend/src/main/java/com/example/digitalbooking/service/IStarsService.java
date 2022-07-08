package com.example.digitalbooking.service;

import com.example.digitalbooking.dto.StarsDTO;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;

import java.util.List;

public interface IStarsService {
    List<StarsDTO> findAll();
    StarsDTO findById(Long id) throws ResourceNotFoundException;
    StarsDTO createRate(StarsDTO starsDTO) throws Exception;
    void deleteRate(Long id) throws Exception;
}

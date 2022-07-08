
package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.CityDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.City;
import com.example.digitalbooking.repository.ICityRepository;
import com.example.digitalbooking.service.ICityService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CityService implements ICityService {
    private final ICityRepository cityRepository;
    private final ObjectMapper mapper;

    @Override
    public CityDTO findById(Long id) throws ResourceNotFoundException {
        City city = cityRepository.findById(id).orElse(null);
        if(city == null) {
            throw new ResourceNotFoundException("There is no city with id=" + id + ".");
        }
        return mapper.convertValue(city, CityDTO.class);
    }

    @Override
    public CityDTO create(CityDTO cityDTO) {
        City city = mapper.convertValue(cityDTO, City.class);
        return mapper.convertValue(cityRepository.save(city), CityDTO.class);
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        City city = cityRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no city with id=" + id + ".");
        }
        cityRepository.delete(city);
    }

    @Override
    public CityDTO update(CityDTO cityDTO) throws ResourceNotFoundException, BadRequestException {
        if(cityDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(cityDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no city with id=" + cityDTO.getId() + ".");
        }
        City city = mapper.convertValue(cityDTO, City.class);
        City newCitySave = cityRepository.save(city);
        return mapper.convertValue(newCitySave, CityDTO.class);
    }

    @Override
    public List<CityDTO> findAll() {
        List<City> cityList = cityRepository.findAll();

        List<CityDTO> cityDTOList = cityList.stream().map(city -> mapper.convertValue(city, CityDTO.class)).collect(Collectors.toList());
        return cityDTOList;
    }
}

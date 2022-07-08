package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICRUDService<T> {
    T findById(Long id) throws ResourceNotFoundException;
    T create(T t) throws Exception;
    void deleteById(Long id) throws ResourceNotFoundException, BadRequestException;
    T update(T t) throws ResourceNotFoundException, BadRequestException;
    List<T> findAll();
    //Page<T> findAll(Pageable pageable);
}
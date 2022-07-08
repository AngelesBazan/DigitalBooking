package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.CategoryDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Category;
import com.example.digitalbooking.repository.ICategoryRepository;
import com.example.digitalbooking.repository.IProductRepository;
import com.example.digitalbooking.service.ICategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CategoryService implements ICategoryService {
    private final ICategoryRepository categoryRepository;
    private final IProductRepository productRepository;
    private final ObjectMapper mapper;

    @Override
    public CategoryDTO findById(Long id) throws ResourceNotFoundException {
        Category category = categoryRepository.findById(id).orElse(null);
        if(category == null) {
            throw new ResourceNotFoundException("There is no category with id=" + id + ".");
        }
        CategoryDTO categoryDTO = mapper.convertValue(category, CategoryDTO.class);
        categoryDTO.setProductsQuantity(productRepository.findCategoriesQuantity(category.getTitle()));
        return categoryDTO;
    }

    @Override
    public CategoryDTO create(CategoryDTO categoryDTO) {
        Category category = mapper.convertValue(categoryDTO, Category.class);
        return mapper.convertValue(categoryRepository.save(category), CategoryDTO.class);
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        Category category = categoryRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no category with id=" + id + ".");
        }
        categoryRepository.delete(category);
    }

    @Override
    public CategoryDTO update(CategoryDTO categoryDTO) throws ResourceNotFoundException, BadRequestException{
        if(categoryDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(categoryDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no category with id=" + categoryDTO.getId() + ".");
        }
        Category category = mapper.convertValue(categoryDTO, Category.class);
        Category newCategorySave = categoryRepository.save(category);
        return mapper.convertValue(newCategorySave, CategoryDTO.class);
    }

    @Override
    public List<CategoryDTO> findAll() {
        List<Category> categoryList = categoryRepository.findAll();

        List<CategoryDTO> categoryDTOList = categoryList.stream().map(category -> mapper.convertValue(category, CategoryDTO.class)).collect(Collectors.toList());

        for (CategoryDTO cDTO : categoryDTOList){
            cDTO.setProductsQuantity(productRepository.findCategoriesQuantity(cDTO.getTitle()));
        }
        return categoryDTOList;
    }
}
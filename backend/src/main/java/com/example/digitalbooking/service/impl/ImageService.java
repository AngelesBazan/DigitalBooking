package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.ImageDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.Image;
import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.repository.IImageRepository;
import com.example.digitalbooking.repository.IProductRepository;
import com.example.digitalbooking.service.IImageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ImageService implements IImageService {
    private final IImageRepository imageRepository;
    private final IProductRepository productRepository;
    private final ObjectMapper mapper;

    @Override
    public ImageDTO findById(Long id) throws ResourceNotFoundException {
        Image image = imageRepository.findById(id).orElse(null);
        if(image == null) {
            throw new ResourceNotFoundException("There is no image with id=" + id + ".");
        }
        return mapper.convertValue(image, ImageDTO.class);
    }

    @Override
    public ImageDTO create(ImageDTO imageDTO) {
        Image image = mapper.convertValue(imageDTO, Image.class);
        image.setProduct(getProduct(imageDTO));

        Image imageSaved = imageRepository.save(image);

        ImageDTO imageSavedDTO = mapper.convertValue(imageSaved, ImageDTO.class);
        imageSavedDTO.setProduct(getProduct(imageDTO));

        return imageSavedDTO;
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        Image image = imageRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no image with id=" + id + ".");
        }
        imageRepository.delete(image);
    }

    @Override
    public ImageDTO update(ImageDTO imageDTO) throws ResourceNotFoundException, BadRequestException {
        if(imageDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(imageDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no image with id=" + imageDTO.getId() + ".");
        }

        imageDTO.setProduct(getProduct(imageDTO));

        Image image = mapper.convertValue(imageDTO, Image.class);
        image.setProduct(getProduct(imageDTO));
        Image newImageSave = imageRepository.save(image);

        ImageDTO newImageSaveDTO = mapper.convertValue(newImageSave, ImageDTO.class);
        return newImageSaveDTO;
    }

    @Override
    public List<ImageDTO> findAll() {
        List<Image> imageList = imageRepository.findAll();

        List<ImageDTO> imageDTOList = imageList.stream().map(image -> mapper.convertValue(image, ImageDTO.class)).collect(Collectors.toList());
        return imageDTOList;
    }

    private Product getProduct(ImageDTO imageDTO) {
        Product product = productRepository.findById(imageDTO.getProduct().getId()).get();
        return product;
    }
}

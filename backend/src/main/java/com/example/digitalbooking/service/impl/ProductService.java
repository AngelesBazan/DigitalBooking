package com.example.digitalbooking.service.impl;

import com.example.digitalbooking.dto.ProductDTO;
import com.example.digitalbooking.exceptions.BadRequestException;
import com.example.digitalbooking.exceptions.ResourceNotFoundException;
import com.example.digitalbooking.model.*;
import com.example.digitalbooking.repository.*;
import com.example.digitalbooking.service.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Slf4j
public class ProductService implements IProductService {
    private final IProductRepository productRepository;
    private final ICategoryRepository categoryRepository;
    private final ICharacteristicRepository characteristicRepository;
    private final ICityRepository cityRepository;
    private final IUserRepository userRepository;
    private final ObjectMapper mapper;

    @Override
    public ProductDTO findById(Long id) throws ResourceNotFoundException {
        Product product = productRepository.findById(id).orElse(null);
        if(product == null) {
            throw new ResourceNotFoundException("There is no product with id=" + id + ".");
        }

        return mapper.convertValue(product, ProductDTO.class);
    }

    @Override
    public ProductDTO create(ProductDTO productDTO) {

        productDTO.setCategory(getCategory(productDTO));
        productDTO.setCharacteristics(getCharacteristicList(productDTO));
        productDTO.setCity(getCity(productDTO));
        productDTO.setUser(getUser(productDTO));

        Product product = mapper.convertValue(productDTO, Product.class);
        return mapper.convertValue(productRepository.save(product), ProductDTO.class);
    }

    @Override
    public void deleteById(Long id) throws ResourceNotFoundException, BadRequestException {
        Product product = productRepository.findById(id).orElse(null);
        if(findById(id) == null) {
            throw new ResourceNotFoundException("There is no product with id=" + id + ".");
        }
        productRepository.delete(product);
    }

    @Override
    public ProductDTO update(ProductDTO productDTO) throws ResourceNotFoundException, BadRequestException {
        if(productDTO.getId() == null) {
            throw new BadRequestException("The id cannot be null.");
        }
        if(findById(productDTO.getId()) == null) {
            throw new ResourceNotFoundException("There is no product with id=" + productDTO.getId() + ".");
        }

        productDTO.setCategory(getCategory(productDTO));
        productDTO.setCharacteristics(getCharacteristicList(productDTO));
        productDTO.setCity(getCity(productDTO));
        productDTO.setUser(getUser(productDTO));

        Product product = mapper.convertValue(productDTO, Product.class);
        Product newProductSave = productRepository.save(product);
        return mapper.convertValue(newProductSave, ProductDTO.class);
    }

    @Override
    public List<ProductDTO> findAll() {
        List<Product> productList = productRepository.findAll();

        List<ProductDTO> productDTOList = productList.stream().map(product -> mapper.convertValue(product, ProductDTO.class)).collect(Collectors.toList());
        return productDTOList;
    }

//    @Override
//    public Page<ProductDTO> findAll(Pageable pageable) {
//        Page<Product> productPage = productRepository.findAll(pageable);
//        log.info(productPage.getTotalElements()+"");
//        List<ProductDTO> productDTOList = productPage.stream().map(product -> mapper.convertValue(product, ProductDTO.class)).collect(Collectors.toList());
//        Page<ProductDTO> productDTOPage = new PageImpl<ProductDTO>(productDTOList, PageRequest.of(productPage.getNumber(),productPage.getSize()
//        , productPage.getSort()), productPage.getTotalElements());
//        return productDTOPage;
//    }

    private Category getCategory(ProductDTO productDTO) {
        Category category = categoryRepository.findById(productDTO.getCategory().getId()).get();
        return category;
    }

    private List<Characteristic> getCharacteristicList(ProductDTO productDTO) {
        List<Characteristic> characteristicIdList = productDTO.getCharacteristics();
        List<Characteristic> characteristicList = new ArrayList<>();
        for (Characteristic c: characteristicIdList) {
            Characteristic characteristic = characteristicRepository.findById(c.getId()).get();
            characteristicList.add(characteristic);
        }
        return characteristicList;
    }

    private City getCity(ProductDTO productDTO) {
        City city = cityRepository.findById(productDTO.getCity().getId()).get();
        return city;
    }

    private User getUser(ProductDTO productDTO) {
        User user = userRepository.findById(productDTO.getUser().getId()).get();
        return user;
    }    
    
    @Override
    public List<ProductDTO> filterByDate(LocalDate initial_date, LocalDate final_date) {
        List<Product> products = productRepository.filterByDate(initial_date, final_date);
        List<ProductDTO> productDTOList = new ArrayList<>();
        for (Product product : products) {
            productDTOList.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOList;
    }

    @Override
    public List<ProductDTO> filterByCity(String cityName) {
        List<Product> products = productRepository.filterByCity(cityName);
        List<ProductDTO> productsDTO = new ArrayList<>();

        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productsDTO;
    }

    //Traigo la cantidad de productos por categoria
    @Override
    public List<ProductDTO> filterByCategory(String categoryTitle){
        List<Product> products = productRepository.filterByCategory(categoryTitle);

        List<ProductDTO> productsDTO = new ArrayList<>();
        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productsDTO;
    }

    @Override
    public List<ProductDTO> filterByDateAndCity(LocalDate initial_date, LocalDate final_date, String name) {
        List<Product> products = productRepository.filterByDateAndCity(initial_date, final_date, name);
        List<ProductDTO> productDTOList = new ArrayList<>();
        for (Product product: products) {
            productDTOList.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOList;
    }

    @Override
    public List<ProductDTO> filterByDateAndCategory(LocalDate initial_date, LocalDate final_date, String categoryName) {
        List<Product> products = productRepository.filterByDateAndCategory(initial_date, final_date, categoryName);
        List<ProductDTO> productDTOList = new ArrayList<>();
        for (Product product: products) {
            productDTOList.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOList;
    }

    @Override
    public List<ProductDTO> filterByCityAndCategory(String cityName, String categoryName) {
        List<Product> products = productRepository.filterByCityAndCategory(cityName, categoryName);
        List<ProductDTO> productDTOList = new ArrayList<>();
        for (Product product: products) {
            productDTOList.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOList;
    }

    @Override
    public List<ProductDTO> filterByDateCityAndCategory(LocalDate initial_date, LocalDate final_date, String cityName, String category) {
        List<Product> products = productRepository.filterByDateCityAndCategory(initial_date, final_date, cityName, category);
        List<ProductDTO> productDTOList = new ArrayList<>();
        for (Product product: products) {
            productDTOList.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOList;
    }

    @Override
    public List<Booking> getBookingsByProductId(Long id) {
        return productRepository.getBookingsByProductId(id);
    }

    @Override
    public List<ProductDTO> findProductsByUserId(Long id) {
        List<Product> products = productRepository.findProductsByUserId(id);
        List<ProductDTO> productDTOList = new ArrayList<>();
        for (Product product: products) {
            productDTOList.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productDTOList;
    }
}

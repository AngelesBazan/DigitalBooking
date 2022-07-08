package com.example.digitalbooking.dto;

import com.example.digitalbooking.model.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class CategoryDTO {
    private Long id;
    private String title;
    private String description;
    private String urlImage;

    @JsonIgnore
    private Set<Product> products = new HashSet<>();
    private Long productsQuantity;

    @Override
    public String toString() {
        return "CategoryDTO{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", urlImage='" + urlImage + '\'' +
                '}';
    }
}

package com.example.digitalbooking.dto;

import com.example.digitalbooking.model.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ImageDTO {
    private Long id;
    private String title;
    private String urlImage;
    private Product product;

    @Override
    public String toString() {
        return "ImageDTO{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", urlImage='" + urlImage + '\'' +
                ", product=" + product +
                '}';
    }
}

package com.example.digitalbooking.dto;

import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StarsDTO {
    private Long id;
    private Integer score;
    private User user;
    private Product product;

    @Override
    public String toString() {
        return "StarsDTO{" +
                "id=" + id +
                ", score=" + score +
                ", user=" + user +
                ", product=" + product +
                '}';
    }
}

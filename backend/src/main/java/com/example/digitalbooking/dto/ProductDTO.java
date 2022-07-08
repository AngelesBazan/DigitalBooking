package com.example.digitalbooking.dto;

import com.example.digitalbooking.model.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private String address;
    private double latitude;
    private double longitude;
    private LocalTime checkinStart;
    private LocalTime checkinEnd;
    private String houseRules;
    private String healthAndSafety;
    private String cancellationPolicy;
    private Category category;
    private List<Characteristic> characteristics;
    private City city;
    private List<Image> images = new ArrayList<>();
    private List<Booking> bookings = new ArrayList<>();
    private User user;
    private List<Stars> stars = new ArrayList<>();

    @Override
    public String toString() {
        return "ProductDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", address='" + address + '\'' +
                ", houseRules='" + houseRules + '\'' +
                ", healthAndSafety='" + healthAndSafety + '\'' +
                ", cancellationPolicy='" + cancellationPolicy + '\'' +
                ", category=" + category +
                ", characteristics=" + characteristics +
                ", city=" + city +
                ", images=" + images +
                ", bookings=" + bookings +
                ", user=" + user +
                ", stars=" + stars +
                '}';
    }
}

package com.example.digitalbooking.dto;

import com.example.digitalbooking.model.Booking;
import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.model.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDTO {
    private Long id;
    private String name;
    private String lastname;
    private String username;
    private String password;
    private String city;
    private List<Booking> bookings = new ArrayList<>();
    private Collection<Role> roles = new ArrayList<>();
    private List<Product> products = new ArrayList<>();

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", city='" + city + '\'' +
                ", bookings=" + bookings +
                ", roles=" + roles +
                '}';
    }
}

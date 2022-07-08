package com.example.digitalbooking.dto;

import com.example.digitalbooking.model.Product;
import com.example.digitalbooking.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookingDTO {
    private Long id;
    private final LocalDateTime booking_start_time = LocalDateTime.now();
    private LocalDate initial_date;
    private LocalDate final_date;
    private User user;
    private Product product;


    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", booking_start_time\"='" + booking_start_time + '\'' +
                ", initial_date='" + initial_date + '\'' +
                ", final_date='" + final_date + '\''  +
                ", user='" + user + '\''  +
                ", product='" + product + '\''  +
                '}';
    }
}

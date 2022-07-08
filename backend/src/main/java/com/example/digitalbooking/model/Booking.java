package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@Table(name = "bookings")

@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
public class Booking {

    @Id
    @SequenceGenerator(name = "booking_sequence", sequenceName = "booking_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NotNull
    @Column(name="booking_start_time")
    private final LocalDateTime booking_start_time = LocalDateTime.now();

    @NotNull
    @Column(name="initial_date")
    private LocalDate initial_date;

    @NotNull
    @Column(name="final_date")
    private LocalDate final_date;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private User user;


    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", booking_start_time\"='" + booking_start_time + '\'' +
                ", initial_date='" + initial_date + '\'' +
                ", final_date='" + final_date + '\''  +
                '}';
    }

}

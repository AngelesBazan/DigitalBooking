package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Booking;
import com.example.digitalbooking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Query("SELECT b FROM Booking b WHERE b.user.id =?1")
    List<Booking> getBookingsByUserId(@Param("id") Long id);
}

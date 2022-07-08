package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Stars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStarsRepository extends JpaRepository<Stars, Long> {
    @Query("SELECT s FROM Stars s")
    List<Stars> findAll();
}

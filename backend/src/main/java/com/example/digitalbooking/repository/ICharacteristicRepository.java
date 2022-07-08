package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICharacteristicRepository extends JpaRepository<Characteristic, Long> {
}

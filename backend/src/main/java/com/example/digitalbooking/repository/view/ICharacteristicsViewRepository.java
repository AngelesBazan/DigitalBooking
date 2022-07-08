package com.example.digitalbooking.repository.view;

import com.example.digitalbooking.model.view.CharacteristicsView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICharacteristicsViewRepository extends JpaRepository<CharacteristicsView, Long> {
    @Query(value = "SELECT * FROM characteristicsview WHERE product_id = ?1", nativeQuery = true)
    List<CharacteristicsView> findProductById(@Param("id")Long id);

    @Query(value = "SELECT * FROM characteristicsview", nativeQuery = true)
    List<CharacteristicsView> findAll();
}

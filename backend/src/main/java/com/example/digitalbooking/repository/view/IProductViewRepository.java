package com.example.digitalbooking.repository.view;

import com.example.digitalbooking.model.view.ProductView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IProductViewRepository extends JpaRepository<ProductView, Long> {
    @Query(value = "SELECT * FROM productview ORDER BY RAND()", nativeQuery = true)
    List<ProductView> findAll();

    @Query(value = "SELECT * FROM productview WHERE NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = productview.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<ProductView> filterByDate(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date);

    @Query(value = "SELECT * FROM productview WHERE city LIKE ?1", nativeQuery = true)
    List<ProductView> filterByCity(@Param("name") String cityName);

    @Query(value = "SELECT * FROM productview WHERE category LIKE ?1", nativeQuery = true)
    List<ProductView> filterByCategory(String category);

    @Query(value = "SELECT * FROM productview WHERE city LIKE ?3 AND NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = productview.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<ProductView> filterByDateAndCity(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date, @Param("name")String name );

    @Query(value = "SELECT * FROM productview WHERE category LIKE ?3 AND NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = productview.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<ProductView> filterByDateAndCategory(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date, @Param("categoryName")String categoryName);

    @Query(value = "SELECT * FROM productview WHERE city LIKE ?1 AND category LIKE ?2", nativeQuery = true)
    List<ProductView> filterByCityAndCategory(@Param("cityName")String cityName, @Param("categoryName")String categoryName);

    @Query(value = "SELECT * FROM productview WHERE city LIKE ?3 AND category LIKE ?4 AND NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = productview.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<ProductView> filterByDateCityAndCategory(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date, @Param("city_name") String cityName, @Param("category") String category);
}

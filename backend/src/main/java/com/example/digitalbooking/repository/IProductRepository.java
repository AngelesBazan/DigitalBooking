package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Booking;
import com.example.digitalbooking.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p")
    List<Product> findAll();

//    @Query("SELECT p FROM productview p ORDER BY RAND()")
//    Page<Product> findAll(Pageable pageable);

    @Query(value = "SELECT * FROM products WHERE NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = products.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))))", nativeQuery = true)
    List<Product> filterByDate(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date);

    @Query("SELECT p FROM Product p WHERE p.city.name LIKE ?1")
    List<Product> filterByCity(@Param("name") String cityName);

    @Query("SELECT p FROM Product p WHERE LOWER(p.category.title) LIKE ('%' || LOWER(?1) || '%')")
    List<Product> filterByCategory(String category);

    @Query(value = "SELECT * FROM products LEFT JOIN cities ON cities.id = products.city_id WHERE cities.name LIKE ?3 AND NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = products.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<Product> filterByDateAndCity(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date, @Param("name")String name );

    @Query(value = "SELECT * FROM products JOIN categories ON products.category_id = categories.id WHERE categories.title LIKE ?3 AND NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = products.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<Product> filterByDateAndCategory(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date, @Param("categoryName")String categoryName);

    @Query(value = "SELECT * FROM products JOIN categories ON products.category_id = categories.id LEFT JOIN cities ON cities.id = products.city_id WHERE cities.name LIKE ?1 AND categories.title LIKE ?2", nativeQuery = true)
    List<Product> filterByCityAndCategory(@Param("cityName")String cityName, @Param("categoryName")String categoryName);

    @Query(value = "SELECT * FROM products JOIN categories ON products.category_id = categories.id LEFT JOIN cities ON cities.id = products.city_id WHERE cities.name LIKE ?3 AND categories.title LIKE ?4 AND NOT EXISTS (SELECT * FROM bookings WHERE bookings.product_id = products.id AND ((?1 BETWEEN bookings.initial_date AND bookings.final_date) OR (?2 BETWEEN bookings.initial_date AND bookings.final_date) OR ((bookings.initial_date BETWEEN ?1 AND ?2) OR (bookings.final_date BETWEEN ?1 AND ?2))));", nativeQuery = true)
    List<Product> filterByDateCityAndCategory(@Param("initial_date") LocalDate initial_date, @Param("final_date") LocalDate final_date, @Param("city_name") String cityName, @Param("category") String category);

    @Query("SELECT b FROM Booking b WHERE b.product.id =?1")
    List<Booking> getBookingsByProductId(@Param("id") Long id);

    @Query("SELECT COUNT(p) FROM Product p WHERE p.category.title=?1")
    Long findCategoriesQuantity(@Param("title") String title);
    
    @Query("SELECT p FROM Product p WHERE p.user.id =?1")
    List<Product> findProductsByUserId(Long id);
}

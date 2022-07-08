package com.example.digitalbooking.model.view;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;

@Entity
@Immutable
@Table(name = "`product_view`")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
//
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ProductView {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "`name`")
    private String name;
    @Column(name = "`description`", length = 5000)
    private String description;
    @Column(name = "category")
    private String category;
    @Column(name = "city")
    private String city;
    @Column(name = "url")
    private String image;

    @Override
    public String toString() {
        return "ProductView{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}

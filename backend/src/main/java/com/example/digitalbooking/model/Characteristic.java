package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
@Table(name = "characteristics")

@AllArgsConstructor
@NoArgsConstructor
public class Characteristic {

    @Id
    @SequenceGenerator(name = "characteristic_sequence", sequenceName = "characteristic_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NotNull
    @Column(name="name")
    private String name;

    @NotNull
    @Column(name="icon")
    private String icon;

    @ManyToMany(mappedBy = "characteristics")
    @JsonIgnore
    private List<Product> products;

    @Override
    public String toString() {
        return "Characteristic{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                '}';
    }
}
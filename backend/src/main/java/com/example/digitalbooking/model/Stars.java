package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name="stars")

@AllArgsConstructor
@NoArgsConstructor
public class Stars {
    @Id
    @SequenceGenerator(name = "stars_sequence", sequenceName = "stars_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "score")
    private Integer score;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "stars")
    @JsonIgnore
    private List<Product> products;

    @Override
    public String toString() {
        return "Stars{" +
                "id=" + id +
                ", score=" + score +
                ", user=" + user +
                ", product=" + products +
                '}';
    }
}

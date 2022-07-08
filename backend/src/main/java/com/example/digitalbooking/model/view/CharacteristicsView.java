package com.example.digitalbooking.model.view;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Immutable
@Table(name = "`characteristics_view`")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class CharacteristicsView {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "`name`")
    private String name;
    @Column(name = "`icon`")
    private String icon;
    @Column(name = "product_id")
    private Long product_id;

    @Override
    public String toString() {
        return "CharacteristicsViewController{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                ", product_id=" + product_id +
                '}';
    }
}

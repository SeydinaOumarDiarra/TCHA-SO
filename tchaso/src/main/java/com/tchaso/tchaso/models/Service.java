package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "service")

public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description")
    private String description;

    @Column(name = "nomser")
    private String nomser;

    @ManyToOne
    private Administrateur administrateur;

}

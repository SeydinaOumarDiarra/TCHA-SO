package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ville")

public class Ville {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "nomville")
    private String nomville;

    @ManyToOne
    private Travailleur travailleur;

}

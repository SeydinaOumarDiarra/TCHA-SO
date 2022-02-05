package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "travailleur")

public class Travailleur extends User {


    @Column(name = "photo")
    private String photo;

    @Column(name = "pieceiden")
    private String pieceiden;

    @Column(name = "quartier")
    private String quartier;

    @ManyToOne
    private Administrateur administrateur;

    @ManyToOne
    private Specialite specialite;

    @ManyToOne
    private Ville ville;



}

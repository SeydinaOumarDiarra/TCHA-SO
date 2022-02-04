package com.tchaso.tchaso.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@Data
@MappedSuperclass // Ses champs sont enregistrés en base, et sont associés aux champs de toutes les entités

public class User implements Serializable {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "numWhasapp")
    private String numWhasapp;

    @Column(name = "genre")
    private String genre;

    private Etat etat;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;


}

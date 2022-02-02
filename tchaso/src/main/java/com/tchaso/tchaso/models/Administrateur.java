package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "admin")

public class Administrateur extends User {

    @Column(name = "email")
    private String email;

    @Column(name = "profil")
    private String profil;

}

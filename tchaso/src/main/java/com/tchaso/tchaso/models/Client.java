package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "client")

public class Client extends User {

    @Column(name = "profession")
    private String profession;

    @Column(name = "photo")
    private String photo;

    @ManyToOne
    private Administrateur administrateur;
}

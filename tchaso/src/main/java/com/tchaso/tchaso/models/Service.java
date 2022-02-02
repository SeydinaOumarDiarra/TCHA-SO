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
@Table(name = "service")

public class Service extends User{

    @Column(name = "description")
    private String description;

    @Column(name = "nomser")
    private String nomser;

    @ManyToOne
    private Administrateur administrateur;

}

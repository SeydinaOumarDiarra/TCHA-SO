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
@Table(name = "ville")

public class Ville extends User{

    @Column(name = "nomville")
    private String nomville;

    @ManyToOne
    private Travailleur travailleur;

}

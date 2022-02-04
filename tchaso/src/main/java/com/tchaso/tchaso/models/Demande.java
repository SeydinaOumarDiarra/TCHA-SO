package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "demande")

public class Demande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "statutdemande")
    private String statutdemande;

    @Column(name = "motifdemande")
    private String motifdemande;

    @Column(name = "datedemande")
    private Date datedemande;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Travailleur travailleur;
}

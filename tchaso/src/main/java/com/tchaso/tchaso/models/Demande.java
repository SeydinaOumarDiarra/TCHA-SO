package com.tchaso.tchaso.models;

import com.tchaso.tchaso.enumeration.Etat;
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

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.actif;

    @Column(name = "datedemande")
    private Date datedemande;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Travailleur travailleur;
}

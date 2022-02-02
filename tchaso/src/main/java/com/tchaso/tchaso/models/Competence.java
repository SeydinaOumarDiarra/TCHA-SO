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
@Table(name = "competence")

public class Competence extends User{

    @Column(name = "description")
    private String description;

    @Column(name = "nomCom")
    private String nomCom;

    @ManyToOne
    private Specialite specialite;

}

package com.tchaso.tchaso.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "admin")

public class Administrateur extends User  {


    @Column(name = "email")
    private String email;
    private Profile profil;

}

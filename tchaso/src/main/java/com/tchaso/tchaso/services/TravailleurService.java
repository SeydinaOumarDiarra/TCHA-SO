package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.models.Travailleur;

import java.util.List;

public interface TravailleurService {

    public Travailleur add_travailleur(Travailleur travailleur);

    public Travailleur update_travailleur(Travailleur travailleur);

    public List<Travailleur> list_travailleur();

    public Travailleur afficher_travailleur_by_id(Long id);

    public void delete_travailleur(Long id);

}

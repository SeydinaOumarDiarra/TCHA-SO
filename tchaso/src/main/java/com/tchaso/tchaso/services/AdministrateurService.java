package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Administrateur;

import java.util.List;

public interface AdministrateurService {
    public Administrateur add_administrateur(Administrateur administrateur);

    public Administrateur update_administrateur(Administrateur administrateur);

    public List<Administrateur> list_administrateur();

    public Administrateur afficher_administrateur_by_id(Long id);

    public void delete_administrateur(Long id);
}

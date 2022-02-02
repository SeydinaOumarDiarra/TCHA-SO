package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Specialite;

import java.util.List;

public interface SpecialiteService {

    public Specialite add_specialite(Specialite specialite);

    public Specialite update_specialite(Specialite specialite);

    public List<Specialite> list_specialite();

    public Specialite afficher_specialite_by_id(Long id);

    public void delete_specialite(Long id);

}

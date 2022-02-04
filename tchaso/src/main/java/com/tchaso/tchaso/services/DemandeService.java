package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.models.Service;

import java.util.List;

public interface DemandeService {

    public Demande add_demande(Demande demande);

    public Demande update_demande(Integer Id,Demande demande);

    public List<Demande> list_demande();

    public Demande afficher_demande_by_id(Integer Id);

    public void delete_demande(Integer Id);

}

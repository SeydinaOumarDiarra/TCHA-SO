package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.TravailleurApi;
import com.tchaso.tchaso.models.Travailleur;
import com.tchaso.tchaso.services.TravailleurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TravailleurController implements TravailleurApi {

    private TravailleurService travailleurService;

    @Autowired
    public TravailleurController(TravailleurService travailleurService){
        this.travailleurService = travailleurService;
    }

    @Override
    public Travailleur authentification(String username, String password) {
        return travailleurService.authentification(username, password);
    }

    @Override
    public Travailleur add_travailleur(Travailleur travailleur) {
        return travailleurService.add_travailleur(travailleur);
    }

    @Override
    public Travailleur update_travailleur(Travailleur travailleur,Integer Id) {
        return travailleurService.update_travailleur(Id,travailleur);
    }

    @Override
    public List<Travailleur> list_travailleur() {
        return travailleurService.list_travailleur();
    }

    @Override
    public Travailleur afficher_travailleur_by_id(Integer Id) {
        return travailleurService.afficher_travailleur_by_id(Id);
    }

    @Override
    public void delete_travailleur(Integer Id) {
        travailleurService.delete_travailleur(Id);
    }
}

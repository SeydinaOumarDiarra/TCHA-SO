package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TravailleurService {

    public Travailleur add_travailleur(Travailleur travailleur);

    public Travailleur update_travailleur(Integer Id,Travailleur travailleur);

    public List<Travailleur> list_travailleur();

    public Travailleur afficher_travailleur_by_id(Integer Id );

    public void delete_travailleur(Integer Id );

    //Authentification
    public Travailleur authentification(String login, String password);

}

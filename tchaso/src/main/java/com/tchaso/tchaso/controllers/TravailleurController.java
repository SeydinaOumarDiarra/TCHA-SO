package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.TravailleurApi;
import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Travailleur;
import com.tchaso.tchaso.services.TravailleurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin("*")
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
    public Travailleur verifilogin(String username) {
        return travailleurService.verifilogin(username);
    }

    @Override
    public Travailleur authtravailleur(String username, String password, Type type) {
        return travailleurService.authtravailleur(username, password, type);
    }

    public static String uploadDir = System.getProperty("user.home") + "C:/Users/ousmane.kane/Tchaso/profil/";

    @Override
    public Travailleur add_travailleur(Travailleur travailleur, MultipartFile file)  {
       travailleur.setPhoto(file.getOriginalFilename());
       travailleurService.uploadpicture(file);
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

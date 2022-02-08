package com.tchaso.tchaso.services;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface TravailleurService {

    public Travailleur add_travailleur(Travailleur travailleur, MultipartFile image, MultipartFile piece) throws IOException;

    public Travailleur update_travailleur(Integer Id,Travailleur travailleur);

    public List<Travailleur> list_travailleur();

    public Travailleur afficher_travailleur_by_id(Integer Id );

    public void delete_travailleur(Integer Id );

    //public void uploadpicture(MultipartFile image) ;

    //Authentification
    public Travailleur verifilogin(String login);
    public Travailleur authentification(String login, String password);
    public Travailleur authtravailleur(String login, String password, Type type);


}

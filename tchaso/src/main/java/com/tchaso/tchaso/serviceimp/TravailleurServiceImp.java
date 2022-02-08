package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Travailleur;
import com.tchaso.tchaso.repository.TravailleurRepository;
import com.tchaso.tchaso.services.TravailleurService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.NoResultException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class TravailleurServiceImp implements TravailleurService {

    TravailleurRepository travailleurRepository;

    public TravailleurServiceImp(TravailleurRepository travailleurRepository){
        this.travailleurRepository = travailleurRepository;
    }

    @Override
    public Travailleur add_travailleur(Travailleur travailleur) {

        return travailleurRepository.save(travailleur);
    }

    @Override
    public Travailleur update_travailleur(Integer Id, Travailleur travailleur) {
        Travailleur trv = travailleurRepository.findById(Id).get();
        trv.setNom(travailleur.getNom());
        trv.setPrenom(travailleur.getPrenom());
        trv.setGenre(travailleur.getGenre());
        trv.setPieceiden(travailleur.getPieceiden());
        trv.setEtat(travailleur.getEtat());
        trv.setQuartier(travailleur.getQuartier());
        trv.setPhoto(travailleur.getPhoto());
        return travailleurRepository.save(trv);
    }

    @Override
    public List<Travailleur> list_travailleur() {
        return travailleurRepository.findAll();
    }

    @Override
    public Travailleur afficher_travailleur_by_id(Integer Id) {
        return travailleurRepository.findById(Id).get();
    }

    @Override
    public void delete_travailleur(Integer Id) {
        travailleurRepository.delete_travailleur(Id);
    }

    @Override
    public void uploadpicture(MultipartFile image)  {
        try{
            if (image.isEmpty()){
                throw  new Exception("Cet fichier n'existe pas");
            }
            Path path = Paths.get("D:/ProjetTchaso/Backend/tchaso/src/main/resources/photo/");
            Files.copy(image.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public Travailleur verifilogin(String login) {
        try {
            Travailleur travailleur = travailleurRepository.findOneByLogin(login);
            return travailleur;
        } catch (NoResultException e) {
            return null;
        }
    }


    @Override
    public Travailleur authentification(String login, String password) {
        try {
            Travailleur travailleur = travailleurRepository.findOneByLoginAndPassword(login, password);
            return travailleur;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Travailleur authtravailleur(String login, String password, Type type) {
        try {
            Travailleur travailleur = travailleurRepository.findOneByLoginAndPasswordAndType(login, password, type);
            return travailleur;
        } catch (NoResultException e) {
            return null;
        }
    }


}


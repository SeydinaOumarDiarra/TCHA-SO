package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.repository.AdministrateurRepository;
import com.tchaso.tchaso.services.AdministrateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministrateurServiceImp implements AdministrateurService {

    AdministrateurRepository administrateurRepository;

    @Autowired
    public AdministrateurServiceImp(AdministrateurRepository administrateurRepository){
        this.administrateurRepository = administrateurRepository;
    }

    @Override
    public Administrateur add_administrateur(Administrateur administrateur) {
        return administrateurRepository.save(administrateur);
    }

    @Override
    public Administrateur update_administrateur(Integer Id, Administrateur administrateur) {
        Administrateur admin = administrateurRepository.findById(Id).get();
        admin.setNom(administrateur.getNom());
        admin.setPrenom(administrateur.getPrenom());
        admin.setEmail(administrateur.getEmail());
        admin.setProfil(administrateur.getProfil());
        admin.setEtat(administrateur.getEtat());
        return null;
    }

    @Override
    public List<Administrateur> list_administrateur() {
        return administrateurRepository.findAll();
    }

    @Override
    public Administrateur afficher_administrateur_by_id(Integer Id) {
        return administrateurRepository.findById(Id).get();
    }

    @Override
    public void delete_administrateur(Integer Id) {
        administrateurRepository.deleteById(Id);
    }
}

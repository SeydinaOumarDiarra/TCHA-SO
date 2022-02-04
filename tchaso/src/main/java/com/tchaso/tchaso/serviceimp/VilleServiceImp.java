package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Ville;
import com.tchaso.tchaso.repository.VilleRepository;
import com.tchaso.tchaso.services.VilleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VilleServiceImp implements VilleService {

    VilleRepository villeRepository;

    public VilleServiceImp(VilleRepository villeRepository){
        this.villeRepository = villeRepository;
    }

    @Override
    public Ville add_ville(Ville ville) {
        return villeRepository.save(ville);
    }

    @Override
    public Ville update_ville(Integer Id, Ville ville) {
        Ville vl = villeRepository.findById(Id).get();
        vl.setNomville(ville.getNomville());
        return villeRepository.save(vl);
    }

    @Override
    public List<Ville> list_ville() {
        return villeRepository.findAll();
    }

    @Override
    public Ville afficher_ville_by_id(Integer Id) {
        return villeRepository.findById(Id).get();
    }

    @Override
    public void delete_ville(Integer Id) {
        villeRepository.deleteById(Id);
    }
}

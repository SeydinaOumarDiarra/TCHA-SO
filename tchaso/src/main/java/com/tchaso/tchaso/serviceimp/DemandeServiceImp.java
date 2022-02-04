package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.repository.DemandeRepository;
import com.tchaso.tchaso.services.DemandeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class DemandeServiceImp implements DemandeService {

    DemandeRepository demandeRepository;

    @Autowired
    public DemandeServiceImp(DemandeRepository demandeRepository){
        this.demandeRepository = demandeRepository;
    }
    @Override
    public Demande add_demande(Demande demande) {
        return demandeRepository.save(demande);
    }

    @Override
    public Demande update_demande(Integer Id, Demande demande) {
        Demande dmd = demandeRepository.findById(Id).get();
        dmd.setMotifdemande(demande.getMotifdemande());
        dmd.setStatutdemande(demande.getStatutdemande());
        dmd.setDatedemande(demande.getDatedemande());
        return demandeRepository.save(dmd);
    }

    @Override
    public List<Demande> list_demande() {
        return demandeRepository.findAll();
    }

    @Override
    public Demande afficher_demande_by_id(Integer Id) {
        if (Id == null ){
            log.error("Demande id est null");
            return null;
        }
        return demandeRepository.findById(Id).get();
    }

    @Override
    public void delete_demande(Integer Id) {
        if (Id == null ){
            log.error("Demande id est null");
            return ;
        }
        demandeRepository.delete_demande(Id);
    }
}

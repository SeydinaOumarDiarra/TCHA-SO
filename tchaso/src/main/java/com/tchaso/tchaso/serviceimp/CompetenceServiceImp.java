package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.repository.CompetenceRepository;
import com.tchaso.tchaso.services.CompetenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetenceServiceImp implements CompetenceService {

    CompetenceRepository competenceRepository;

    @Autowired
    public CompetenceServiceImp(CompetenceRepository competenceRepository){
        this.competenceRepository = competenceRepository;
    }

    @Override
    public Competence add_competence(Competence competence) {
        return competenceRepository.save(competence);
    }

    @Override
    public Competence update_competence(Integer Id, Competence competence) {
        Competence comp = competenceRepository.findById(Id).get();
        comp.setNomCom(competence.getNomCom());
        comp.setDescription(competence.getDescription());
        return competenceRepository.save(comp);
    }

    @Override
    public List<Competence> list_competence() {
        return competenceRepository.findAll();
    }

    @Override
    public Competence afficher_competence_by_id(Integer Id) {
        return competenceRepository.findById(Id).get();
    }

    @Override
    public void delete_competence(Integer Id) {
        competenceRepository.deleteById(Id);
    }
}

package com.tchaso.tchaso.services;


import com.tchaso.tchaso.models.Competence;

import java.util.List;

public interface CompetenceService {

    public Competence add_competence(Competence competence);

    public Competence update_competence(Competence competence);

    public List<Competence> list_competence();

    public Competence afficher_competence_by_id(Long id);

    public void delete_competence(Long id);

}

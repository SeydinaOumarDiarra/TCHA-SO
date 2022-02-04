package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Competence;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface CompetenceApi {

    @PostMapping(value = APP_ROOT +  "/competence/ajout")
    Competence add_competence(@RequestBody Competence competence);

    @PutMapping(value = APP_ROOT +  "/updatecompetence/{idcompetence}")
    Competence update_competence(@RequestBody Competence competence, @PathVariable("idcompetence") Integer Id);

    @GetMapping(value = APP_ROOT +  "/competence/all")
    List<Competence> list_competence();

    @GetMapping(value = APP_ROOT +  "/competence/{idcompetence}")
    Competence afficher_competence_by_id(@PathVariable("idcompetence") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/competence/delette/{idservice}")
    void delete_competence(@PathVariable("idservice") Integer Id);

}

package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Specialite;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface SpecialiteApi {

    @PostMapping(value = APP_ROOT +  "/specialite/ajout")
    Specialite add_specialite(@RequestBody Specialite specialite);

    @PutMapping(value = APP_ROOT +  "/update/{idspecialite}")
    Specialite update_specialite(@RequestBody Specialite specialite, @PathVariable("idspecialite") Integer Id);

    @GetMapping(value = APP_ROOT +  "/specialite/all")
    List<Specialite> list_specialite();

    @GetMapping(value = APP_ROOT +  "/specialite/{idspecialite}")
    Specialite afficher_specialite_by_id(@PathVariable("idspecialite") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/specialite/delette/{idspecialite}")
    void delete_specialite(@PathVariable("idspecialite") Integer Id);

}
package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Travailleur;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface TravailleurApi {

    @PostMapping(value = APP_ROOT + "/travailleur/ajout")
    Travailleur add_travailleur(@RequestBody Travailleur travailleur);

    @PutMapping(value = APP_ROOT +  "/update/{idTravailleur}")
    Travailleur update_travailleur(@RequestBody Travailleur travailleur,@PathVariable("idTravailleur") Integer Id);

    @GetMapping(value = APP_ROOT +  "/travailleur/all")
    List<Travailleur> list_travailleur();

    @GetMapping(value = APP_ROOT +  "/travailleur/{idTravailleur}")
    Travailleur afficher_travailleur_by_id(@PathVariable("idTravailleur") Integer Id );

    @DeleteMapping(value = APP_ROOT +  "/travailleur/delette/{idTravailleur}")
    void delete_travailleur(@PathVariable("idTravailleur") Integer Id );

}

package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface TravailleurApi {

    @GetMapping(value = APP_ROOT + "/log-travailleur/{login}/{password}")
    @ResponseBody
    Travailleur authentification(@PathVariable("login") String username, @PathVariable("password") String password);

    @PostMapping(value = APP_ROOT + "/travailleur/ajout")
    Travailleur add_travailleur(@RequestBody Travailleur travailleur);


    @PutMapping(value = APP_ROOT +  "/updatetravailleur/{idTravailleur}")
    Travailleur update_travailleur(@RequestBody Travailleur travailleur,@PathVariable("idTravailleur") Integer Id);

    @GetMapping(value = APP_ROOT +  "/travailleur/all")
    List<Travailleur> list_travailleur();

    @GetMapping(value = APP_ROOT +  "/travailleur/{idTravailleur}")
    Travailleur afficher_travailleur_by_id(@PathVariable("idTravailleur") Integer Id );

    @DeleteMapping(value = APP_ROOT +  "/travailleur/delette/{idTravailleur}")
    void delete_travailleur(@PathVariable("idTravailleur") Integer Id );

}

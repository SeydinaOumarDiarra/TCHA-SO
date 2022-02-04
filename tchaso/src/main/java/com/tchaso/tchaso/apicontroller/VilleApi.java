package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Ville;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface VilleApi {

    @PostMapping(value = APP_ROOT +  "/ville/ajout")
    Ville add_ville(@RequestBody Ville ville);

    @PutMapping(value = APP_ROOT +  "/updateville/{idVille}")
    Ville update_ville(@RequestBody Ville ville,@PathVariable("idVille") Integer Id);

    @GetMapping(value = APP_ROOT +  "/ville/all")
    List<Ville> list_ville();

    @GetMapping(value = APP_ROOT +  "/ville/{idVille}")
    Ville afficher_ville_by_id(@PathVariable("idVille") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/ville/delette/{idVille}")
    void delete_ville(@PathVariable("idVille") Integer Id);

}

package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Demande;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface DemandeApi {

    @PostMapping(value = APP_ROOT +  "/demande/ajout")
    Demande add_demande(@RequestBody Demande demande);

    @PutMapping(value = APP_ROOT +  "/updatedmd/{iddemande}")
    Demande update_demande(@RequestBody Demande demande ,@PathVariable("iddemande") Integer Id);

    @GetMapping(value = APP_ROOT +  "/demande/all")
    List<Demande> list_demande();

    @GetMapping(value = APP_ROOT +  "/demande/{iddemande}")
    Demande afficher_demande_by_id(@PathVariable("iddemande") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/demande/delette/{iddemande}")
    void delete_demande(@PathVariable("iddemande") Integer Id);

}

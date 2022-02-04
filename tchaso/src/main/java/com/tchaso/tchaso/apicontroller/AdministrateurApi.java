package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Administrateur;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface AdministrateurApi {

    @GetMapping(value = APP_ROOT + "/log-admin/{login}/{password}")
    @ResponseBody
    public Administrateur authentification(@PathVariable("login") String username, @PathVariable("password") String password);

    @PostMapping(value = APP_ROOT +  "/administrateur/ajout")
    Administrateur add_administrateur(@RequestBody Administrateur administrateur);

    @PutMapping(value = APP_ROOT +  "/updateadmin/{idadministrateur}")
    Administrateur update_administrateur(@RequestBody Administrateur administrateur,@PathVariable("idadministrateur")Integer Id);

    @GetMapping(value = APP_ROOT +  "/administrateur/all")
    List<Administrateur> list_administrateur();

    @GetMapping(value = APP_ROOT +  "/administrateur/{idadministrateur}")
    Administrateur afficher_administrateur_by_id(@PathVariable("idadministrateur") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/administrateur/delette/{idadministrateur}")
    void delete_administrateur(@PathVariable("idadministrateur") Integer Id);

}

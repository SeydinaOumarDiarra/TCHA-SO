package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Client;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface ClientApi {

    @GetMapping(value = APP_ROOT + "/log-client/{login}/{password}")
    @ResponseBody
    public Client authentification(@PathVariable("login") String username, @PathVariable("password") String password);


    @PostMapping(value = APP_ROOT +  "/client/ajout")
    Client add_client(@RequestBody Client client);

    @PutMapping(value = APP_ROOT +  "/updateclt/{idclient}")
    Client update_client(@RequestBody Client client, @PathVariable("idclient") Integer Id);

    @GetMapping(value = APP_ROOT +  "/client/all")
    List<Client> list_client();

    @GetMapping(value = APP_ROOT +  "/client/{idclient}")
    Client afficher_client_by_id(@PathVariable("idclient") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/client/delette/{idclient}")
    void delete_client(@PathVariable("idclient") Integer Id);

}

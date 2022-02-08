package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.enumeration.Type;
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

    @GetMapping(value = APP_ROOT + "/logclient/{login}")
    @ResponseBody
    public Client verifilogin(@PathVariable("login") String username);


    @GetMapping(value = APP_ROOT + "/logclient/{login}/{password}/{type}")
     @ResponseBody
     public Client auth(@PathVariable("login") String username, @PathVariable("password") String password,@PathVariable("type") Type type);



    @PostMapping(value = APP_ROOT +  "/client/ajout")
    Client add_client(@RequestBody Client client);

    @PutMapping(value = APP_ROOT +  "/updateclient/{idclient}")
    Client update_client(@RequestBody Client client, @PathVariable("idclient") Integer Id);

    @GetMapping(value = APP_ROOT +  "/client/all")
    List<Client> list_client();

    @GetMapping(value = APP_ROOT +  "/client/{idclient}")
    Client afficher_client_by_id(@PathVariable("idclient") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/client/delette/{idclient}")
    void delete_client(@PathVariable("idclient") Integer Id);

}

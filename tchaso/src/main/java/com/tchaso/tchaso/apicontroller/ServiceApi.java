package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface ServiceApi {

    @PostMapping(value = APP_ROOT +  "/service/ajout")
    Service add_service(@RequestBody Service service);

    @PutMapping(value = APP_ROOT +  "/update/{idservice}")
    Service update_service(@RequestBody Service service, @PathVariable("idservice") Integer Id);

    @GetMapping(value = APP_ROOT +  "/service/all")
    List<Service> list_service();

    @GetMapping(value = APP_ROOT +  "/service/{idservice}")
    Service afficher_service_by_id(@PathVariable("idservice") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/service/delette/{idservice}")
    void delete_service(@PathVariable("idservice") Integer Id);

}
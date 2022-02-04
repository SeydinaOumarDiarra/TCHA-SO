package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.ServiceApi;
import com.tchaso.tchaso.models.Service;
import com.tchaso.tchaso.services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ServiceController implements ServiceApi {

    private ServiceService serviceService;

    @Autowired
    public ServiceController(ServiceService serviceService){
        this.serviceService = serviceService;
    }

    @Override
    public Service add_service(Service service) {
        return serviceService.add_service(service);
    }

    @Override
    public Service update_service(Service service,Integer Id) {
        return serviceService.update_service(Id,service);
    }

    @Override
    public List<Service> list_service() {
        return serviceService.list_service();
    }

    @Override
    public Service afficher_service_by_id(Integer Id) {
        return serviceService.afficher_service_by_id(Id);
    }

    @Override
    public void delete_service(Integer Id) {
        serviceService.delete_service(Id);
    }
}

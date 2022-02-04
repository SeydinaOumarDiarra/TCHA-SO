package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Service;
import com.tchaso.tchaso.repository.ServiceRepository;
import com.tchaso.tchaso.services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceServiceImp implements ServiceService {

    ServiceRepository serviceRepository;

    @Autowired
    public ServiceServiceImp(ServiceRepository serviceRepository){
        this.serviceRepository = serviceRepository;
    }



    @Override
    public Service add_service(Service service) {
        return serviceRepository.save(service);
    }

    @Override
    public Service update_service(Integer Id, Service service) {
        Service serv = serviceRepository.findById(Id).get();
        serv.setDescription(service.getDescription());
        serv.setNomser(service.getNomser());
        return serviceRepository.save(serv);
    }

    @Override
    public List<Service> list_service()
    {
        return serviceRepository.findAll();
    }

    @Override
    public Service afficher_service_by_id(Integer Id) {
        return serviceRepository.findById(Id).get();
    }

    @Override
    public void delete_service(Integer Id) {
        serviceRepository.deleteById(Id);
    }


}

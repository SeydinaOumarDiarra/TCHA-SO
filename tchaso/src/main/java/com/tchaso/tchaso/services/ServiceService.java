package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Service;

import java.util.List;

public interface ServiceService {

    public Service add_service(Service service);

    public Service update_service(Service service);

    public List<Service> list_service();

    public Service afficher_service_by_id(Long id);

    public void delete_service(Long id);

}

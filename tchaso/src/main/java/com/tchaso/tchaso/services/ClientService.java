package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Client;

import java.util.List;

public interface ClientService {

    public Client add_client(Client client);

    public Client update_client(Client client);

    public List<Client> list_client();

    public Client afficher_client_by_id(Long id);

    public void delete_client(Long id);

}

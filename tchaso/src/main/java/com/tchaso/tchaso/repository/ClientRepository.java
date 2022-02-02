package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Integer> {
}

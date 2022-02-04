package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface ClientRepository extends JpaRepository<Client,Integer> {

    Client findOneByLoginAndPassword(String login, String password);

    @Modifying
    @Query(value="UPDATE  Client SET etat = 'inactif' WHERE id = :id ")
    void delete_client(@Param("id") Integer Id);

}

package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface TravailleurRepository extends JpaRepository<Travailleur,Integer> {

    Travailleur findOneByLoginAndPassword(String login, String password);
    @Modifying
    @Query(value="UPDATE  Travailleur SET etat = 'inactif' WHERE id = :id ")
    void delete_travailleur(@Param("id") Integer Id);

}

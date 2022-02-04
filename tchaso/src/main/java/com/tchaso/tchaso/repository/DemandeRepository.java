package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface DemandeRepository extends JpaRepository<Demande, Integer> {
    @Modifying
    @Query(value="UPDATE  Demande SET etat = 'inactif' WHERE id = :id ")
    void delete_demande(@Param("id") Integer Id);
}

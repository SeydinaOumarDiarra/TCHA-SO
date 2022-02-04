package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface SpecialiteRepository extends JpaRepository<Specialite,Integer> {
    @Modifying
    @Query(value="UPDATE  Specialite SET etat = 'inactif' WHERE id = :id ")
    void delete_specialite(@Param("id") Integer Id);
}

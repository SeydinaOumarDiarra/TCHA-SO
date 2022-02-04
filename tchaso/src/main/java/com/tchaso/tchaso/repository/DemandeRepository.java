package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Demande;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DemandeRepository extends JpaRepository<Demande, Integer> {
}

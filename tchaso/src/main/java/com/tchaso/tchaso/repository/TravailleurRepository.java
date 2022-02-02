package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Travailleur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravailleurRepository extends JpaRepository<Travailleur,Integer> {
}

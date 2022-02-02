package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service,Integer> {
}

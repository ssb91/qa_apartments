package com.springboot.apartments;

import org.springframework.data.repository.Repository;


import java.util.List;

public interface ApartmentRepository extends Repository {

    void delete(Apartment apartment);

    List findAll();

    Apartment findOne(int id);

    Apartment save(Apartment apartment);

}
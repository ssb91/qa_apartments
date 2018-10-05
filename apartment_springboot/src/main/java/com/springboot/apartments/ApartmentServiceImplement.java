package com.springboot.apartments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentServiceImplement implements ApartmentService {

    @Autowired
    private ApartmentRepository repository;

    @Override
    public Apartment create(Apartment apartment) {
        return repository.save(apartment);
    }

    @Override
    public Apartment delete(int id) {
        Apartment apartment = findById(id);
        if(apartment != null){
            repository.delete(apartment);
        }
        return apartment;
    }

    @Override
    public List<Apartment> findAll() {
        return repository.findAll();
    }

    @Override
    public Apartment findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Apartment update(Apartment apartment) {
        return repository.save(apartment);

    }

}
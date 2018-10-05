package com.springboot.apartments;

import java.util.List;

public interface ApartmentService {

    Apartment create(Apartment apartment);

    Apartment delete(int id);

    List findAll();

    Apartment findById(int id);

    Apartment update(Apartment apartment);

}
package com.springboot.apartments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/apartments"})
public class ApartmentController {

    @Autowired
    private ApartmentService apartmentService;

    @PostMapping
    public Apartment create(@RequestBody Apartment apartment){
        return apartmentService.create(apartment);
    }

    @GetMapping(path = {"/{id}"})
    public Apartment findOne(@PathVariable("id") int id){
        return apartmentService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Apartment update(@PathVariable("id") int id, @RequestBody Apartment apartment){
        apartment.setId(id);
        return apartmentService.update(apartment);
    }

    @DeleteMapping(path ={"/{id}"})
    public Apartment delete(@PathVariable("id") int id) {
        return apartmentService.delete(id);
    }

    @GetMapping
    public List<Apartment> findAll(){
        return apartmentService.findAll();
    }
}

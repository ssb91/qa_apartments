import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Apartment } from '../models/apartment.model';
import { ApartmentService } from './apartment.service';

@Component({
  templateUrl: './add-apartment.component.html'
})
export class AddApartmentComponent {

  apartment: Apartment = new Apartment();

  constructor(private router: Router, private apartmentService: ApartmentService) {

  }

  createApartment(): void {
    this.apartmentService.createApartment(this.apartment)
        .subscribe( data => {
          alert("Apartment created successfully.");
        });

  };

}

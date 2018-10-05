import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apartment } from '../models/apartment.model';
import { ApartmentService } from './apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styles: []
})
export class ApartmentComponent implements OnInit {

  apartments: Apartment[];

  constructor(private router: Router, private apartmentService: ApartmentService) {

  }

  ngOnInit() {
    this.apartmentService.getApartments()
      .subscribe( data => {
        this.apartments = data;
      });
  };

  deleteApartment(apartment: Apartment): void {
    this.apartmentService.deleteApartment(apartment)
      .subscribe( data => {
        this.apartments = this.apartments.filter(u => u !== apartment);
      })
  };

}



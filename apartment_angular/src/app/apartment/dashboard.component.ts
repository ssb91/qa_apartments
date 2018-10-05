import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Apartment } from '../models/apartment.model';
import { ApartmentService } from './apartment.service';

@Component({
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

DashboardTitle = 'Welcome';
 
DashboardContent = 'Create, read, update, and delete apartments using this system.';

  };

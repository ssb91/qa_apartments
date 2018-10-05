import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './apartment/dashboard.component';
import { ApartmentComponent } from './apartment/apartment.component';
import {AddApartmentComponent} from './apartment/add-apartment.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'apartments', component: ApartmentComponent },
  { path: 'add', component: AddApartmentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

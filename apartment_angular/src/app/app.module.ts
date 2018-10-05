import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { AppRoutingModule } from './app.routing.module';
import {ApartmentService} from './apartment/apartment.service';
import {HttpClientModule} from "@angular/common/http";
import {AddApartmentComponent} from './apartment/add-apartment.component';
import {DashboardComponent} from './apartment/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    AddApartmentComponent,
	DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Apartment } from '../models/apartment.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApartmentService {

  constructor(private http:HttpClient) {}

  private apartmentUrl = 'http://localhost:8080/apartment-portal/apartments';
  //private apartmentUrl = '/api';

  public getApartments() {
    return this.http.get<Apartment[]>(this.apartmentUrl);
  }

  public deleteApartment(apartment) {
    return this.http.delete(this.apartmentUrl + "/"+ apartment.id);
  }

  public createApartment(apartment) {
    return this.http.post<Apartment>(this.apartmentUrl, apartment);
  }

}

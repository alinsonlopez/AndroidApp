import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private medicineUrl = 'assets/data/medicines.json'; 

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<any> {
    return this.http.get(this.medicineUrl);
  }


}
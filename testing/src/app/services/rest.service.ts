import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RestService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getCountries() {
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }
}

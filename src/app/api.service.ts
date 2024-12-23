import { HttpClient, HttpHeaders } from '@angular/common/http';
// eslint-disable-next-line sort-imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  constructor(private http: HttpClient) {
  }

}

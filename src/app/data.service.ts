import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json'; // Path to JSON file

  private dataUrl2 = 'assets/data2.json'; // Path to JSON file

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  getData2(): Observable<any> {
    return this.http.get<any>(this.dataUrl2);
  }
}

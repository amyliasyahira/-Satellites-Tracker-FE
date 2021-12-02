import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  baseUrl: any = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  getSatelliteInfo() {
    console.log("calling Satellite Info...");
    return this.http.get<any>(`${this.baseUrl}/satellites`);
  }

  getSatellitePosition(timestamp: string) {
    console.log("calling Satellite Position...");
    return this.http.get<any>(`${this.baseUrl}/satellites/position?timestamp=${timestamp}`);
  }
}
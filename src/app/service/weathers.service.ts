import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {

  private apikey = '2e7268e465msh06d39006fe39ae3p1934ccjsn03dbd6f32dc4';
  private apiUrl = 'https://open-weather13.p.rapidapi.com/city';

  constructor(private http:HttpClient) { }

  searchweatherbycity(city:string):Observable<any>
  {
     const headers = new HttpHeaders()
     .set("X-RapidAPI-Key",this.apikey)
     .set("X-RapidAPI-Host","open-weather13.p.rapidapi.com");

     const options = {headers};
     return this.http.get(`${this.apiUrl}/${city}`,options)
  }

}

import { Injectable } from '@angular/core';
//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  private URL: string = 'https://netflix-2f1a8-default-rtdb.firebaseio.com/collection.json'
  
  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
}
}

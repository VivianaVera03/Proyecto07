import { Injectable } from '@angular/core';
//Importación del HttpClient 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ComprasDataService {
  //Atributo URL
  private URL: string = "https://proyecto07-production.up.railway.app/rest/cliente/findAll/json"


  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }

  //Inyección de dependencia del HttpClient
  constructor(private http:HttpClient) { }
}

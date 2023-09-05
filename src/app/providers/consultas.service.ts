import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listacompra } from '../interfaces/listacompra';
import { Observable } from 'rxjs';
import { ProductoLista } from '../interfaces/producto-lista';

@Injectable({
  providedIn: 'root'
})

export class ConsultasService {
  //Atributo URL
  private URL: string = "https://proyecto07-production.up.railway.app/rest/listacompra/findAll/json"  
  

  // Método con la petición HTTP
  getResponse() {
    return this.http.get<Listacompra[]>(this.URL); // Utiliza Listacompra[] como tipo
  }


  //Inyección de dependencia del HttpClient
  constructor(private http:HttpClient) { 

  }
}

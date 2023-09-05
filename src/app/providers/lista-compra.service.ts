import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listacompra } from '../interfaces/listacompra';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {
  private baseURL = 'http://localhost:3000/rest/listacompra/';

  constructor(private http: HttpClient) {}

  getListasCompra(): Observable<Listacompra[]> {
    return this.http.get<Listacompra[]>(this.baseURL + 'findAll/json');
  }

  getListacompraById(id: number): Observable<Listacompra> {
    return this.http.get<Listacompra>(`${this.baseURL}findById/${id}/json`);
  }
}

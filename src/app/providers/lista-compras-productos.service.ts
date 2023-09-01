import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompraProducto } from '../interfaces/compra-producto';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasProductosService {

  private baseURL = 'http://localhost:3000/rest/lista_compras_productos/';

  constructor(private http: HttpClient) {}

  getListaComprasProductos(): Observable<CompraProducto[]> {
    return this.http.get<CompraProducto[]>(this.baseURL + 'findAll/json');
  }

  getListaComprasProductosById(id: number): Observable<CompraProducto[]> {
    return this.http.get<CompraProducto[]>(`${this.baseURL}findById/${id}/json`);
  }
}
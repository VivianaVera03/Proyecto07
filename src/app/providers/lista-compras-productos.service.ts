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

  addListaComprasProductos(listacomprap: CompraProducto): Observable<CompraProducto> {
    return this.http.post<CompraProducto>(`${this.baseURL}save`,listacomprap);
  }

  deleteListaComprasProductos(id: number):Observable<{}>{
    return this.http.delete(`${this.baseURL}delete/${id}`);
  }

}

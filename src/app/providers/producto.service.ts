import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL = 'https://proyecto07-production.up.railway.app/rest/producto/';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseURL + 'findAll/json');
  }

  getProductosById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseURL}findById/${id}/json`);
  }

}

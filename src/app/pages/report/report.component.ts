import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listacompra } from 'src/app/interfaces/listacompra';
import { Producto } from 'src/app/interfaces/producto';
import { ConsultasService } from 'src/app/providers/consultas.service';
import { ProductoService } from 'src/app/providers/producto.service';

//Autcomplete
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
})
export class ReportComponent implements OnInit {
  //Array de Objetos Lista Compra {PK_idLista: 4, idUsuario: 'emilyjones', nombre: 'Lista de Ofertas', creation_date: '2023-08-19T14:15:00.000Z'}
  options: Listacompra[] = [];

  //Array de productos
  productos: Producto[] = [];

  /** Autocomplete **/
  myControl = new FormControl<string | Listacompra>('');
  filteredOptions: Observable<Listacompra[]> | undefined;

  //Llamadas a los servicios
  constructor(
    private consultasService: ConsultasService,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    //Obtener los objetos ListaCompras
    this.consultasService.getResponse().subscribe((data) => {
      //Almacenar en options
      data.forEach((value) => {
        this.options.push(value);
      });
    });

    //Obtener los productos
    this.productoService.getProductos().subscribe((data) => {
      //almacenar en productos
      data.forEach((value) => {
        this.productos.push(value);
      });
    });

    //Autocompletar
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value =>{
        const idUsuario = typeof value == 'string' ? value:value?.idUsuario;
        return idUsuario?this._filter(idUsuario as string):this.options.slice();
      }),
    );

  } //ngoninit

  displayFn(listacompra:Listacompra):string{
    return listacompra&&listacompra.idUsuario?listacompra.idUsuario:'';
  }

  private _filter(idUsuario:string):Listacompra[]{
    const filterValue = idUsuario.toLowerCase();
    return this.options.filter(option => option.idUsuario.toLowerCase().includes(filterValue));
  }

  //Insertar valores en tabla
  displayedColumns: string[] = [
    'precio',
    'nombre',
    'categoria',
    'codigoBarras',
  ];
  dataSource = this.productos;
}

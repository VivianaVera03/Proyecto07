import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from '../main/main.component';
import { Listacompra } from 'src/app/interfaces/listacompra';
import { Producto } from 'src/app/interfaces/producto';
import { ConsultasService } from 'src/app/providers/consultas.service';
import { ProductoService } from 'src/app/providers/producto.service';
import { ListaComprasProductosService } from 'src/app/providers/lista-compras-productos.service';

//Select
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CompraProducto } from 'src/app/interfaces/compra-producto';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  //Array de Objetos Lista Compra {PK_idLista: 4, idUsuario: 'emilyjones', nombre: 'Lista de Ofertas'}
  options: Listacompra[] = [];

  //Array de productos
  productos: Producto[] = [];

  //POST
  listaComprasProductos : CompraProducto[] = [];

  listaselected = MainComponent.ListaSeleccionada;
  productosSelected = MainComponent.ProductosSeleccionados;  
  //Llamadas a los servicios
  constructor(
    private consultasService: ConsultasService,
    private productoService: ProductoService,
    private listaCompraProductoService : ListaComprasProductosService,
  ) {}

  addProducto(producto: any){
    // if(this.productosSelected.find(producto)) this.showButton = false;
    // console.log("Lista a anadir")
    // console.log(this.listaselected )
    // console.log("Productos en la lista")
    // console.log(this.productosSelected )
    // console.log("Producto Seleccionado")
    // console.log(producto)
    // console.log(this.showButton)
    var nuevoListaProducto = {idLista: this.listaselected, idProducto: producto.PK_idProducto}
    this.listaCompraProductoService.addListaComprasProductos(nuevoListaProducto)
    .subscribe(data=> this.listaComprasProductos.push(data))
  }

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

}

}

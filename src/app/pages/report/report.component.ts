import { Component, OnInit, inject } from '@angular/core';
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
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  message = 'Su producto ha sido añadido'
  //Array de Objetos Lista Compra {PK_idLista: 4, idUsuario: 'emilyjones', nombre: 'Lista de Ofertas'}
  options: Listacompra[] = [];

  //Array de productos
  productos: Producto[] = [];

  //POST
  listaComprasProductos : CompraProducto[] = [];

  listaselected = MainComponent.ListaSeleccionada;
  productosSelected = MainComponent.ProductosSeleccionados;  
  cambio: boolean = false;
  comprasProductos: CompraProducto[] = [];
  filteredOptions: Listacompra[] = []; 
  showSelect: boolean = false;
  selectedIdUsuario: string = '';

  //Llamadas a los servicios
  constructor(
    private consultasService: ConsultasService,
    private productoService: ProductoService,
    private listaCompraProductoService : ListaComprasProductosService,
  ) {}

  addProducto(producto: any){
    var nuevoId=this.listaComprasProductos.length+1
    var nuevoListaProducto = {PK_id: nuevoId,idLista: this.listaselected, idProducto: producto.PK_idProducto}
    this.listaCompraProductoService.addListaComprasProductos(nuevoListaProducto)
    .subscribe(data=> this.listaComprasProductos.push(data))

    let ListaForAdd = <HTMLElement>document.getElementById('productosParaAñadir')
    ListaForAdd.innerHTML +=`<li>`+producto.nombre+`</li>`;
  }

  
  sync(){
    this.cambio = true;
    this.listaCompraProductoService.getListaComprasProductos()
      .subscribe((data) => {
        this.comprasProductos = data;
        this.filterOptions();
        this.showSelect = this.filteredOptions.length > 0;
      });
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(
      (option) =>
        option.idUsuario.trim().toLowerCase() ===
        this.selectedIdUsuario.trim().toLowerCase()
    );
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

    this.listaCompraProductoService.getListaComprasProductos().subscribe((data) =>{
      data.forEach((value) => {
        this.listaComprasProductos.push(value);
      })
    })

}

}

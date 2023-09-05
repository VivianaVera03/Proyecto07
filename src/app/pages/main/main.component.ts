import { Component, OnInit } from '@angular/core';

//Cuadro de dialogo
import { ReportComponent } from '../report/report.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';

import { Listacompra } from '../../interfaces/listacompra';
import { ConsultasService } from '../../providers/consultas.service';
import { CompraProducto } from '../../interfaces/compra-producto';
import { Producto } from '../../interfaces/producto';
import { ListaComprasProductosService } from '../../providers/lista-compras-productos.service';
import { ProductoService } from '../../providers/producto.service';
import { ListaCompraService } from '../../providers/lista-compra.service';
import { DialogConfig } from '@angular/cdk/dialog';

import { MatListModule } from '@angular/material/list';
import { MatListOption } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {

  options: Listacompra[] = [];
  public productos: Producto[] = [];
  comprasProductos: CompraProducto[] = [];
  selectedIdUsuario: string = '';
  public selectedListaId: number | null = null; // Variable para almacenar el idLista seleccionado
  showSelect: boolean = false;
  filteredOptions: Listacompra[] = []; // Variable para almacenar las opciones filtradas
  cambio: boolean = false;

  static ListaSeleccionada = 0;
  public static ProductosSeleccionados: Producto[] = [];

  constructor(
    private consultasService: ConsultasService,
    private productoService: ProductoService,
    private listacompraService: ListaCompraService,
    private listaComprasProductosService: ListaComprasProductosService,
    public dialog: MatDialog
  ) {}

  get selectedLista(){
    return this.selectedListaId;
  }

  get productosLista(){
    return this.productos;
  }

  //Abrir cuadro de dialogo (Productos)
  openDialog() {
    const dialogRef = this.dialog.open(ReportComponent, {
      width:'850px',
      height:'450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result: ${result}');
    });
  }

  eliminarProductodeLista(producto: any):void{
    var listaEliminar = 0;
    this.comprasProductos.forEach((LCP)=>{
      if(LCP.idLista == this.selectedListaId && LCP.idProducto==producto.PK_idProducto){
        console.log(LCP.PK_id)
         listaEliminar = LCP.PK_id
      }   
    })

    if(listaEliminar!=0){
      this.listaComprasProductosService.deleteListaComprasProductos(listaEliminar).subscribe();
    }else{
      console.log("No se pudo eliminar!!!!")
    }


  }

  ngOnInit() {
    // Obtiene los datos de los productos y las listas
    this.consultasService.getResponse().subscribe((data) => {
      this.options = data;
    });

    // Obtiene los datos de los productos (realiza la llamada al servicio correspondiente)
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  showLists() {
    this.cambio = true;
    this.listaComprasProductosService
      .getListaComprasProductos()
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

  getSelectedProducts(selectedListaId: number): Producto[] {
    MainComponent.ProductosSeleccionados = this.productos.filter((producto) =>
    this.comprasProductosExist(selectedListaId, producto.PK_idProducto))
    MainComponent.ListaSeleccionada = selectedListaId;
    return MainComponent.ProductosSeleccionados
    ;
  }

  comprasProductosExist(
    selectedListaId: number,
    selectedProductoId: number
  ): boolean {
    return this.comprasProductos.some(
      (rel) =>
        rel.idLista === selectedListaId && rel.idProducto === selectedProductoId
    );
  }

  hasListsForUser(): boolean {
    return this.filteredOptions.length > 0;
  }
}

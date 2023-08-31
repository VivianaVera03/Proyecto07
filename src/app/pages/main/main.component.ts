import { Component} from '@angular/core';
import { Listacompra } from '../../interfaces/listacompra';
import { ConsultasService } from '../../providers/consultas.service';
import { CompraProducto } from '../../interfaces/compra-producto';
import { Producto } from '../../interfaces/producto';
import { ListaComprasProductosService } from '../../providers/lista-compras-productos.service';
import { ProductoService } from '../../providers/producto.service';
import { ListaCompraService } from '../../providers/lista-compra.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  options: Listacompra[] = [];
  productos: Producto[] = [];
  comprasProductos: CompraProducto[] = [];
  selectedIdUsuario: string = '';
  selectedListaId: number | null = null; // Variable para almacenar el idLista seleccionado
  showSelect: boolean = false;
  filteredOptions: Listacompra[] = []; // Variable para almacenar las opciones filtradas
  cambio: boolean = false;

  constructor(
    private consultasService: ConsultasService,
    private productoService: ProductoService,
    private listacompraService: ListaCompraService,
    private listaComprasProductosService: ListaComprasProductosService
  ) {}

  ngOnInit() {
    // Obtiene los datos de los productos y las listas
    this.consultasService.getResponse().subscribe(data => {
      this.options = data;
    });

    // Obtiene los datos de los productos (realiza la llamada al servicio correspondiente)
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  showLists() {
    this.cambio = true;
    this.listaComprasProductosService.getListaComprasProductos().subscribe(data => {
      this.comprasProductos = data;
      this.filterOptions();
      this.showSelect = this.filteredOptions.length > 0;
    });
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.idUsuario.trim().toLowerCase() === this.selectedIdUsuario.trim().toLowerCase()
    );
  }

  getSelectedProducts(selectedListaId: number): Producto[] {
    return this.productos.filter(producto =>
      this.comprasProductosExist(selectedListaId, producto.PK_idProducto)
    );
  }

  comprasProductosExist(selectedListaId: number, selectedProductoId: number): boolean {
    return this.comprasProductos.some(
      rel =>
        rel.idListado === selectedListaId && rel.idProducto === selectedProductoId
    );
  }

  hasListsForUser(): boolean {
    return this.filteredOptions.length > 0;
  }
}
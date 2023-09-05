import { TestBed } from '@angular/core/testing';

import { ListaComprasProductosService } from './lista-compras-productos.service';

describe('ListaComprasProductosService', () => {
  let service: ListaComprasProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaComprasProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import {Compras} from '../../interfaces/compras';
import { ComprasDataService } from '../../providers/compras-data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {
  public data : Compras[] = [];
  usuariosSelect = new FormControl('');

  displayedColumns: string[] = []; // Inicialización vacía
  dataSource: MatTableDataSource<any>;

  constructor(private dataProvider: ComprasDataService) { 
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Compras[]); 
      this.dataSource.data = this.data;

      if (this.data.length > 0) {
        this.displayedColumns = Object.keys(this.data[0]);
      }
    })
  }

  selection(PK_user_id:string){
    const selectedUser = this.data.find(item => item.PK_user_id === PK_user_id);
    this.dataSource.filter = PK_user_id.trim().toLowerCase();
    if (selectedUser) {
      console.log('Usuario seleccionado:', selectedUser.Nombre)
    }
  }
  
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Este proyecto fue realizado con Angular Material por Alejandra Cotrina y Viviana Vera\n'; 
  githubTitle:string = " GitHub";
  github:string = "";
  viviana:string = "vivianavf"
  alejandra:string="alenocot"
}
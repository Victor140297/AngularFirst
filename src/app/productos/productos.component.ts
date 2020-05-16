import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  producto1 = ['Soya', 'Aceite', 'Carne'];
  component_ = ['Cantidad', 'Proteina','Grasa', 'Fibra'];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {
  @Input() nameUser;
  component_ = ['Cantidad', 'Proteina','Grasa', 'Fibra'];
  activate = true;
  constructor() { }

  ngOnInit(): void {
  }

}

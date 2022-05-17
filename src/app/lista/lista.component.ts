import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  propertyToCheck=1;
  boolToCheck=true;
  estudiantes=[
    {
      nombre: 'Camila Gonzales',
      nota:6,
      curso: 'Angular'
    },
    {
      nombre: 'Lucas Paz',
      nota:8,
      curso: 'React'
    },
    {
      nombre: 'Jazmin Paez',
      nota:3,
      curso: 'React'
    },
    {
      nombre: 'Tomas Perez',
      nota:10,
      curso: 'Angular'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

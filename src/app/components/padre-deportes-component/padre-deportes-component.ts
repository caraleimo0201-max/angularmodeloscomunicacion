import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  arraydeportes!: string[];
  mensaje!: string

  seleccionarFavorito(data:string): void {
    console.log("Padre");
    console.log("Yo soy tu padre" + data);
    this.mensaje ="Su deporte favorito es " + data;
  }
  constructor() {
    this.arraydeportes = ["Curling", "Basket", "Futbol", "Surf", "Golf", "Dardo",];
  }
}

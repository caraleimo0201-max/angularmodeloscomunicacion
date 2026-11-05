import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  arraydeportes!: string[];
  constructor() {
    this.arraydeportes = ["Curling", "Basket", "Futbol", "Surf", "Golf", "Dardo",];
  }
}

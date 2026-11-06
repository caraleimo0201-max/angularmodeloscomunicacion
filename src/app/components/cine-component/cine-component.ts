import { Component, OnInit } from '@angular/core';
import { Comic } from '../../../models/comic';
import { Pelicula } from '../../../models/pelicula';

@Component({
  selector: 'app-cine-component',
  standalone: false,
  styleUrl: './cine-component.css',
  templateUrl: './cine-component.html',
})
export class CineComponent{
  arraypeliculas: Pelicula [] = [];

  async cargarPeliculas(): Promise<void> {
    let respuesta = await fetch('cine.json');
    this.arraypeliculas = await respuesta.json();
  }

}
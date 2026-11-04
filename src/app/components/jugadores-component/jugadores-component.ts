import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Jugador } from '../../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class jugadoresComponent  implements OnInit{
  

  arrayjugadores: Jugador [] = [];
  constructor(
    private _cdr: ChangeDetectorRef
  ) {}
  async cargarJugadores(): Promise<void>{
    let path = "documents/jugadores.json";
    let response = await fetch(path);
    let datos = await response.json();
    for (let elem of datos){
      let player = new Jugador(elem.nombre, elem.imagen);
      this.arrayjugadores.push(player);
    }
    this._cdr.detectChanges();
   
  }
    async ngOnInit(): Promise<void>{
    await this.cargarJugadores();
    
  }
  
}


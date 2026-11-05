import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();


  mostrarFavorito(): void{
    console.log("Hijo")
    this.seleccionarFavorito.emit(this.sport);
 }
}

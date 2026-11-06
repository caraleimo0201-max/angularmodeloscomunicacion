import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  arraynumeros: number[];
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  suma: number = 0

  constructor(){
    this.arraynumeros = [5, 9, 1, 10, 14]
  }

  sumarNumero(numero: number): void{
    this.suma += numero;
    console.log("Padre numeros")
  }
  crearNumero(): void{
    //recuperamos el numero de la caja
    let numero = this.cajanumero.nativeElement.value;
    this.arraynumeros.push(numero);
  }
}

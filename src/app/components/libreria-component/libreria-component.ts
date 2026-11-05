import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../../models/comic';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent implements OnInit {
  arraycomics: Comic[] = [];

  constructor(
    private _cdr: ChangeDetectorRef

  ){}


  async ngOnInit(): Promise<void> {
      let path = "documents/comics.json";
    //Realizamos la peticion
    let response = await fetch(path);
    //Convertimos los datos a Json
    let datos = await response.json();
    //recorremos los datos Json
    for (let elem of datos){
      //creamos un comics por cada elemento del Json
      let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
      //guardamos cada comic en el array
      this.arraycomics.push(comic);
      console.log(comic)
    }
    this._cdr.detectChanges();
    
  }

}

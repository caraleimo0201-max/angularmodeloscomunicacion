import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../../models/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  constructor(
    private _cdr: ChangeDetectorRef
  ) {}
  arraycomics: Comic [] = [];
  async mostrarComics(): Promise<void> {
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

    }
    this._cdr.detectChanges();
    
  }  
}

import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-buscar-cliente-component',
  standalone: false,
  styleUrl: './buscar-cliente-component.css',
  templateUrl: './buscar-cliente-component.html',
})
export class BuscarClienteComponent implements OnInit {
  @ViewChild("cajaid") cajaid!: ElementRef
  cliente!: Cliente;
  arrayclientes: Cliente[] = []

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    console.log("aqui")
           let path= "documents/clientesdatos.json";
        let response= await fetch(path);
        let datos= await response.json();
        //recorremos todos los datos del json
        for(let elem of datos){
          //Debemos crear un cliente por cada dato que leemos del json
          let cli = new Cliente(elem.idcliente, elem.nombre, elem.paginaweb, elem.imagencliente);
          //añadimos al array cada cliente
          this.arrayclientes.push(cli);
        }
        this._cdr.detectChanges();
  }


  async buscarCliente(): Promise<void>{
    //en la caja, escriben el numero del idcliente 14
    let idcliente= parseInt(this.cajaid.nativeElement.value);
        let path= "documents/clientesdatos.json";
        let response= await fetch(path);
        let datos= await response.json();
        //recorremos todos los datos del json
        for(let elem of datos){
            if (elem.idcliente == idcliente){
                this.cliente= new Cliente(elem.idcliente, elem.nombre, elem.paginaweb, elem.imagencliente)


      }
               this._cdr.detectChanges();
    }
 }
}


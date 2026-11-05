import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { jugadoresComponent } from './components/jugadores-component/jugadores-component';
import { BuscarClienteComponent } from './components/buscar-cliente-component/buscar-cliente-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { HijoDeporteComponent } from './components/hijo-deporte-component/hijo-deporte-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { Comic } from '../models/comic';
import { ComicComponent } from './components/comic-component/comic-component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"comicsimple", component: ComicSimpleComponent},
  {path:"comicsjson", component: ComicsJsonComponent},
  {path:"jugadoresjson", component: jugadoresComponent},
  {path:"buscarclientes", component: BuscarClienteComponent},
  {path: "padredeportes", component: PadreDeportesComponent},
  {path: "hijodeporte", component: HijoDeporteComponent},
  {path: "libreria", component:   LibreriaComponent},
  {path: "comics", component: ComicComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

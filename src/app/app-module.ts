import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { jugadoresComponent } from './components/jugadores-component/jugadores-component';
import { FormsModule } from '@angular/forms';
import { BuscarClienteComponent } from './components/buscar-cliente-component/buscar-cliente-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { HijoDeporteComponent } from './components/hijo-deporte-component/hijo-deporte-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { ComicComponent } from './components/comic-component/comic-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    ComicSimpleComponent,
    ComicsJsonComponent,
    jugadoresComponent,
    BuscarClienteComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
    LibreriaComponent,
    ComicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

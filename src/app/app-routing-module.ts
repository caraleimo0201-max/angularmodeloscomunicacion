import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"comicsimple", component: ComicSimpleComponent},
  {path:"comicsjson", component: ComicsJsonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

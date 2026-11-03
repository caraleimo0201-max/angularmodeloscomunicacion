import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, ComicSimpleComponent, ComicsJsonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

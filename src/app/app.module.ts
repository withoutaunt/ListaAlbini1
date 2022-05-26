import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Formulario1Component } from './formulario1/formulario1.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    Formulario1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

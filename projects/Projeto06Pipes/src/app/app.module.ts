import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from "@angular/common";
import ptBR from '@angular/common/locales/pt';
registerLocaleData(ptBR, 'pt');

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

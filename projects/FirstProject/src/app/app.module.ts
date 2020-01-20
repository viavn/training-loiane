import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

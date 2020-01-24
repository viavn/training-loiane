import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaIfComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

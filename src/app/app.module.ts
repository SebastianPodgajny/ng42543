import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M1Module } from './m1';
import { M2Module } from './m2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    M1Module,
    M2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';



//@NgModule is a decorator
@NgModule({
  imports:      [ BrowserModule ], //what stuff do I need?
  declarations: [ AppComponent ],  //what things are in my app?
  bootstrap:    [ AppComponent ]   //where do I start?
})
export class AppModule { }

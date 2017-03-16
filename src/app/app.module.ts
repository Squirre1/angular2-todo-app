import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent }  from './app.component';
import { SharedModule }  from './shared/shared.module';
import { ComponentsModule }  from './components/components.module';

@NgModule({
  imports:      [ BrowserModule, HttpModule, SharedModule, AppRoutingModule, ComponentsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

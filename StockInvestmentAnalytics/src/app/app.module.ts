import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { FeatureModule } from './feature/feature.module';

import {AppRoutingModule} from './app-routing.module';
import {SecondaryRoutingModule} from './feature/featured.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, FeatureModule, CoreModule, SecondaryRoutingModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

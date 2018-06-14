import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule} from '../shared/shared.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {SecondaryRoutingModule} from './featured.route';
import { InvestmentAnalyticsComponent } from './investment-analytics/investment-analytics.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  imports: [
    CommonModule, SharedModule, SecondaryRoutingModule
  ],
  declarations: [MainMenuComponent, InvestmentAnalyticsComponent, WelcomeComponent],
  exports: [RouterModule]
})
export class FeatureModule { }

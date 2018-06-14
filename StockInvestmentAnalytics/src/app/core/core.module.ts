import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DataCarrierService} from './services/data-carrier.service';
import {ApiCallingService} from './services/api-calling.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [DataCarrierService, ApiCallingService]
})
export class CoreModule { }

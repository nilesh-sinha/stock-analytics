import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component'
 const routes: Routes = [
    { path: 'home', component: MainMenuComponent},
    { path: 'app', component: WelcomeComponent}
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class SecondaryRoutingModule { }

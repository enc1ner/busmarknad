import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { PurchasesComponent } from './components/purchases.component';
import { SellersComponent } from './components/sellers.component';

const appRoutes: Routes = [
  { path: 'purchases', component: PurchasesComponent },
  { path: 'sellers', component: SellersComponent },
  { path: '', redirectTo: '/purchases', pathMatch: 'full' }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes, {useHash: true }) ],
  declarations: [ AppComponent, PurchasesComponent, SellersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

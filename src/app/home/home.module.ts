import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimengModule } from '../primeng.module';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule
  ]
})
export class HomeModule { }

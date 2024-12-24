import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeShellRoutingModule } from './home-shell-routing.module';
import { HomeShellComponent } from './home-shell.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [
    HomeShellComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    HomeShellRoutingModule,
    PrimengModule
  ],
  exports:[
    HomeHeaderComponent,
    HomeFooterComponent
  ]

})
export class HomeShellModule { }

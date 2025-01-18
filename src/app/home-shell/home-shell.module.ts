import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    PrimengModule
  ],
  exports:[
    HomeHeaderComponent,
    HomeFooterComponent
  ]

})
export class HomeShellModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng.module';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,  RouterModule,PrimengModule
  ]
})
export class ShellModule { }

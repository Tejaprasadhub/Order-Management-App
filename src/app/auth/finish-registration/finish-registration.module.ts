import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinishRegistrationRoutingModule } from './finish-registration-routing.module';
import { FinishRegistrationComponent } from './finish-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';


@NgModule({
  declarations: [
    FinishRegistrationComponent
  ],
  imports: [
    CommonModule,
    FinishRegistrationRoutingModule,
    ReactiveFormsModule ,
    PrimengModule,
    FormsModule
  ]
})
export class FinishRegistrationModule { }

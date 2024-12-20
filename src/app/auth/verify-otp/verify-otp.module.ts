import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyOtpRoutingModule } from './verify-otp-routing.module';
import { VerifyOtpComponent } from './verify-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';


@NgModule({
  declarations: [
    VerifyOtpComponent
  ],
  imports: [
    CommonModule,
    VerifyOtpRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule,
  ]
})
export class VerifyOtpModule { }

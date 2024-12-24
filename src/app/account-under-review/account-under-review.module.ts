import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountUnderReviewRoutingModule } from './account-under-review-routing.module';
import { AccountUnderReviewComponent } from './account-under-review.component';


@NgModule({
  declarations: [
    AccountUnderReviewComponent
  ],
  imports: [
    CommonModule,
    AccountUnderReviewRoutingModule
  ]
})
export class AccountUnderReviewModule { }

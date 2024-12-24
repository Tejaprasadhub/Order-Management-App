import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUnderReviewComponent } from './account-under-review.component';

const routes: Routes = [{ path: '', component: AccountUnderReviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountUnderReviewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishRegistrationComponent } from './finish-registration.component';

const routes: Routes = [{ path: '', component: FinishRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinishRegistrationRoutingModule { }

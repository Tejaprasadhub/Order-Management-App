import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginShell } from './shell/shell.service';
import { HomeShell } from './home-shell/home-shell.service';
const routes: Routes = [
  LoginShell.childRoutes([
    { path: 'reset-password', loadChildren: () => import('./auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    { path: 'verify-otp', loadChildren: () => import('./auth/verify-otp/verify-otp.module').then(m => m.VerifyOtpModule) },
    { path: 'change-password', loadChildren: () => import('./auth/change-password/change-password.module').then(m => m.ChangePasswordModule) },
    { path: 'finish-registration', loadChildren: () => import('./auth/finish-registration/finish-registration.module').then(m => m.FinishRegistrationModule) },
  ]),
  HomeShell.childRoutes([
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
   ]),
  { path: 'create-account', loadChildren: () => import('./auth/create-account/create-account.module').then(m => m.CreateAccountModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'account-under-review', loadChildren: () => import('./account-under-review/account-under-review.module').then(m => m.AccountUnderReviewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]  
})
export class AppRoutingModule { }

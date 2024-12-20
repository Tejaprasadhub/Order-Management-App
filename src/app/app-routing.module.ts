import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'reset-password', loadChildren: () => import('./auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    { path: 'verify-otp', loadChildren: () => import('./auth/verify-otp/verify-otp.module').then(m => m.VerifyOtpModule) },
    { path: 'change-password', loadChildren: () => import('./auth/change-password/change-password.module').then(m => m.ChangePasswordModule) }
  ]),
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]  
})
export class AppRoutingModule { }

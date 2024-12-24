import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from './shell/shell.module';
import { HomeShellModule } from './home-shell/home-shell.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    HomeShellModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

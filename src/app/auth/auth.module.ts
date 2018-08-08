import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { UserRegistrationComponent } from './user-registration.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, AuthRoutingModule ],
  declarations: [AuthComponent, LogoutComponent, LoginComponent,UserRegistrationComponent,ForgotPasswordComponent]
})
export class AuthModule { }

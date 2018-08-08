import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'forgotpassword',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {


  model = new Login('','');
  onSubmit(){
    
  }
}

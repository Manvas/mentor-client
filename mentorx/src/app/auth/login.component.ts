import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus, Login } from './login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  model = new Login('','');
  onSubmit(){}
  /*
  alertStyle = '';
  loginStatus = new LoginStatus('', '');
  model = new Login('', '');

  constructor(private authService, private router: Router) {
   }

  onLogin(){
    this.initLogin();
    this.authService.login(this.model)
    .subscribe((status: LoginStatus) => {
        this.loginStatus = status;
        if(status.code === 'FAILURE') {
          this.alertStyle = 'alert alert-danger';
        }
      }
    ); 
  }

  onLogout(){
    this.authService.logout();
  }

  private initLogin(){
    this.alertStyle = '';
    this.alertStyle = '';
    this.loginStatus.code = '';
    this.loginStatus.message = '';
  }*/
}

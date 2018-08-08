import { Component, OnInit } from '@angular/core';
import { NewUser } from './login';

@Component({
  selector: 'register',
  templateUrl: './user-registration.component.html'
})
export class UserRegistrationComponent {

  model = new NewUser();
  onSubmit(){
    
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private fb:FormBuilder){
    this,this.loginForm=fb.group({
      email:fb.control('',[Validators.required]),
      password:fb.control('',[Validators.required])
    })
  }


  login(){
    let loginInfo={
      email:this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value
    }
  }
}

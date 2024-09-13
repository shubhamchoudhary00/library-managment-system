import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrl: './regsiter.component.scss'
})
export class RegsiterComponent {
  registerForm:FormGroup;
  hidePwdContent:boolean=true;

  constructor(private fb:FormBuilder){
    this.registerForm=fb.group({
      firstName:fb.control('d',[Validators.required]),
      lastName:fb.control(''),
      email:fb.control(''),
      mobile:fb.control(''),
      password:fb.control(''),
      rpassword:fb.control(''),
    })
  }

  register(){
    let user={
      firstName:this.registerForm.get("firstName")?.value,
      lastName:this.registerForm.get("lastName")?.value,
      email:this.registerForm.get("email")?.value,
      mobile:this.registerForm.get("mobile")?.value,
      password:this.registerForm.get("password")?.value,
      rpassword:this.registerForm.get("rpassword")?.value,
    }
  }
}

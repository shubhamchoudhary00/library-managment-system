import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegsiterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[RegsiterComponent,LoginComponent]
})
export class AuthModule { }

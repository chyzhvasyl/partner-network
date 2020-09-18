import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from "./app-routing.module";
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [AuthContainerComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }

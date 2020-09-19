import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from "./app-routing.module";
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {SharedModule} from "../shared/shared.module";
import {AuthComponent} from "./components/auth/auth.component";

const views = [
  AuthComponent,
  AuthContainerComponent,
  SignInComponent,
];

const modules = [
  SharedModule,
  CommonModule,
  AuthorizationRoutingModule,
];

const providers = [];

@NgModule({
  declarations: views,
  imports: modules,
  providers: providers,
})
export class AuthorizationModule { }

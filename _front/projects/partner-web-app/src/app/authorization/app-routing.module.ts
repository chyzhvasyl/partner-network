import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthContainerComponent } from "./containers/auth-container/auth-container.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { OnlyUnauthorizedGuard } from "../../../../commons/src/lib/router-guards/only-unauthorized.guard";

const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [OnlyUnauthorizedGuard],
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }

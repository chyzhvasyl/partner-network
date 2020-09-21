import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { OnlyUnauthorizedGuard } from '../../../../commons/src/lib/router-guards/only-unauthorized.guard';
import { AuthComponent} from './components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
      },
      {
        path: 'sign-in',
        component: AuthContainerComponent,
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

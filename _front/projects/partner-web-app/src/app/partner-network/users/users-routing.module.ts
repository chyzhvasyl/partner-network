import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersContainerComponent} from "./containers/users-container/users-container.component";

const routes: Routes = [
  {
    path: '',
    component: UsersContainerComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AffiliatesContainerComponent} from "./containers/affiliates-container/affiliates-container.component";

const routes: Routes = [
  {
    path: '',
    component: AffiliatesContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }

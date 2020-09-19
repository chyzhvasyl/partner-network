import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisersContainerComponent} from "./containers/advertisers-container/advertisers-container.component";

const routes: Routes = [
  {
    path: '',
    component: AdvertisersContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisersRoutingModule { }

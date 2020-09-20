import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisersContainerComponent} from "./containers/advertisers-container/advertisers-container.component";
import {AdvertiseDetailsComponent} from "./components/advertise-details/advertise-details.component";
import {AdvertisersListComponent} from "./components/advertisers-list/advertisers-list.component";
import {AdvertisersLinks} from "./constants/links.constant";

const routes: Routes = [
  {
    path: '',
    component: AdvertisersContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `${AdvertisersLinks.list}`
      },
      {
        path: `${AdvertisersLinks.list}`,
        component: AdvertisersListComponent,
      },
      {
        path: `${AdvertisersLinks.details}/:id`,
        component: AdvertiseDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisersRoutingModule { }

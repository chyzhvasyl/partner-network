import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerNetworkContainerComponent } from "./containets/partner-network-container/partner-network-container.component";

const routes: Routes = [
  {
    path: '',
    component: PartnerNetworkContainerComponent,
    children: [
      {
        path: 'advertisers',
        loadChildren: () => import('./advertisers/advertisers.module').then(m => m.AdvertisersModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
      },
      {
        path: 'affiliates',
        loadChildren: () => import('./affiliates/affiliates.module').then(m => m.AffiliatesModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerNetworkRoutingModule { }

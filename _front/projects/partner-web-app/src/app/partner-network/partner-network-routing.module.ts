import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerNetworkContainerComponent } from "./containets/partner-network-container/partner-network-container.component";

export enum PartnerNetworkLinks {
  advertisers = 'advertisers',
  offers = 'offers',
  affiliates = 'affiliates',
  users = 'users'
}

const routes: Routes = [
  {
    path: '',
    component: PartnerNetworkContainerComponent,
    children: [
      {
        path: PartnerNetworkLinks.advertisers,
        loadChildren: () => import('./advertisers/advertisers.module').then(m => m.AdvertisersModule)
      },
      {
        path: PartnerNetworkLinks.offers,
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
      },
      {
        path: PartnerNetworkLinks.affiliates,
        loadChildren: () => import('./affiliates/affiliates.module').then(m => m.AffiliatesModule)
      },
      {
        path: PartnerNetworkLinks.users,
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: '',
        pathMatch: PartnerNetworkLinks.advertisers,
        redirectTo: 'sign-in'
      },
      {
        path: '**',
        redirectTo: PartnerNetworkLinks.advertisers,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerNetworkRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

export enum CoreLinks {
  authorization = 'authorization',
  partner_network = 'partner_network'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: CoreLinks.authorization,
    pathMatch: 'full'
  },
  {
    path: CoreLinks.authorization,
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: CoreLinks.partner_network,
    loadChildren: () => import('./partner-network/partner-network.module').then(m => m.PartnerNetworkModule)
  },
  {
    path: '**',
    redirectTo: CoreLinks.authorization,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

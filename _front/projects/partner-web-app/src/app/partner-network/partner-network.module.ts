import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerNetworkRoutingModule } from './partner-network-routing.module';
import { PartnerNetworkContainerComponent } from './containets/partner-network-container/partner-network-container.component';


@NgModule({
  declarations: [PartnerNetworkContainerComponent],
  imports: [
    CommonModule,
    PartnerNetworkRoutingModule
  ]
})
export class PartnerNetworkModule { }

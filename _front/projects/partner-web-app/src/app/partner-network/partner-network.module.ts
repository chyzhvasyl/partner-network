import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerNetworkRoutingModule } from './partner-network-routing.module';
import { PartnerNetworkContainerComponent } from './containets/partner-network-container/partner-network-container.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [PartnerNetworkContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    PartnerNetworkRoutingModule
  ]
})
export class PartnerNetworkModule { }

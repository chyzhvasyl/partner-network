import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisersRoutingModule } from './advertisers-routing.module';
import { AdvertisersContainerComponent } from './containers/advertisers-container/advertisers-container.component';


@NgModule({
  declarations: [AdvertisersContainerComponent],
  imports: [
    CommonModule,
    AdvertisersRoutingModule
  ]
})
export class AdvertisersModule { }

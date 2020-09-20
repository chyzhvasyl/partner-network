import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisersRoutingModule } from './advertisers-routing.module';
import { AdvertisersContainerComponent } from './containers/advertisers-container/advertisers-container.component';
import {SharedModule} from "../../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdvertiseEditComponent } from './components/advertise-edit/advertise-edit.component';
import { AdvertiseDetailsComponent } from './components/advertise-details/advertise-details.component';
import { AdvertisersListComponent } from './components/advertisers-list/advertisers-list.component';


@NgModule({
  declarations: [AdvertisersContainerComponent, AdvertiseEditComponent, AdvertiseDetailsComponent, AdvertisersListComponent],
  imports: [
    CommonModule,
    AdvertisersRoutingModule,
    SharedModule,
  ]
})
export class AdvertisersModule { }

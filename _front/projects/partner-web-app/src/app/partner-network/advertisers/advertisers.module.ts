import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisersRoutingModule } from './advertisers-routing.module';
import { AdvertisersContainerComponent } from './containers/advertisers-container/advertisers-container.component';
import {SharedModule} from "../../shared/shared.module";
import { AdvertiseEditComponent } from './components/advertise-edit/advertise-edit.component';
import { AdvertiseDetailsComponent } from './components/advertise-details/advertise-details.component';
import { AdvertisersListComponent } from './components/advertisers-list/advertisers-list.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromAdvertisers from './_store/reducers'
import {AdvertiserEffects} from "./_store/effects";
import {AdvertisersService} from "./services/advertisers.service";

const views = [
  AdvertisersContainerComponent,
  AdvertiseEditComponent,
  AdvertiseDetailsComponent,
  AdvertisersListComponent
];

const modules = [
  CommonModule,
  AdvertisersRoutingModule,
  SharedModule,
  StoreModule.forFeature(fromAdvertisers.advertisePartnerNetwork, fromAdvertisers.reducer),
  EffectsModule.forFeature([AdvertiserEffects]),
];

const providers = [
  AdvertisersService
];

@NgModule({
  declarations: views,
  imports: modules,
  providers: providers
})
export class AdvertisersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatesRoutingModule } from './affiliates-routing.module';

import { AffiliatesContainerComponent } from './containers/affiliates-container/affiliates-container.component';


@NgModule({
  declarations: [AffiliatesContainerComponent],
  imports: [
    CommonModule,
    AffiliatesRoutingModule
  ]
})
export class AffiliatesModule { }

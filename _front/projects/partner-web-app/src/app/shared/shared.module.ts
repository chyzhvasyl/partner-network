import { NgModule } from '@angular/core';
import { VendorsModule } from "../../../../vendors/src/lib/vendors.module";
import {TranslateModule} from "@ngx-translate/core";
import { DetailsCardComponent } from './components/details-card/details-card.component';
import {CommonModule} from "@angular/common";

const modules = [
  VendorsModule,
  TranslateModule,
  CommonModule
];

const views = [
  DetailsCardComponent
];

@NgModule({
  declarations: views,
  imports: modules,
  exports: [...modules, ...views]
})
export class SharedModule { }

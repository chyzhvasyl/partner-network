import { NgModule } from '@angular/core';
import { VendorsModule } from "../../../../vendors/src/lib/vendors.module";
import {TranslateModule} from "@ngx-translate/core";

const modules = [
  VendorsModule,
  TranslateModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class SharedModule { }

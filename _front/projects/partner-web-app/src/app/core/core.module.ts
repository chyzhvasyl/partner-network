import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsModule } from "../../../../vendors/src/lib/vendors.module";

const views = [];

const modules = [
  CommonModule,
  VendorsModule
];

@NgModule({
  declarations: [],
  imports: modules
})
export class CoreModule { }

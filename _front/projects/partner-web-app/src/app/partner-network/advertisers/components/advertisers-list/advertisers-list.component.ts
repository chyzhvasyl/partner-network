import { Component, OnInit } from '@angular/core';
import {TableAction} from "../../../shared/classes/table-action.class";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CoreLinks} from "../../../../app-routing.module";
import {PartnerNetworkLinks} from "../../../partner-network-routing.module";
import {AdvertisersLinks} from "../../constants/links.constant";
import {AdvertiseDetailsComponent} from "../advertise-details/advertise-details.component";
import {AdvertiseEditComponent} from "../advertise-edit/advertise-edit.component";
import {Advertiser} from "../../models/advertiser.class";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-advertisers-list',
  templateUrl: './advertisers-list.component.html',
  styleUrls: ['./advertisers-list.component.scss']
})
export class AdvertisersListComponent implements OnInit, TableAction<any> {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'buttons'];
  dataSource = ELEMENT_DATA;
  coreLinks = CoreLinks;
  partnerLinks = PartnerNetworkLinks;
  advertiserLinks = AdvertisersLinks;

  constructor(public dialog: MatDialog,
              private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onEdit(advirtiser: Advertiser): void {
    this.dialog.open(AdvertiseEditComponent, {data: advirtiser},);

    return
  }

  onAdd(): void {
    this.dialog.open(AdvertiseEditComponent);

    return
  }

  onCheckDetails(advertise: PeriodicElement): void {
    const link = `${this.coreLinks.partner_network}/${this.partnerLinks.advertisers}/${this.advertiserLinks.details}/${advertise.position}`;
    this._router.navigate([link]);

    return;
  }
}

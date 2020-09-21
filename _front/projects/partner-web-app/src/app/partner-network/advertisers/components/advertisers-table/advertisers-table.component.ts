import {Component, Input, OnInit} from '@angular/core';
import {Advertiser} from "../../models/advertiser.class";
import {AdvertiseEditComponent} from "../advertise-edit/advertise-edit.component";
import {PeriodicElement} from "../../../constants/mock-data.contant";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CoreLinks} from "../../../../app-routing.module";
import {PartnerNetworkLinks} from "../../../partner-network-routing.module";
import {AdvertisersLinks} from "../../constants/links.constant";
import {TableAction} from "../../../shared/classes/table-action.class";

@Component({
  selector: 'app-advertisers-table',
  templateUrl: './advertisers-table.component.html',
  styleUrls: ['./advertisers-table.component.scss']
})
export class AdvertisersTableComponent implements OnInit, TableAction<Advertiser> {
  @Input() dataSource: any;
  @Input() displayedColumns: string[];

  coreLinks = CoreLinks;
  partnerLinks = PartnerNetworkLinks;
  advertiserLinks = AdvertisersLinks;
  constructor(public dialog: MatDialog,
              private _router: Router) { }

  ngOnInit(): void {
  }


  onEdit(advirtiser: Advertiser): void {
    this.dialog.open(AdvertiseEditComponent, {data: advirtiser},);

    return
  }

  onCheckDetails(advertise: any): void {
    const link = `${this.coreLinks.partner_network}/${this.partnerLinks.advertisers}/${this.advertiserLinks.details}/${advertise.position}`;
    this._router.navigate([link]);

    return;
  }
}

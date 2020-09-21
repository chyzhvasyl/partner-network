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
import {ELEMENT_DATA, PeriodicElement} from "../../../constants/mock-data.contant";

@Component({
  selector: 'app-advertisers-list',
  templateUrl: './advertisers-list.component.html',
  styleUrls: ['./advertisers-list.component.scss']
})
export class AdvertisersListComponent implements OnInit {
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

  onAdd(): void {
    this.dialog.open(AdvertiseEditComponent);

    return
  }
}

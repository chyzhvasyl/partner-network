import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CoreLinks} from "../../../../app-routing.module";
import {PartnerNetworkLinks} from "../../../partner-network-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  partnerNetworkLinks = PartnerNetworkLinks;
  coreLinks = CoreLinks;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onGoToTab(link: PartnerNetworkLinks): void {
    this._router.navigate([`${this.coreLinks.partner_network}/${link}/`]);

    return;
  }

  isSelectedTab(link: PartnerNetworkLinks): boolean {
    if(!link) return;

    return this._router.url.toLowerCase().includes(link.toLowerCase());
  }
}

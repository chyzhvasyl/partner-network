import { Component, OnInit } from '@angular/core';
import {ELEMENT_DATA} from "../../../constants/mock-data.contant";

@Component({
  selector: 'app-advertise-details',
  templateUrl: './advertise-details.component.html',
  styleUrls: ['./advertise-details.component.scss']
})
export class AdvertiseDetailsComponent implements OnInit {
  details: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'buttons'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

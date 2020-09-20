import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PartnerNetworkStatuses} from "../../../constants/statuses.constant";
import {Advertiser} from "../../models/advertiser.class";

@Component({
  selector: 'app-advertise-edit',
  templateUrl: './advertise-edit.component.html',
  styleUrls: ['./advertise-edit.component.scss']
})
export class AdvertiseEditComponent implements OnInit {
  public advertiserForm: FormGroup;
  public companyName:    FormControl;
  public status: FormControl;

  partnerNetworkStatuses = PartnerNetworkStatuses;

  constructor(
    public dialogRef: MatDialogRef<AdvertiseEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Advertiser | null
  ) { }

  ngOnInit(): void {
    this._createFormControls();
    this._createForm();
  }

  private _createFormControls(): void {
    this.companyName = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    if (this.data) {
      this.companyName.patchValue(this.data.companyName);
      this.status.patchValue(this.data.status);
    }
  }

  private _createForm(): void {
    this.advertiserForm = new FormGroup({
      companyName:    this.companyName,
      status: this.status
    });
  }

  public addNewAdvertiser(): void {
    console.log('advertiser', this.advertiserForm.value);
    this.dialogRef.close();
  }

  public discard(): void {
    this.dialogRef.close();
  }
}

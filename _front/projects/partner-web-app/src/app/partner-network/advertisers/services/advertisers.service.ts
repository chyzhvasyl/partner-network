import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advertiser} from "../models/advertiser.class";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdvertisersService {
  baseUrl = environment.API_URL;

  constructor(private _http: HttpClient) { }

  getAdvertisersList(): Observable<Advertiser[]> {
    return this._http.get<Advertiser[]>(this.baseUrl);
  }

  updateAdvertiserById(advertiser: Advertiser): Observable<Advertiser> {
    return this._http.put<Advertiser>(this.baseUrl, {});
  }
}

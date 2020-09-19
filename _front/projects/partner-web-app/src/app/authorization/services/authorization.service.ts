import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {TokenService} from "../../../../../commons/src/lib/services/token.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Credentials} from "../classes/credentials.class";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService,
    private _router: Router,
    private _cookieService: CookieService
  ) { }

  public signIn(credentials: Credentials): Observable<any> {
    // return this._http.post(`${environment.API_HTTP_URL}users/auth/login/`, credentials)
    //   .pipe(
    //     map((result: any) => of())
    //   );
    return
  }
}

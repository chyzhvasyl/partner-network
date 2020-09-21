import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(
    private _tokenService: TokenService,
    private _localStorageService: LocalStorageService,
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this._tokenService.token;
    const lang  = this._localStorageService.get('i18n') || 'en';

    let headers = req.headers;
    headers = headers.append('Accept-Language', lang);

    if (token) headers = headers.append('Authorization', `JWT ${token}`);

    const clonedRequest = req.clone({headers});
    return next.handle(clonedRequest);
  }
}

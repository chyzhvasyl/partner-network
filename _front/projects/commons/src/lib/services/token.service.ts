import {Injectable, Optional} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {EnvConfig} from "../env-config/env-config";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _refreshToken: string;
  private _environment: any;
  private _tokenKey: string;

  constructor(
    private _cookieService: CookieService,
    private _jwtHelper: JwtHelperService,
    @Optional() config?: EnvConfig
  ) {
    if (config) {
      this._environment = config.environment;
    }
  }

  public init(): void {
    this._tokenKey = `${this._environment.APP_NAME}_token`;
  }

  public get token(): string {
    return this._cookieService.get(this._tokenKey);
  }

  public get refreshToken(): string {
    return this._refreshToken;
  }

  public clearToken(): void {
    this._cookieService.delete(this._tokenKey, '/', this._environment.COOKIE_DOMAIN);
  }

  public setTokens(token: string): void {
    const expTime = 30;

    this._cookieService.set(this._tokenKey, token, expTime, '/', this._environment.COOKIE_DOMAIN, true);
  }

  public isLoggedIn(): boolean {
    return this.token ? !this.isTokenExpired(this.token) : false;
  }

  public isTokenExpired(token: string) {
    return this._jwtHelper.isTokenExpired(token);
  }

  public decodeToken() {
    if (this.token) {
      return this._jwtHelper.decodeToken(this.token);
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';

import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInGuard implements CanActivate, CanLoad {

  constructor(
    private _tokenService: TokenService,
    private _router: Router
  ) { }

  private _isLogged(): boolean {

    const isLoggedIn = this._tokenService.isLoggedIn();

    if (isLoggedIn) {
      return true;
    } else {
      console.warn(`Only for authorized users`, `Warning!`);
      setTimeout(() => this._router.navigate(['authorization/sign-in']), 500);
      return false;
    }

  }

  public canActivate(): boolean {
    return this._isLogged();
  }

  public canLoad(): boolean {
    return this._isLogged();
  }
}

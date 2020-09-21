import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class OnlyUnauthorizedGuard implements CanActivate {

  constructor(
    private _tokenService: TokenService,
    private _router:       Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this._tokenService.isLoggedIn();

    if (!isLoggedIn) {
      console.log('eee')
      return true;
    } else {
      console.warn(`Only for unauthorized users.`);
      if (route.data && route.data.pathRedirect) {
        this._router.navigate(['/authorization/sign-in']);
      } else {
        this._router.navigate([]);
        console.warn(`Please set route data. Example: data: { pathRedirect: ['/path_redirect'] }`);
      }
      return false;
    }
  }
  
}

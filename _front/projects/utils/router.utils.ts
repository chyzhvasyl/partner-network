import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params, Router } from '@angular/router';

export interface RoutePart {
  params: Params;
  path: string;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  parsedRoute: RoutePart[];
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const parsedRoute = route.pathFromRoot.filter(data => !!data.routeConfig ? data.routeConfig.path : null )
      .map((data) => {
        return { params: data.params, path: data.routeConfig ? data.routeConfig.path : null};
      });

    const { url, root: { queryParams } } = routerState;

    return { url, queryParams, parsedRoute };
  }
}

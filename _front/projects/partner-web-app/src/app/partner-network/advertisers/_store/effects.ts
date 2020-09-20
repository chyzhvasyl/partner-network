import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {CoreState} from "../../../core/_store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import * as advertiserActions from './actions'
import {AdvertisersService} from "../services/advertisers.service";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class AdvertiserEffects {
  constructor(private actions$: Actions,
              private _advertiserService: AdvertisersService,
              private store: Store<CoreState>
  ) {
  }

  loadAdvertisers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(advertiserActions.loadAdvertisers),
      switchMap((action) => {
          return this._advertiserService.getAdvertisersList().pipe(
            map(advertisers => {
              return advertiserActions.setAdvertisers({payload: advertisers})
            }),
            catchError((error: HttpErrorResponse) => of(advertiserActions.errorAdvertisers()))
          )
        }
      )
    )
  );
}

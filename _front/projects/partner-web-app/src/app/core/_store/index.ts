import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from "../../../environments/environment";
import * as auth from '../../../app/authorization/_store/reducers';
import * as advertisers from '../../partner-network/advertisers/_store/reducers';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from "../../../../../utils/router.utils";

export interface CoreState {
  auth: auth.AuthState,
  advertise: advertisers.AdvertisersState,
  router: fromRouter.RouterReducerState<RouterStateUrl>,
}

export const reducers: ActionReducerMap<CoreState> = {
  auth: auth.reducer,
  advertise: advertisers.reducer,
  router: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [] : [];

import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from "../../../environments/environment";
import * as auth from '../../../app/authorization/_store/reducers';

export interface CoreState {
  auth: auth.AuthState,
}

export const reducers: ActionReducerMap<CoreState> = {
  auth: auth.reducer,
};

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [] : [];

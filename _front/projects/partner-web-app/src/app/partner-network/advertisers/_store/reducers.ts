import {HttpErrorResponse} from "@angular/common/http";
import {Action, createReducer} from "@ngrx/store";

export const authPartnerNetwork = 'authPartnerNetwork';

export interface AuthState {
  user: {
    data: any,
    loaded: boolean | null
  },
  hasError: HttpErrorResponse | null;
}

export const initialState: AuthState = {
  user: {
    data: null,
    loaded: null
  },
  hasError: null,
};

const authReducer = createReducer(
  initialState,
);

export function reducer(state: AuthState | undefined, action: Action) : AuthState {
  return authReducer(state, (action));
}

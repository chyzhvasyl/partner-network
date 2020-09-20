import {Action, createReducer, on} from "@ngrx/store";
import {Advertiser} from "../models/advertiser.class";
import * as advertiseActions from './actions'
import update from 'immutability-helper';

export const advertisePartnerNetwork = 'advertisePartnerNetwork';

export interface AdvertisersState {
  advertisers: {
    data: Advertiser[] | null,
    loaded: boolean | null
  },
  advertisersAreUpdating: boolean
}

export const initialState: AdvertisersState = {
  advertisers: {
    data: null,
    loaded: null
  },
  advertisersAreUpdating: false
};

const advertiseReducer = createReducer(
  initialState,

  on(advertiseActions.loadAdvertisers, (state, action) => ({

    ...state,
    advertisers: {
      loaded: null,
      data: null
    }
  })),

  on(advertiseActions.setAdvertisers, (state, action) => ({

    ...state,
    advertisers: {
      loaded: true,
      data: action.payload
    }
  })),

  on(advertiseActions.errorAdvertisers, (state, action) => ({

    ...state,
    advertisers: {
      loaded: false,
      data: null
    }
  })),

  on(advertiseActions.updateAdvertiser, (state, action) => {

    return update(state, {
      advertisersAreUpdating: {$set: true}
    });
  }),

  on(advertiseActions.successfullyUpdateAdvertiser, (state, action) => {
    const index = state.advertisers.data.findIndex(advertiser => advertiser.id === action.payload.id);

    return update(state, {
      advertisers: {
        loaded: {$set: null},
        data: {
          [index]: {
            $set: action.payload
          }
        }
      },
      advertisersAreUpdating: {$set: false}
    });
  }),

  on(advertiseActions.errorUpdateAdvertiser, (state, action) => ({

    ...state,
    advertisersAreUpdating: false
  })),
);

export function reducer(state: AdvertisersState | undefined, action: Action) : AdvertisersState {
  return advertiseReducer(state, (action));
}

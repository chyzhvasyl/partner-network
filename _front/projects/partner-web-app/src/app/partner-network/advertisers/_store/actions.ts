import {createAction, props} from "@ngrx/store";
import {Advertiser} from "../models/advertiser.class";

export enum ActionTypes {
  LOAD_ADVERTISERS = '[PartnerNetwork] load advertisers',
  SET_ADVERTISERS = '[PartnerNetwork] set advertisers',
  ERROR_ADVERTISERS = '[PartnerNetwork] error advertisers',

  UPDATE_ADVERTISER = '[PartnerNetwork] update advertiser',
  SUCCESSFULLY_UPDATE_ADVERTISER = '[PartnerNetwork] successfully update advertiser',
  ERROR_UPDATE_ADVERTISER = '[PartnerNetwork] error update advertiser',
}

export const loadAdvertisers = createAction(ActionTypes.LOAD_ADVERTISERS);
export const setAdvertisers = createAction(ActionTypes.SET_ADVERTISERS, props<{payload: Advertiser[]}>());
export const errorAdvertisers = createAction(ActionTypes.ERROR_ADVERTISERS);

export const updateAdvertiser = createAction(ActionTypes.UPDATE_ADVERTISER, props<{payload: Advertiser}>());
export const successfullyUpdateAdvertiser = createAction(ActionTypes.SUCCESSFULLY_UPDATE_ADVERTISER, props<{payload: Advertiser}>());
export const errorUpdateAdvertiser = createAction(ActionTypes.ERROR_UPDATE_ADVERTISER);

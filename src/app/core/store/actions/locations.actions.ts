
import { Action } from '@ngrx/store';
// import type function
import { type } from '../utils';

export const LocationsActionTypes = {
  GETUSER_LOCATION: type('[locations] SetUserLocation'),
  GETUSER_LOCATION_FAILURE: type('[locations] SetUserLocation error'),
  GETUSER_LOCATION_SUCCESS: type('[locations] SetUserLocation success'),

  UPDATEUSER_LOCATION: type('[Updatelocations] UpdateUserLocation'),
  UPDATEUSER_LOCATION_FAILURE: type('[Updatelocations] UpdateUserLocation error'),
  UPDATEUSER_LOCATION_SUCCESS: type('[Updatelocations] UpdateUserLocation success'),
};

export class GetUserLocation implements Action {
  readonly type = LocationsActionTypes.GETUSER_LOCATION;
  constructor(public payload: any) { }
}

export class GetUserLocationSuccess implements Action {
  readonly type = LocationsActionTypes.GETUSER_LOCATION_SUCCESS;
  constructor(public payload: any) { }
}

export class GetUserLocationFailure implements Action {
  readonly type = LocationsActionTypes.GETUSER_LOCATION_FAILURE;
  constructor(public payload: any) { }
}

export class UpdateUserLocation implements Action {
  readonly type = LocationsActionTypes.UPDATEUSER_LOCATION;
  constructor(public payload: any, public profileId: string, public locationName: string, public locationUrl: string) { }
}

export class UpdateUserLocationSuccess implements Action {
  readonly type = LocationsActionTypes.UPDATEUSER_LOCATION_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateUserLocationFailure implements Action {
  readonly type = LocationsActionTypes.UPDATEUSER_LOCATION_FAILURE;
  constructor(public payload: any) { }
}

export type AllLOCATIONDATA = GetUserLocation
  | GetUserLocationSuccess
  | GetUserLocationFailure
  | UpdateUserLocation
  | UpdateUserLocationSuccess
  | UpdateUserLocationFailure;

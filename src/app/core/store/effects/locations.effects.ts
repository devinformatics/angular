

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { LocationServices } from '../../_service/location.service';
import { LocationsActionTypes, GetUserLocation, GetUserLocationSuccess, GetUserLocationFailure, UpdateUserLocation, UpdateUserLocationSuccess, UpdateUserLocationFailure } from '../actions/locations.actions';

@Injectable()
export class LocationsEffects {
  @Effect()
  public GetUserLocation: Observable<Action> = this.actions
      .ofType(LocationsActionTypes.GETUSER_LOCATION)
    .debounceTime(500)
      .map((action: GetUserLocation) => action.payload)
    .switchMap(payload => {
      return this.locationService.getLocationString()
        .map((response: HttpResponse<any>) => {
          return new GetUserLocationSuccess(response);
        })
        .catch((error) => {
          return of(new GetUserLocationFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public GetUserLocationSuccess: Observable<any> = this.actions.pipe(
      ofType(LocationsActionTypes.GETUSER_LOCATION_SUCCESS),
      tap((_success) => {
        return of(new GetUserLocationSuccess(_success));
      })
  );
  @Effect({ dispatch: false })
  public GetUserLocationFailure: Observable<any> = this.actions.pipe(
      ofType(LocationsActionTypes.GETUSER_LOCATION_FAILURE),
    tap((error) => {
      this.router.navigateByUrl('/dashboard');
    })
  );
  @Effect()
  public UpdateUserLocation: Observable<Action> = this.actions
    .ofType(LocationsActionTypes.UPDATEUSER_LOCATION)
    .debounceTime(500)
    .map((action: UpdateUserLocation) => action)
    .switchMap(payload => {
      return this.locationService.updateLocationString(payload.payload, payload.profileId, payload.locationName, payload.locationUrl)
        .map((response: HttpResponse<any>) => {
          return new UpdateUserLocationSuccess(response);
        })
        .catch((error) => {
          return of(new UpdateUserLocationFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public UpdateUserLocationSuccess: Observable<any> = this.actions.pipe(
    ofType(LocationsActionTypes.UPDATEUSER_LOCATION_SUCCESS),
    tap((_success) => {
      return of(new UpdateUserLocationSuccess(_success));
    })
  );
  @Effect({ dispatch: false })
  public UpdateUserLocationFailure: Observable<any> = this.actions.pipe(
    ofType(LocationsActionTypes.UPDATEUSER_LOCATION_FAILURE),
    tap((error) => {
      this.router.navigateByUrl('/dashboard');
    })
  );
  constructor(
    private actions: Actions,
    private locationService: LocationServices,
    private router: Router,
  ) { }
}


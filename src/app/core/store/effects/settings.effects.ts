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
import { SettingsService } from '../../_service/settings.service';
import { SettingsActionTypes, SetUserSetting, SetUserSettingSuccess, SetUserSettingFailure, CheckUserEmail, CheckUserEmailSuccess, CheckUserEmailFailure, SetPlanYearSuccess, SetPlanYearFailure } from '../actions/settings.actions';

@Injectable()
export class SettingsEffects {
  @Effect()
  public SetUserSetting: Observable<Action> = this.actions
      .ofType(SettingsActionTypes.SETUSER_SETTING)
    .debounceTime(500)
      .map((action: SetUserSetting) => action.payload)
    .switchMap(payload => {
      return this.settingsService.setUserSetting(payload)
        .map((response: HttpResponse<any>) => {
          sessionStorage.setItem('settingAPI', '1')
          return new SetUserSettingSuccess(response);
        })
        .catch((error) => {
          
          return of(new SetUserSettingFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public SetUserSettingSuccess: Observable<any> = this.actions.pipe(
      ofType(SettingsActionTypes.SETUSER_SETTING_SUCCESS),
      tap((_success) => {
        
        return of(new SetUserSettingSuccess(_success));
       
      })
  );
  @Effect({ dispatch: false })
  public SetUserSettingFailure: Observable<any> = this.actions.pipe(
      ofType(SettingsActionTypes.SETUSER_SETTING_FAILURE),
    tap((error) => {
      return of(new SetUserSettingFailure({ error: error }));
    })
  );

  @Effect()
  public CheckUserEmail: Observable<Action> = this.actions
      .ofType(SettingsActionTypes.CHECK_USER_EMAIL)
    .debounceTime(500)
    .map((action: SetUserSetting) => action.payload)
    .switchMap(payload => {
      return this.settingsService.checkUserEmail(payload)
        .map((response: HttpResponse<any>) => {
          
          return new CheckUserEmailSuccess(response);
        })
        .catch((error) => {
          
          return of(new CheckUserEmailFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public CheckUserEmailSuccess: Observable<any> = this.actions.pipe(
      ofType(SettingsActionTypes.CHECK_USER_EMAIL_SUCCESS),
    tap((success) => {
      return of(new CheckUserEmailSuccess(success));

    })
  );
  @Effect({ dispatch: false })
  public CheckUserEmailFailure: Observable<any> = this.actions.pipe(
      ofType(SettingsActionTypes.CHECK_USER_EMAIL_FAILURE),
    tap((error) => {
      return of(new CheckUserEmailFailure({ error: error }));
    })
  );

  @Effect()
  public SetPlanYear: Observable<Action> = this.actions
    .ofType(SettingsActionTypes.SET_PLAN_YEAR)
    .debounceTime(500)
    .map((action: SetUserSetting) => action.payload)
    .switchMap(payload => {
      return this.settingsService.setPlanYear(payload)
        .map((response: HttpResponse<any>) => {
          return new SetPlanYearSuccess(response);
        })
        .catch((error) => {

          return of(new SetPlanYearFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public SetPlanYearSuccess: Observable<any> = this.actions.pipe(
    ofType(SettingsActionTypes.SET_PLAN_YEAR_SUCCESS),
    tap((success) => {
      return of(new SetPlanYearSuccess(success));

    })
  );
  @Effect({ dispatch: false })
  public SetPlanYearFailure: Observable<any> = this.actions.pipe(
    ofType(SettingsActionTypes.SET_PLAN_YEAR_FAILURE),
    tap((error) => {
      return of(new SetPlanYearFailure({ error: error }));
    })
  );

  constructor(
    private actions: Actions,
    private settingsService: SettingsService,
    private router: Router,
  ) { }
}


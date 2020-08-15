
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { ResetPasswordActionTypes, ResetPassword, ResetPasswordSuccess, ResetPasswordFailure, CheckOldPassword, CheckOldPasswordSuccess, CheckOldPasswordFailure } from '../actions/resetpassword.actions';
import { of } from 'rxjs/internal/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { ResetPasswordService } from '../../_service/resetpassword.service';


@Injectable()
export class ResetPasswordEffects {
  @Effect()
  public ResetPassword: Observable<Action> = this.actions
      .ofType(ResetPasswordActionTypes.RESET_PASSWORD)
    .debounceTime(500)
      .map((action: ResetPassword) => action.payload)
    .switchMap(payload => {
      return this.ResetPasswordService.setPassword(payload)
        .map((response: HttpResponse<any>) => {
          sessionStorage.setItem('resetPasswordAPI', '1');
          return new ResetPasswordSuccess(response);
        })
        .catch((error) => {
          return of(new ResetPasswordFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public ResetPasswordSuccess: Observable<any> = this.actions.pipe(
      ofType(ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS),
      tap((success) => {
        return of(new ResetPasswordSuccess(success));
      })
  );
  @Effect({ dispatch: false })
  public ResetPasswordFailure: Observable<any> = this.actions.pipe(
      ofType(ResetPasswordActionTypes.RESET_PASSWORD_FAILURE),
    tap((error) => {
      return of(new ResetPasswordFailure({ error: error }));
    })
  );

  @Effect()
  public CheckOldPassword: Observable<Action> = this.actions
      .ofType(ResetPasswordActionTypes.CHECK_OLD_PASSWORD)
    .debounceTime(500)
      .map((action: CheckOldPassword) => action.payload)
    .switchMap(payload => {
      return this.ResetPasswordService.checkOldPassword(payload)
        .map((response: HttpResponse<any>) => {
          return new CheckOldPasswordSuccess(response);
        })
        .catch((error) => {
          return of(new CheckOldPasswordFailure({ error: error }));
        });
    });
  @Effect({ dispatch: false })
  public CheckOldPasswordSuccess: Observable<any> = this.actions.pipe(
      ofType(ResetPasswordActionTypes.CHECK_OLD_PASSWORD_SUCCESS),
    tap((success) => {
      return of(new CheckOldPasswordSuccess(success));
    })
  );
  @Effect({ dispatch: false })
  public CheckOldPasswordFailure: Observable<any> = this.actions.pipe(
      ofType(ResetPasswordActionTypes.CHECK_OLD_PASSWORD_FAILURE),
    tap((error) => {
      return of(new CheckOldPasswordFailure({ error: error }));
    })
  );

  constructor(
    private actions: Actions,
    private ResetPasswordService: ResetPasswordService,
    private router: Router,
  ) { }
}


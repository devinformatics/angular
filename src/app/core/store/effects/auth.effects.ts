/** Edufront Application Data Classes
    Created: 2018_11_30
    Updated by: Manish
    Description: Classes for Authentication Effects
**/


import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import {
  AuthActionTypes, LogIn, ForgotPassword, LogInFailure, ForgotFailure, LogInSuccess, ForgotSuccess, LogOut, LogOutSuccess, LogOutFailure, ChangePasswordSuccess, ChangePasswordFailure, ChangePassword, PrivacyPolicy, PrivacyPolicySuccess, TermsAndUse, TermsAndUseSuccess
} from '../actions/auth.actions';
import { of } from 'rxjs/internal/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpResponse, HttpResponseBase } from '@angular/common/http';
import { AuthenticationService } from '../../_service/authentication.service';
import { UserService } from '../../_service/user.service';
import { GetUserClients } from '../actions/user.actions';
import { AppState } from '../reducers/app.reducer';
import { error } from 'protractor';

@Injectable()
export class AuthEffects {
  @Effect()
  public LogIn: Observable<Action> = this.actions
    .ofType(AuthActionTypes.LOGIN)
    .debounceTime(500)
    .map((action: LogIn) => action.payload)
      .switchMap(payload => {
      return this.authService.login(payload)
        .map((user) => {
          if (JSON.parse(user).statusCode == "01") {
            return new LogInFailure({ error: user })
          }
          else {
            return new LogInSuccess(user);
          }
        })
        .catch((error) => {
          return of(new LogInFailure({ error: error }));
        });
    });

  @Effect({ dispatch: false })
  public LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      // use this once the token is recieve from login call
     // sessionStorage.setItem('e_token', JSON.parse(user.payload).response.token);
      
      if (JSON.parse(user.payload).response.daysToExpire < 0) {
        sessionStorage.setItem('forcePasswordChange', '1');
        sessionStorage.setItem('resetPasswordToken', JSON.parse(user.payload).response.reset_token);
        this.router.navigateByUrl('/reset-password');
        return false;
      }
      localStorage.removeItem('NoOfAttempts');
      sessionStorage.setItem('LoginScreen', '1');
     
      })
  );


  @Effect({ dispatch: false })
  public ForgotSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.FORGOT_SUCCESS),
    tap((_success) => {
      // remove this once below code is uncommented.
      
      this.router.navigateByUrl('/forgot');
    })
  );


  @Effect({ dispatch: false })
  public LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE),
      tap((error) => {
      var Attempts;
      Attempts = localStorage.getItem("NoOfAttempts");
      if (Attempts >= 5) {
        localStorage.removeItem("NoOfAttempts");
      }
      this.router.navigateByUrl('/login');
    })
  );

  @Effect({ dispatch: false })
  public ForgotFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.FORGOT_FAILURE),
    tap((_error) => {
      this.router.navigateByUrl('/forgot');
    })
  );
  @Effect()
  public ForgotPassword: Observable<Action> = this.actions
      .ofType(AuthActionTypes.FORGOT_PASSWORD)
    .debounceTime(500)
      .map((action: ForgotPassword) => action.payload)
    .switchMap(payload => {
      return this.authService.forgotPassword(payload)
        .map((response: HttpResponse<any>) => {
          return new ForgotSuccess(response);
        })
        .catch((error) => {
          return of(new ForgotFailure({ error: error }));
        });
    });


  @Effect()
  public ChangePassword: Observable<Action> = this.actions
    .ofType(AuthActionTypes.CHANGE_PASSWORD)
    .debounceTime(500)
    .map((action: ChangePassword) => action.payload)
      .switchMap(payload => {
      return this.authService.changePassword(payload)
        .map((response: HttpResponse<any>) => {
         return new ChangePasswordSuccess(response);
        })
        .catch((error) => {
          return of(new ChangePasswordFailure({ error: error }));
        });
    });


  @Effect({ dispatch: false })
  public ChangePasswordSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.CHANGE_PASSWORD_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl('/change-password');
    })
  );

  @Effect({ dispatch: false })
  public ChangePasswordFailure: Observable<any> = this.actions.pipe(
      ofType(AuthActionTypes.CHANGE_PASSWORD_FAILURE),
    tap((_error) => {
      this.router.navigateByUrl('/change-password');
    })
  );
  @Effect()
  public PrivacyPolicy: Observable<Action> = this.actions
    .ofType(AuthActionTypes.PRIVACY_POLICY)
    .debounceTime(500)
      .map((action: PrivacyPolicy) => action.payload)
    .switchMap(payload => {
      
      return this.authService.getPrivacyPolicy()
        .map((response: HttpResponse<any>) => {
          return new PrivacyPolicySuccess(response);
        });
    });
  @Effect()
  public TermsAndUse: Observable<Action> = this.actions
    .ofType(AuthActionTypes.TERMS_AND_CONDITIONS)
    .debounceTime(500)
      .map((action: TermsAndUse) => action.payload)
    .switchMap(payload => {
      
      return this.authService.getGetTermsOfUse()
        .map((response: HttpResponse<any>) => {
          return new TermsAndUseSuccess(response);
        });
    });
  constructor(
    private store: Store<AppState>,
    private actions: Actions,
    private authService: AuthenticationService,
    private userService:UserService,
    private router: Router,
  ) { }
}

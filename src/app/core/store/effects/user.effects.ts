
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../../_service/user.service';
import { UserActionTypes, GetUserProfile } from '../actions/user.actions';
import { of } from 'rxjs';

import { AppState, getAuthenticatedToken } from '../reducers/app.reducer';




@Injectable()
export class UserEffects {
  
  
  constructor(
    private store: Store<AppState>,
    private actions: Actions,
    private userService: UserService,
    private router: Router,
  ) { }
}


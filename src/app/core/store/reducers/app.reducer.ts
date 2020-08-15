import { createSelector } from 'reselect';


import { ActionReducer, combineReducers, ActionReducerMap } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../../environments/environment';

import * as Auth from './auth.reducer';

import * as AllSETTINGDATA from './settings.reducer';
import * as ResetPasswrod from './resetpassword.reducer';
import * as LOCATION from './locations.reducer';
import { state } from '@angular/animations';






export interface AppState {
  router: fromRouter.RouterReducerState;
  authState: Auth.State;
 
  settingsState: AllSETTINGDATA.Settingstate;
  resetPasswordState: ResetPasswrod.CHANGEPASSWORDSTATE;
  locationState: LOCATION.Locationstate;
  
  
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  authState: Auth.reducer,

  settingsState: AllSETTINGDATA.reducer,
  resetPasswordState: ResetPasswrod.reducer,

  locationState: LOCATION.reducer,
  
};

// reason to combineReducers is have all the reducers combined to one single app reducer

// storefreeze will help us prevent our state from being mutated
const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers);
const productionReducer: ActionReducer<AppState> = compose(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}




export const getAppAuthState = (state: AppState) => state.authState;


export const getAuthenticatedToken = createSelector(getAppAuthState, Auth.getAuthenticatedToken);
export const getUserDetailData = createSelector(getAppAuthState, Auth.getUserDetailData);

export const getLocationsState = (state: AppState) => state.locationState;


export const getAuthenticationError = createSelector(getAppAuthState, Auth.getAuthenticationError);

export const isAuthenticated = createSelector(getAppAuthState, Auth.isAuthenticated);


export const getForgotError = createSelector(getAppAuthState, Auth.getForgotError);

export const getForgotSuccess = createSelector(getAppAuthState, Auth.getForgotSuccess);

export const getChangePasswordError = createSelector(getAppAuthState, Auth.getChangePasswordError);

export const getChangePasswordSuccess = createSelector(getAppAuthState, Auth.getChangePasswordSuccess);

export const getprivacyPolicy = createSelector(getAppAuthState, Auth.getPrivacyPolicy);
export const getTermsAndCondition = createSelector(getAppAuthState, Auth.getTermsAndCondition);


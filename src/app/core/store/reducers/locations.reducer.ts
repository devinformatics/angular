
import { AllLOCATIONDATA, LocationsActionTypes } from '../actions/locations.actions';
import { Settings } from '../../_models/settings';


export interface Locationstate {
  error: string | null;
  success: string | null;
  locationinfo: string | null;
  updatesuccess: string | null;
}

const initialState: Locationstate = {
  error: null,
  success: null,
  locationinfo: null,
  updatesuccess:null
};
export function reducer(state: any = initialState, action: AllLOCATIONDATA): Locationstate {
  switch (action.type) {
    
    case LocationsActionTypes.GETUSER_LOCATION_SUCCESS:
      return {
        ...state,
        error: null,
        success: action.payload

      };
    case LocationsActionTypes.GETUSER_LOCATION_SUCCESS: {
      return {
        ...state,
        error: 'unable to get User Location',
        success: null
      };
    };
    case LocationsActionTypes.UPDATEUSER_LOCATION_SUCCESS:
      return {
        ...state,
        error: null,
        updatesuccess: action.payload
      };
    case LocationsActionTypes.UPDATEUSER_LOCATION_FAILURE: {
      return {
        ...state,
        error: 'unable to update User Location',
        updatesuccess: null
      };
    };
    default:
      // const data = JSON.parse(sessionStorage.getItem('appState'));
      // if (data !== null && data.authenticated) {
      //   return data;
      // } else {
      return state;
    // }
  }
}

export const getUserLocationSuccess = (state: Locationstate) => state.success;
export const updateUserLocationSuccess = (state: Locationstate) => state.success;

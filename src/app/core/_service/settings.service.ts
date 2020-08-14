import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Settings, dataYear } from '../_models/settings';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({ providedIn: "root" })
export class SettingsService {
  constructor(private http: HttpClient) { }
  setUserSetting(objUserModel: Settings) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': objUserModel.authToken.toString(),
        'ProfileID': objUserModel.user_id.toString()
      })
    };
    return this.http
      .post(`${environment.apiUrl}Login/setUserSetting`, JSON.stringify(objUserModel), httpOptions);
            
  }
  handleError(handleError: any): any {
      throw new Error("Method not implemented.");
  }

  checkUserEmail(user: Settings) {
    return this.http.get(`${environment.apiUrl}/Login/checkUserEmail?userEmail=${user}`);
  }

  setPlanYear(objUserModel: dataYear) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': objUserModel.authToken.toString(),
        'ProfileID': objUserModel.profileId.toString()
      })
    };
    return this.http
      .post(`${environment.apiUrl}Login/setPlanYear`, JSON.stringify(objUserModel), httpOptions);

  }
}

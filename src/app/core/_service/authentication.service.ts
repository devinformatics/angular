

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SIGNIN , FORGOTPASSWORD} from '../_models/auth';
import { CHANGE_PASSWORD } from '../_models/changepassword';
import { throwError } from 'rxjs';

import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';
import { request } from 'http';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  login(payload: SIGNIN) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        "resolution": window.innerHeight +'X' + window.innerWidth
      })
    };
    var encryptPass = Md5.hashStr(payload.password);
    return this.http.post<any>(`api/Login/IsUserAuthenticate`, JSON.stringify(payload), httpOptions);
  }

  getPrivacyPolicy() {
    return this.http.get<any>('api/Plan/GetPrivacyPolicy');
  }
  getGetTermsOfUse() {
    return this.http.get<any>('api/Plan/GetTermsOfUse');
  }
  forgotPassword(payload: FORGOTPASSWORD) {

    return this.http.get<any>(`${environment.apiUrl}Login/ForgotPassword?eMail=${payload.email}`);
  
  }

  changePassword(payload: CHANGE_PASSWORD) {
    var encryptPass = Md5.hashStr(payload.changePassword);
    return this.http.get<any>(`${environment.apiUrl}Login/changePassword?password=${encryptPass}&authToken=${payload.passwordToken}`)
    
  }

  logout(token) {
    return this.http.get<any>(`/user/logout/${token}`);
  }

  getLoggedinProfile(token){
    return this.http.get<any>(`/user/profile/${token}`);
  }
  getUserCLient(token) {
    return this.http.get<any>(`/user/profile/${token}`);
  }
}

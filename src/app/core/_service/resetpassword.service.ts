import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RESET_PASSWORD } from '../_models/resetpassword';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({ providedIn: "root" })
export class ResetPasswordService {
  constructor(private http: HttpClient) { }
  setPassword(changepassword: RESET_PASSWORD) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': changepassword.authToken.toString()
      })
    };
    if (sessionStorage.getItem('forcePasswordChange') == '1') {
      
      return this.http
        .post(`${environment.apiUrl}Login/accountRecoveryPassword`, JSON.stringify(changepassword), httpOptions);
    }
    else {
      return this.http
        .post(`${environment.apiUrl}Login/changeUserPassword`, JSON.stringify(changepassword), httpOptions);
      
    }
  }


  handleError(handleError: any): any {
    throw new Error("Method not implemented.");
  }

  checkOldPassword(user: RESET_PASSWORD) {
    return this.http.put(`/api/Login/checkOldPassword`, user);
  }

  
}

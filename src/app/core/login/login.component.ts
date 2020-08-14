import { Component, OnInit } from '@angular/core';
import { trimValues } from 'src/app/core/store/utils';
import { SIGNIN } from 'src/app/core/_models/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogIn, PrivacyPolicy, TermsAndUse } from 'src/app/core/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState, getAuthenticationError, getAuthenticatedToken } from 'src/app/core/store/reducers/app.reducer';
import { PasswordValidator } from '../validators/password.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUserClients } from '../store/actions/user.actions';
import { Location } from '@angular/common';
import { DataService } from '../_service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup;
  isPasswordValid = true;
  errorMessage;
  UserAuthToken;
  UserClientDetails;
  getAuthError = this.store.select(getAuthenticationError);
  returnUrl: string;
  submitted = false;
  planYear;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private route: Router, private data: DataService) {
  }

  ngOnInit() {
    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
    if (performance.navigation.type == 1) {
      console.info("This page is reloaded");
    } else {
      console.info("This page is not reloaded");
      location.reload();
    }
   
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
    this.store.select(getAuthenticationError).subscribe(response => {
      if (response != null) {
        if (response[0].description == "Account Locked") { this.errorMessage = "Your account has been locked, please contact your administrator to unlock your account or reset your password." }
        else if (response[0].description == "Unauthorized Access") { this.errorMessage = "Incorrect email and/or password." }
        else if (response[0].description == "Account Inactive") { this.errorMessage = "Your account has been inactive, please contact your administrator to activate your account." }
        else { this.errorMessage = "" }
      }
    })
  }

  getPrivacyPolicy(name) {
    this.route.navigateByUrl(`/user-consent/privacy-policy/(modal:${name})/`);
  }

  getTermUse(name) {
    this.route.navigateByUrl(`/user-consent/term-use/(modal:${name})/`);
  }

  submit() {
    
  }
}

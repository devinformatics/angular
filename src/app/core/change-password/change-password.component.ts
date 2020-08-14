import { Component, OnInit } from '@angular/core';
import { trimValues } from 'src/app/core/store/utils';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CHANGE_PASSWORD } from 'src/app/core/_models/changepassword';
import { Store } from '@ngrx/store';
import { AppState, getChangePasswordError, getChangePasswordSuccess } from 'src/app/core/store/reducers/app.reducer';
import { ChangePassword } from '../store/actions/auth.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class changePasswordComponent implements OnInit {
    [x: string]: any;
  public changePasswordForm: FormGroup;
  passwordResetToken: string;
  errorMessage: string;
  successMessage: string;
  submitted = false;
  constructor(private passroute: Router, private formBuilder: FormBuilder, private store: Store<AppState>, route: ActivatedRoute) { this.passwordResetToken = route.snapshot.params['id']; }

  ngOnInit() {
    
    this.changePasswordForm = this.formBuilder.group({
      changePassword: ['', Validators.compose([Validators.required,  Validators.minLength(8), Validators.maxLength(22), this.noWhitespaceValidator])],
      confirmChangePassword: ['', Validators.compose([Validators.required, PasswordValidator.mustChangeMatch, this.noWhitespaceValidator])]
    });
    this.store.select(getChangePasswordError).subscribe(response => {
     
      this.errorMessage = response;
    })

    this.store.select(getChangePasswordSuccess).subscribe(response => {
      
      if (response != null) {
        var errormessage = "";
        var successmessage = "";
        
        if (response.statusMessage == "success") {
          successmessage = response.response.message;
          errormessage = "";
        }
        else {
          errormessage = response.errors[0].description;
          successmessage = "";
        }
        this.errorMessage = errormessage;
        if (successmessage != '') {
          setTimeout(() => {
            this.passroute.navigateByUrl('/login');
          }, 1000);
        }
        this.successMessage = successmessage;
      }      
    })
  }
  
  get f() { return this.changePasswordForm.controls; }
  submit() {
    this.submitted = true;
    this.changePasswordForm.get('confirmChangePassword').setValidators([PasswordValidator.mustChangeMatch]);
    this.changePasswordForm.get('confirmChangePassword').updateValueAndValidity();
    // const reqdata = { 'email': 'test@intelegencia.com', 'password': 'intel01' };
    // this.loginService.loginTest(reqdata);
    const payload = trimValues<CHANGE_PASSWORD>(this.changePasswordForm.value);
    payload.passwordToken = this.passwordResetToken;
    console.log(this.changePasswordForm);
    if (this.changePasswordForm.valid) {
      
      this.store.dispatch(new ChangePassword(payload));
    } else {
      return;
      // validateAllFormFields(this.signInForm);
    }
    
  }

  /*The below function is used for validating the text field for white spaces*/
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}

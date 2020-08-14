import { Component, OnInit } from '@angular/core';
import { trimValues } from 'src/app/core/store/utils';
import { FORGOTPASSWORD } from 'src/app/core/_models/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPassword, AuthActionTypes } from 'src/app/core/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState, getForgotError, getForgotSuccess } from 'src/app/core/store/reducers/app.reducer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public forgotForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private route: Router) { }
  
  ngOnInit() {
   
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
    /*
    this.store.select(getForgotError).subscribe(response => {
      console.log(response);
      this.errorMessage = response;
    })
    */
    
  }
  getPrivacyPolicy(name) {

    this.route.navigateByUrl(`/user-consent/privacy-policy/(modal:${name})/`);
  }

  getTermUse(name) {

    this.route.navigateByUrl(`/user-consent/term-use/(modal:${name})/`);
  }
  submit() {
    this.submitted = true;
    const payload = trimValues<FORGOTPASSWORD>(this.forgotForm.value);
    if (this.forgotForm.valid) {
      this.store.dispatch(new ForgotPassword(payload));
      this.store.select(getForgotSuccess).subscribe(response => {
        if (response != null) {
          var errormessage = "";
          var successmessage = "";
          var valuedata = "00";
          //$.each(response, function (resindex, value) {
          //  if (value == '01' || valuedata == '01') {
          //    valuedata = '01';
          //    if (typeof (value) == 'object') {
          //      if (resindex == 'errors') {
          //        errormessage = value[0].description;
          //      }
          //    }
          //  }
          //  else {
          //    if (resindex == 'response') {
          //      successmessage = value;
          //    }
          //  }
          //});
          if (response.statusMessage == "success") {
            successmessage = response.response.message;
            errormessage = "";
          }
          else {
            errormessage = response.errors[0].description;
            successmessage = "";
          }
          this.errorMessage = errormessage;
          this.successMessage = successmessage;
        }

      })
    } else {
       // validateAllFormFields(this.forgotForm);
    }
  }
}

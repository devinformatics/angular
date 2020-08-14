import { FormControl, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

export interface ValidationResult {
  [key: string]: boolean;
}

export class PasswordValidator {

  public static strong(control: FormControl): ValidationResult {
    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);
    // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
    const valid = hasNumber && hasUpper && hasLower;
    if (!valid) {
      // return what´s not valid
      return { strong: true };
    }
    return { strong: false };
  }

  public static MustMatch(control: FormControl): ValidationResult {
    
    if ($("#new_password").val() != $("#confirm_new_password").val()) {
      return { MustMatch: true };
    }
    
  }
  public static mustChangeMatch(control: FormControl): ValidationResult {
    
    if ($("#inputChangePassword").val() != $("#confirmChangePassword").val()) {
      return { mustChangeMatch: true };
    }

  }
  
  public static MustNotMatch(control: FormControl): ValidationResult {

    if ($("#existing_password").val() == $("#new_password").val()) {
      return { MustNotMatch: true };
    }

  }

}
/*
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: false });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
*/



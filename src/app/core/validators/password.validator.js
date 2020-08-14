"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.strong = function (control) {
        var hasNumber = /\d/.test(control.value);
        var hasUpper = /[A-Z]/.test(control.value);
        var hasLower = /[a-z]/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        var valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return { strong: false };
    };
    PasswordValidator.MustMatch = function (control) {
        if ($("#new_password").val() != $("#confirm_new_password").val()) {
            return { MustMatch: true };
        }
    };
    PasswordValidator.mustChangeMatch = function (control) {
        if ($("#inputChangePassword").val() != $("#confirmChangePassword").val()) {
            return { mustChangeMatch: true };
        }
    };
    PasswordValidator.MustNotMatch = function (control) {
        if ($("#existing_password").val() == $("#new_password").val()) {
            return { MustNotMatch: true };
        }
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
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
//# sourceMappingURL=password.validator.js.map
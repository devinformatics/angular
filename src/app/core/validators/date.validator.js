"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var DateValidator = /** @class */ (function () {
    function DateValidator() {
    }
    DateValidator.CheckDueDate = function (control) {
        var startdate = $("#startdate").val().toString();
        var duedate = $("#duetdate").val().toString();
        var timeDiff = +(new Date(startdate)) - +(new Date(duedate));
        var days = timeDiff / (1000 * 60 * 60 * 24);
        if (days >= 0) {
            return { CheckDueDate: true };
        }
        else {
            var days_1 = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
            if (days_1 <= 2) {
                return { CheckDueDate: true };
            }
        }
    };
    // start : added for expected close date validation
    DateValidator.CheckCloseDate = function (control) {
        if ($("#duetdate").val() != undefined) {
            var duedate = $("#duetdate").val().toString();
            var closedate = $("#expectedclosedate").val().toString();
            var timeDiff = +(new Date(duedate)) - +(new Date(closedate));
            var days = timeDiff / (1000 * 60 * 60 * 24);
            if (days > 0) {
                return { CheckCloseDate: true };
            }
        }
    };
    //}
    // end : added for expected close date validation
    DateValidator.CheckDueDateOnStartDate = function (control) {
        var startdate = $("#startdate").val().toString();
        var duedate = $("#duetdate").val().toString();
        var timeDiff = +(new Date(startdate)) - +(new Date(duedate));
        var days = timeDiff / (1000 * 60 * 60 * 24);
        if (days >= 0) {
            return { CheckDueDateOnStartDate: true };
        }
        else {
            var days_2 = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
            if (days_2 <= 2) {
                return { CheckDueDateOnStartDate: true };
            }
        }
    };
    // start : validation for expected close date
    DateValidator.CheckDueDateOnCloseDate = function (control) {
        //alert('123');
        if ($("#duetdate").val() != undefined) {
            var duedate = $("#duetdate").val().toString();
            var closedate = $("#expectedclosedate").val().toString();
            var timeDiff = +(new Date(duedate)) - +(new Date(closedate));
            var days = timeDiff / (1000 * 60 * 60 * 24);
            if (days >= 0) {
                return { CheckDueDateOnCloseDate: true };
            }
            else {
                var days_3 = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
                if (days_3 <= 2) {
                    return { CheckDueDateOnCloseDate: true };
                }
            }
        }
    };
    // end :validation for expected close date
    DateValidator.startDate = function (control) {
        var startdate = $("#startdate").val().toString();
        var d = new Date();
        var currentdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        var timeDiff = +(new Date(startdate)) - +(new Date(currentdate));
        var days = timeDiff / (1000 * 60 * 60 * 24);
        if (days < -1) {
            return { startDate: true };
        }
    };
    // Start : added for close date
    DateValidator.dueDate = function (control) {
        if ($("#duetdate").val() != undefined) {
            var duedate = $("#duetdate").val().toString();
            var d = new Date();
            var currentdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            var timeDiff = +(new Date(duedate)) - +(new Date(currentdate));
            var days = timeDiff / (1000 * 60 * 60 * 24);
            if (days < -1) {
                return { dueDate: true };
            }
        }
    };
    // end : added for close date
    DateValidator.CheckDueDateOnStartDateForCampaigns = function (control) {
        var startdate = $("#startdate").val().toString();
        var duedate = $("#enddate").val().toString();
        var timeDiff = +(new Date(startdate)) - +(new Date(duedate));
        var days = timeDiff / (1000 * 60 * 60 * 24);
        if (days >= 0) {
            return { CheckDueDateOnStartDateForCampaigns: true };
        }
        else {
            var days_4 = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
            if (days_4 <= 2) {
                return { CheckDueDateOnStartDateForCampaigns: true };
            }
        }
    };
    DateValidator.CheckDueDateForCampaigns = function (control) {
        var startdate = $("#startdate").val().toString();
        var duedate = $("#enddate").val().toString();
        var timeDiff = +(new Date(startdate)) - +(new Date(duedate));
        var days = timeDiff / (1000 * 60 * 60 * 24);
        if (days >= 0) {
            return { CheckDueDateForCampaigns: true };
        }
        else {
            var days_5 = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
            if (days_5 <= 2) {
                return { CheckDueDateForCampaigns: true };
            }
        }
    };
    return DateValidator;
}());
exports.DateValidator = DateValidator;
//# sourceMappingURL=date.validator.js.map
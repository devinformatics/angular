import { FormControl, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

export interface ValidationResult {
  [key: string]: boolean;
}

export class DateValidator {


  public static CheckDueDate(control: FormControl): ValidationResult {
    const startdate = $("#startdate").val().toString();
    const duedate = $("#duetdate").val().toString();

    const timeDiff = +(new Date(startdate)) - +(new Date(duedate));
    
    const days =timeDiff / (1000 * 60 * 60 * 24);
    if (days >= 0) {
      return { CheckDueDate: true };
    }
    else {
      const days = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
      if (days <= 2) {
        return { CheckDueDate: true };
      }
    }
    
    
  }

  // start : added for expected close date validation
  public static CheckCloseDate(control: FormControl): ValidationResult {
    if ($("#duetdate").val() != undefined) {
      const duedate = $("#duetdate").val().toString();
      const closedate = $("#expectedclosedate").val().toString();
      const timeDiff = +(new Date(duedate)) - +(new Date(closedate));
      const days = timeDiff / (1000 * 60 * 60 * 24);

      if (days > 0) {
        return { CheckCloseDate: true };
      }
    }
  }
    
  //}
  // end : added for expected close date validation


  public static CheckDueDateOnStartDate(control: FormControl): ValidationResult {
    const startdate = $("#startdate").val().toString();
    const duedate = $("#duetdate").val().toString();

    const timeDiff = +(new Date(startdate)) - +(new Date(duedate));

    const days = timeDiff / (1000 * 60 * 60 * 24);
    if (days >= 0) {

      return { CheckDueDateOnStartDate: true };
    }
    else {
      const days = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
      if (days <= 2) {

        return { CheckDueDateOnStartDate: true };
      }
    }

    
  }

  // start : validation for expected close date
  public static CheckDueDateOnCloseDate(control: FormControl): ValidationResult {
    //alert('123');
    if ($("#duetdate").val() != undefined) {
    const duedate = $("#duetdate").val().toString();
    const closedate = $("#expectedclosedate").val().toString();

    const timeDiff = +(new Date(duedate)) - +(new Date(closedate));

    const days = timeDiff / (1000 * 60 * 60 * 24);
    if (days >= 0) {

      return { CheckDueDateOnCloseDate: true };
    }
    else {
      const days = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
      if (days <= 2) {

        return { CheckDueDateOnCloseDate: true };
      }
    }


  }
  }
  // end :validation for expected close date


  public static startDate(control: FormControl): ValidationResult {
    const startdate = $("#startdate").val().toString();
    var d = new Date();
    
    var currentdate = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    
    const timeDiff = +(new Date(startdate)) - +(new Date(currentdate));
   
    const days = timeDiff / (1000 * 60 * 60 * 24);
    
    if (days < -1) {

      return { startDate: true };
    }
    


  }

  // Start : added for close date
  public static dueDate(control: FormControl): ValidationResult {
    if ($("#duetdate").val() != undefined) {
      const duedate = $("#duetdate").val().toString();
      var d = new Date();

      var currentdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

      const timeDiff = +(new Date(duedate)) - +(new Date(currentdate));

      const days = timeDiff / (1000 * 60 * 60 * 24);

      if (days < -1) {

        return { dueDate: true };
      }
    }


  }
  // end : added for close date



  public static CheckDueDateOnStartDateForCampaigns(control: FormControl): ValidationResult {
    const startdate = $("#startdate").val().toString();
    const duedate = $("#enddate").val().toString();
    
    const timeDiff = +(new Date(startdate)) - +(new Date(duedate));

    const days = timeDiff / (1000 * 60 * 60 * 24);
    if (days >= 0) {

      return { CheckDueDateOnStartDateForCampaigns: true };
    }
    else {
      const days = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
      if (days <= 2) {

        return { CheckDueDateOnStartDateForCampaigns: true };
      }
    }


  }

  public static CheckDueDateForCampaigns(control: FormControl): ValidationResult {
    const startdate = $("#startdate").val().toString();
    const duedate = $("#enddate").val().toString();
    
    const timeDiff = +(new Date(startdate)) - +(new Date(duedate));

    const days = timeDiff / (1000 * 60 * 60 * 24);
    if (days >= 0) {
      return { CheckDueDateForCampaigns: true };
    }
    else {
      const days = Math.abs(timeDiff / (1000 * 60 * 60 * 24));
      if (days <= 2) {
        return { CheckDueDateForCampaigns: true };
      }
    }


  }




}

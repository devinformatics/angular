import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';// import Jquery here
import { Store } from '@ngrx/store';
import { AppState, getprivacyPolicy } from '../../store/reducers/app.reducer';
import { PrivacyPolicy } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  modalTitle = 'Privacy Policy';
  PrivacyPolicy;
  constructor(private route: Router, private store: Store<AppState>) {
   //this.store.dispatch(new PrivacyPolicy(""));
   //this.PrivacyPolicy = store.select(getprivacyPolicy);
   // console.log(this.PrivacyPolicy);
  }

  ngOnInit() {
    $("#wnctyModal").addClass('show');
    $("#wnctyModal").css('display', 'block');
    //this.PrivacyPolicy
    //  .subscribe(value => {
    //    console.log(value);
    //  });
  }

  redirectLogin() {
    $(".modal-backdrop").remove();
    
    this.route.navigateByUrl(`/`);
  }

 

}

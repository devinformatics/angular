import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';// import Jquery here
import { Store } from '@ngrx/store';
import { AppState, getTermsAndCondition } from '../../store/reducers/app.reducer';

@Component({
  selector: 'app-term-use',
  templateUrl: './term-use.component.html',
  styleUrls: ['./term-use.component.scss']
})
export class TermUseComponent implements OnInit {
  modalTitle = 'TERMS OF USE'; TermsAndUse;
  constructor(private route: Router, private store: Store<AppState>) {
    //this.TermsAndUse = store.select(getTermsAndCondition);
  }



  ngOnInit() {
    $("#wnctyModal").addClass('show');
    $("#wnctyModal").css('display', 'block');
  }

  redirectLogin() {
    $(".modal-backdrop").remove();

    this.route.navigateByUrl(`/`);
  }

}

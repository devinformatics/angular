import { Component, OnInit } from '@angular/core';
import { AppState, getUserInfo, getAuthenticatedToken } from '../../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-two-row',
  templateUrl: './tworow.template.html',
  styleUrls: ['./tworow.template.scss']
})
export class TwoRowComponent implements OnInit {
  modelid;
  UserAuthToken;
  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit(): void {
    
    //const authenticated$ = this.store.select(isUserAuthorized).pipe(share());
    this.modelid = 1;
  }


}

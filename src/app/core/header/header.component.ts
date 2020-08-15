import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState,  getAuthenticatedToken } from '../store/reducers/app.reducer';
import { LogOut } from '../store/actions/auth.actions';

import { distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from "src/app/core/_service/data.service";
import { Location } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  @Input() username = 'Guest';
  isExpanded = false;
  user;
  modelid
  UserDetails: Observable<any>;
  NotificationDetails: Observable<any>;
  AlertDetails: Observable<any>;
  clientCount;
  clientName: string;
  UserAuthToken;
  ClientDetails: Observable<any>;
  UserFullName: string;
  firstName: string;
  lastName: string;
  profileUUID;
  authToken;
  names: any;
  alerts: any;
  selectedAll: any;
  checkNotificationbyUUID;
  //notificationdata: [];
  //notificationsdata: Observable<any>;
  notificationsdata: any;
  alertsdata: any;
  size;
  currentNotificationcount;
  currentAlertcount;
  NotificationStatus;
  NotificationSender;
  clientUsers;
  totalNotificationCount: any;
  totalAlertCount: any;
  isDisabled = false;
  isDisabledA = false;
  show = false;
  shownotification = false;
  updateNotification: Observable<any>;
  updateAlert: Observable<any>;
  imgURL;
  constructor(private route: Router, private cdr: ChangeDetectorRef, private location: Location,  private store: Store<AppState>, private activatedRoute: ActivatedRoute, private data: DataService) {
    
    this.UserAuthToken = this.store.select(getAuthenticatedToken);
    
   
  }

  //Dialog
  showDialog(name) {
    this.route.navigateByUrl(`${this.route.url}/(modal:${name})/`);
    $(".modal-backdrop").css('display', 'block');
    $("#wnctyModal").addClass("show");
    $("#wnctyModal").css('display', 'block');
    $("body").addClass("modal-open");
  }

  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function (item: any) {
      return item.selected == true;
    })
  }

  collapse(menuName) {
    this.isExpanded = false;
    
    if (menuName === 'Plan') {
      $(".bg-case").removeClass('bg-plan-color');
      $(".bg-save").removeClass('bg-plan-color');
      $(".bg-camp").removeClass('bg-plan-color');

      $(".bg-case").removeClass('bg-case-focus');
      $(".bg-save").removeClass('bg-save-focus');
      $(".bg-camp").removeClass('bg-camp-focus');

      $("#btnPlan").addClass('bg-plan-color');
      $("#btnPlan").addClass('bg-plan');
      $("#btnPlan").addClass('bg-plan-focus');
    }
    if (menuName === 'Save') {
      $(".bg-case").removeClass('bg-plan-color');
      $(".bg-plan").removeClass('bg-plan-color');
      $(".bg-camp").removeClass('bg-plan-color');

      $(".bg-case").removeClass('bg-case-focus');
      $(".bg-plan").removeClass('bg-plan-focus');
      $(".bg-camp").removeClass('bg-camp-focus');

      $("#btnSave").addClass('bg-plan-color');
      $("#btnSave").addClass('bg-save');
      $("#btnSave").addClass('bg-save-focus');
    }
    if (menuName === 'Case') {
      $(".bg-plan").removeClass('bg-plan-color');
      $(".bg-save").removeClass('bg-plan-color');
      $(".bg-camp").removeClass('bg-plan-color');

      $(".bg-plan").removeClass('bg-plan-focus');
      $(".bg-save").removeClass('bg-save-focus');
      $(".bg-camp").removeClass('bg-camp-focus');

      $("#btnCase").addClass('bg-plan-color');
      $("#btnCase").addClass('bg-case');
      $("#btnCase").addClass('bg-case-focus');
    }
    if (menuName === 'Campaign') {      
      $(".bg-plan").removeClass('bg-plan-color');
      $(".bg-save").removeClass('bg-plan-color');
      $(".bg-case").removeClass('bg-plan-color');

      $(".bg-plan").removeClass('bg-plan-focus');
      $(".bg-save").removeClass('bg-save-focus');
      $(".bg-case").removeClass('bg-case-focus');

      $("#btnCampaign").addClass('bg-plan-color');
      $("#btnCampaign").addClass('bg-camp');
      $("#btnCampaign").addClass('bg-camp-focus');
    }
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.UserDetails.subscribe(response1 => {
      if (response1 != null) {
        this.UserFullName = response1.firstName + " " + response1.lastName;
      }
    });

  }
  public ngAfterViewChecked(): void {
    
    
  }
  getMenu(name) {
   
  }



  // Start : Show Alert
  ShowAlert(name, alertID) {  
    
    }
    // End : Show Alert

  logout() {
    localStorage.clear();
    window.location.replace('/#/login');
  }

  

  

  
}

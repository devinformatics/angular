import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import Location and Internalization Modules
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Import PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
// NGRX STATE MANAGEMENT
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer, MetaReducer, combineReducers } from '@ngrx/store';

// Welnecity Application Components
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/core/login/login.component';
import { ForgotComponent } from 'src/app/core/forgot/forgot.component';
import { changePasswordComponent } from 'src/app/core/change-password/change-password.component';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { ChartsComponent } from './shared/charts/charts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceErrorComponent } from './core/service-error/service-error.component';
import { AppRoutingModule } from './app.routing.module';
import { reducers } from './core/store/reducers/app.reducer';

import { AppConfigEffects } from './core/store/effects/appconfig.effects';
import { AuthenticationService } from './core/_service/authentication.service';
import { DataService } from './core/_service/data.service';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as ZoomChart from 'fusioncharts/fusioncharts.zoomscatter';
import * as PowerChart from 'fusioncharts/fusioncharts.powercharts';


import { FullPageComponent } from './core/templates/full-page/fullpage.template';
import { TwoRowComponent } from './core/templates/two-row/tworow.template';

import { AppSharedModule } from './shared/shared.module';

import { ResetPasswordEffects } from './core/store/effects/resetpassword.effects';




//import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
//import { TreeViewComponent } from '@syncfusion/ej2-ng-navigations';


import {
  AuthActionTypes
} from './core/store/actions/auth.actions';

import { LocationsEffects } from './core/store/effects/locations.effects';
import { LocationServices } from './core/_service/location.service';


import { NgxLoadingModule } from 'ngx-loading';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AvatarModule } from 'ngx-avatar';
import { DatePipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CurrencyPipe } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

FusionChartsModule.fcRoot(FusionCharts, Charts, ZoomChart, PowerChart);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function clearState(reducer: ActionReducer<any>): ActionReducer<any>  {
  return function (state, action) {
    if (action.type === AuthActionTypes.LOGOUT) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
//export const metaReducers: MetaReducer<any>[] = [clearState];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    changePasswordComponent,
    ModalComponent,
    HeaderComponent,
    ServiceErrorComponent,
    ChartsComponent,
    FullPageComponent,
    TwoRowComponent,
    //TreeViewComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    FusionChartsModule,
    ScrollPanelModule,
    FormsModule,
   // TreeViewModule,
    AppSharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    AvatarModule,
    DialogModule,
    MatDialogModule,
    DragDropModule,
    NgxLoadingModule.forRoot({}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers, { metaReducers: [clearState] }),
    EffectsModule.forRoot([AppConfigEffects]),
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, {
      provide: MatDialogRef,
      useValue: {}
    },AuthenticationService,   DataService, DatePipe, LocationServices, CurrencyPipe],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }

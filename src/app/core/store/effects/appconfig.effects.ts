import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { AppConfigActionTypes, OnLoad, OnUnload } from 'src/app/core/store/actions/appconfig.actions';
import { AppConfigService } from '../../_service/app.config.service';


@Injectable()
export class AppConfigEffects {

    @Effect()
    public Load: Observable<any> = this.actions
        .ofType(AppConfigActionTypes.WINDOW_LOAD)
        .map((action: OnLoad) => {
            this.appConfigService.load();
        });


        @Effect()
        public UnLoad: Observable<any> = this.actions
            .ofType(AppConfigActionTypes.WINDOW_UNLOAD)
            .map((action: OnUnload) => {
                this.appConfigService.unload();
            });

    constructor(
        private actions: Actions,
        private appConfigService: AppConfigService
    ) { }
}

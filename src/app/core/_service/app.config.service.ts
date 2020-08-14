import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAppAuthState } from 'src/app/core/store/reducers/app.reducer';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    constructor(private store: Store<AppState>) { }
    load() {
        const appState = this.store.select(getAppAuthState);
    }
    unload() {
        const data = JSON.parse(sessionStorage.getItem('appState'));
    }

}

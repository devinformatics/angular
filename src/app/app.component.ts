import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateConfig } from './_configs/app.translation.config';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState,getAppAuthState } from './core/store/reducers/app.reducer';

//import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // directives: [AppConfig]
})
export class AppComponent extends AppTranslateConfig implements OnInit {
  title = 'EduFront';
  isUserLoggedIn = false;


  constructor(translate: TranslateService, private route: Router, private store: Store<AppState>) {
    super(translate);
    
      
      
    
  }

  ngOnInit(): void {
    //const authenticated$ = this.store.select(isUserAuthorized).pipe(share());
    
    
    
    this.route.events.filter(event => event instanceof NavigationStart).subscribe((event: NavigationStart) => {
      console.log(event.url)
      if (event.url === '/login') {
        sessionStorage.removeItem('appState');
        localStorage.removeItem('NoOfAttempts');
      } else {
       
        this.store.select(getAppAuthState).subscribe(appState => {
         // sessionStorage.setItem('appState', JSON.stringify(appState));
        });
      }
    });

  }

  
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ForgotComponent } from './core/forgot/forgot.component';
import { changePasswordComponent } from './core/change-password/change-password.component';
import { ServiceErrorComponent } from './core/service-error/service-error.component';

import { FullPageComponent } from './core/templates/full-page/fullpage.template';
import { TwoRowComponent } from './core/templates/two-row/tworow.template';
import { AuthenticationGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: FullPageComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    },
      { path: '', redirectTo: 'login', pathMatch: 'full' }]
  },
    { path: '',
    component: FullPageComponent,
    children: [{
      path: 'forgot',
      component: ForgotComponent
      }]
  },
    {path: 'change-password/:id',
    component: changePasswordComponent
  },
  {
    path: 'change-password',
    component: changePasswordComponent
  },
  {
    path: '',
    component: FullPageComponent,
    //canActivate: [AuthenticationGuard],
    children: []
  },
  {
    path: '',
    component: FullPageComponent,
    //canActivate: [AuthenticationGuard],
    children: []
  },
  {
    path: '',
    component: FullPageComponent,    
    children: []
  },
  {
    path: 'user-consent',
    component: FullPageComponent,
    children: [
      {
        path: 'privacy-policy',
        loadChildren: './modules/user-consent/user-consent.module#UserConsentModule'
      },
      { path: '', redirectTo: 'user-consent', pathMatch: 'full' }
    ]
  },

  {
    path: 'user-consent',
    component: FullPageComponent,
    children: [
      {
        path: 'term-use',
        loadChildren: './modules/user-consent/user-consent.module#UserConsentModule'
      },
      { path: '', redirectTo: 'user-consent', pathMatch: 'full' }
    ]
  },
  //abc/Saving/Item --- >  dashboard/Case/item

    
  {
    path: 'dashboard',
    component: TwoRowComponent,
    canActivate: [AuthenticationGuard],
    children: [
     
 
      { path: '', redirectTo: 'str-plans', pathMatch: 'full' }
    ]
  },
    { path: '**',
      component: ServiceErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

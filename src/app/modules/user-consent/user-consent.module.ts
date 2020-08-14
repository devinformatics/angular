import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConsentrouting } from './user-consent.routing.module';


import { PrivacyPolicyComponent } from 'src/app/core/modal/privacy-policy/privacy-policy.component';
import { TermUseComponent } from 'src/app/core/modal/term-use/term-use.component';
import { AppSharedModule } from 'src/app/shared/shared.module';

const components = [
  PrivacyPolicyComponent,
  TermUseComponent
];


@NgModule({
  imports: [
    CommonModule,
    UserConsentrouting,
    AppSharedModule
  ],
  declarations: components,
  exports: components
})
export class UserConsentModule { }

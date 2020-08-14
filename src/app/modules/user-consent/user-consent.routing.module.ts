import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Directive, ViewContainerRef } from '@angular/core';

import { PrivacyPolicyComponent } from 'src/app/core/modal/privacy-policy/privacy-policy.component';
import { TermUseComponent } from 'src/app/core/modal/term-use/term-use.component';

// routes
const routes: Routes = [
  { path: 'privacypolicy', component: PrivacyPolicyComponent, outlet: 'modal' },
  { path: 'termuse', component: TermUseComponent, outlet: 'modal' },
];

export const UserConsentrouting: ModuleWithProviders = RouterModule.forChild(routes);

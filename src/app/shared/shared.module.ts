import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from '../core/modal/settings/settings.component';


import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';


import { ShortNumberPipe } from '../shared/pipes/shortnumberpipe.pipe';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ScrollPanelModule, TableModule],
  declarations: [SettingsComponent,
    ShortNumberPipe],
  exports: [SettingsComponent,

    
    ShortNumberPipe]
})
export class AppSharedModule { }

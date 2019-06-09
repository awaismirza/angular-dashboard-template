import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './navigation/components/dashboard/dashboard.component';
import { HomeComponent } from './navigation/components/home/home.component';
import { EventComponent } from './navigation/components/event/event.component';
import { ProfileComponent } from './navigation/components/profile/profile.component';

@NgModule({
  declarations: [NavigationComponent, DashboardComponent, HomeComponent, EventComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }

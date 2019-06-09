import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './navigation/components/dashboard/dashboard.component';
import { HomeComponent } from './navigation/components/home/home.component';
import { EventComponent } from './navigation/components/event/event.component';
import { ProfileComponent } from './navigation/components/profile/profile.component';
import { PagenotfoundComponent } from '../../component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'event',
        component: EventComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        component: DashboardComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

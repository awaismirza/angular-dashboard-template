import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './navigation/components/dashboard/dashboard.component';

import { PagenotfoundComponent } from '../../component/pagenotfound/pagenotfound.component';
import { DragdropComponent } from './navigation/components/dragdrop/dragdrop.component';
import { AddressComponent } from './navigation/components/address/address.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'drag',
        component: DragdropComponent
      },
      {
        path: 'address',
        component: AddressComponent
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

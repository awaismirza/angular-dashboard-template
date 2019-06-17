import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './navigation/components/dashboard/dashboard.component';

import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DragdropComponent } from './navigation/components/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddressComponent } from './navigation/components/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent, DashboardComponent, DragdropComponent, AddressComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

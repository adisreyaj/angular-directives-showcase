import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permissions.component';


@NgModule({
  declarations: [
    PermissionsComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule
  ]
})
export class PermissionsModule { }

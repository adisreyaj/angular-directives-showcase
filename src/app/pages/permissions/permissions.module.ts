import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permissions.component';

@NgModule({
  declarations: [PermissionsComponent],
  imports: [CommonModule, PermissionsRoutingModule, PageHeaderModule],
})
export class PermissionsModule {}

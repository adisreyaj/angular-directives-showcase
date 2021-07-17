import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { UiPermissionsModule } from '@lib/ui-permissions/ui-permissions.module';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permissions.component';

@NgModule({
  declarations: [PermissionsComponent],
  imports: [CommonModule, PermissionsRoutingModule, PageHeaderModule, CodeExplorerModule, UiPermissionsModule],
})
export class PermissionsModule {}

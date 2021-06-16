import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from 'src/app/components/code-explorer/code-explorer.module';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { UiPermissionsModule } from 'src/app/lib/ui-permissions/ui-permissions.module';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permissions.component';

@NgModule({
  declarations: [PermissionsComponent],
  imports: [CommonModule, PermissionsRoutingModule, PageHeaderModule, CodeExplorerModule, UiPermissionsModule],
})
export class PermissionsModule {}

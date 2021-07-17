import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { UiBadgeModule } from '@lib/ui-badge/ui-badge.module';
import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesComponent } from './badges.component';

@NgModule({
  declarations: [BadgesComponent],
  imports: [CommonModule, BadgesRoutingModule, UiBadgeModule, CodeExplorerModule, PageHeaderModule],
})
export class BadgesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from 'src/app/components/code-explorer/code-explorer.module';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { UiBadgeModule } from 'src/app/lib/ui-badge/ui-badge.module';
import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesComponent } from './badges.component';

@NgModule({
  declarations: [BadgesComponent],
  imports: [CommonModule, BadgesRoutingModule, UiBadgeModule, CodeExplorerModule, PageHeaderModule],
})
export class BadgesModule {}

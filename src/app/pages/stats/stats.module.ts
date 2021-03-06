import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { StatsCardModule } from '@components/stats-card/stats-card.module';
import { UiStatsCardModule } from '@lib/ui-stats-card/ui-stats-card.module';
import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';


@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, StatsRoutingModule, UiStatsCardModule, PageHeaderModule, StatsCardModule, CodeExplorerModule],
})
export class StatsModule {}

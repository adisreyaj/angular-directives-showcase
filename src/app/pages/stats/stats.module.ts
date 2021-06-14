import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { StatsCardModule } from 'src/app/components/stats-card/stats-card.module';
import { UiStatsCardModule } from 'src/app/lib/ui-stats-card/ui-stats-card.module';
import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, StatsRoutingModule, UiStatsCardModule, PageHeaderModule, StatsCardModule],
})
export class StatsModule {}

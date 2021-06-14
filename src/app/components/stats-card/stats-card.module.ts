import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiStatsCardModule } from 'src/app/lib/ui-stats-card/ui-stats-card.module';
import { StatsCardComponent } from './stats-card.component';

@NgModule({
  declarations: [StatsCardComponent],
  imports: [CommonModule, UiStatsCardModule],
  exports: [StatsCardComponent],
})
export class StatsCardModule {}

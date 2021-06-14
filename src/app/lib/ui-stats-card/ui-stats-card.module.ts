import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatsDeltaColorArrowDirective } from './stats-delta-color-arrow.directive';
import { StatsDeltaColorDirective } from './stats-delta-color.directive';

@NgModule({
  declarations: [StatsDeltaColorDirective, StatsDeltaColorArrowDirective],
  imports: [CommonModule],
  exports: [StatsDeltaColorDirective, StatsDeltaColorArrowDirective],
})
export class UiStatsCardModule {}

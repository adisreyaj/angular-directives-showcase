import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiBadgeDirective } from './ui-badge.directive';

@NgModule({
  declarations: [UiBadgeDirective],
  imports: [CommonModule],
  exports: [UiBadgeDirective],
})
export class UiBadgeModule {}

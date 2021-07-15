import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLongPressDirective } from './ui-long-press.directive';

@NgModule({
  declarations: [UiLongPressDirective],
  imports: [CommonModule],
  exports: [UiLongPressDirective],
})
export class UiLongPressModule {}

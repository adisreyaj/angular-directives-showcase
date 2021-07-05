import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiHighlightDirective } from './ui-highlight.directive';

@NgModule({
  declarations: [UiHighlightDirective],
  imports: [CommonModule],
  exports: [UiHighlightDirective],
})
export class UiHighlightModule {}

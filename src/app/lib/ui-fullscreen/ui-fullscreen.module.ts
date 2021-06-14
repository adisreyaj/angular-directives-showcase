import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiFullscreenDirective } from './ui-fullscreen.directive';

@NgModule({
  declarations: [UiFullscreenDirective],
  imports: [CommonModule],
  exports: [UiFullscreenDirective],
})
export class UiFullscreenModule {}

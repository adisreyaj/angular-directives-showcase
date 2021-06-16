import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiPermissionsDirective } from './ui-permissions.directive';

@NgModule({
  declarations: [UiPermissionsDirective],
  imports: [CommonModule],
  exports: [UiPermissionsDirective],
})
export class UiPermissionsModule {}

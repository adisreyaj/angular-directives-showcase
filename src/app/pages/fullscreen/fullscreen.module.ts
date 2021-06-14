import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { UiFullscreenModule } from 'src/app/lib/ui-fullscreen/ui-fullscreen.module';
import { FullscreenRoutingModule } from './fullscreen-routing.module';
import { FullscreenComponent } from './fullscreen.component';

@NgModule({
  declarations: [FullscreenComponent],
  imports: [CommonModule, FullscreenRoutingModule, PageHeaderModule, UiFullscreenModule],
})
export class FullscreenModule {}

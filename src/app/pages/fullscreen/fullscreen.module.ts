import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullscreenRoutingModule } from './fullscreen-routing.module';
import { FullscreenComponent } from './fullscreen.component';


@NgModule({
  declarations: [
    FullscreenComponent
  ],
  imports: [
    CommonModule,
    FullscreenRoutingModule
  ]
})
export class FullscreenModule { }

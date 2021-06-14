import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionCardComponent } from './section-card.component';

@NgModule({
  declarations: [SectionCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [SectionCardComponent],
})
export class SectionCardsModule {}

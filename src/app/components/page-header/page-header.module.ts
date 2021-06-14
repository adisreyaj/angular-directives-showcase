import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}

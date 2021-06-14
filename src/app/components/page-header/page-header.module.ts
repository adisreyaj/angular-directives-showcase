import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}

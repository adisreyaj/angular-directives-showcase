import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Sorter, SortHeader } from './ui-table-sort.directive';

@NgModule({
  declarations: [SortHeader, Sorter],
  imports: [CommonModule],
  exports: [SortHeader, Sorter],
})
export class UiTableSortModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { TableSortRoutingModule } from './table-sort-routing.module';
import { TableSortComponent } from './table-sort.component';

@NgModule({
  declarations: [TableSortComponent],
  imports: [CommonModule, TableSortRoutingModule, TableSortModule, CodeExplorerModule, PageHeaderModule],
})
export class TableSortModule {}

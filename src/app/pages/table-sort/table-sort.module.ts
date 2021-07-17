import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { UiTableSortModule } from '@lib/ui-table-sort/ui-table-sort.module';
import { TableSortRoutingModule } from './table-sort-routing.module';
import { TableSortComponent } from './table-sort.component';


@NgModule({
  declarations: [TableSortComponent],
  imports: [CommonModule, TableSortRoutingModule, UiTableSortModule, CodeExplorerModule, PageHeaderModule],
})
export class TableSortModule {}

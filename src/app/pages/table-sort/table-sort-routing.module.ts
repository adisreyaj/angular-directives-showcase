import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSortComponent } from './table-sort.component';

const routes: Routes = [{ path: '', component: TableSortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableSortRoutingModule { }

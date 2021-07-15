import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LongPressComponent } from './long-press.component';

const routes: Routes = [{ path: '', component: LongPressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongPressRoutingModule { }

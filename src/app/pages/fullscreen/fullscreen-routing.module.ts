import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenComponent } from './fullscreen.component';

const routes: Routes = [{ path: '', component: FullscreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullscreenRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'fullscreen',
    loadChildren: () => import('./pages/fullscreen/fullscreen.module').then((m) => m.FullscreenModule),
  },
  { path: 'buttons', loadChildren: () => import('./pages/buttons/buttons.module').then((m) => m.ButtonsModule) },
  {
    path: 'permissions',
    loadChildren: () => import('./pages/permissions/permissions.module').then((m) => m.PermissionsModule),
  },
  { path: 'stats', loadChildren: () => import('./pages/stats/stats.module').then((m) => m.StatsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

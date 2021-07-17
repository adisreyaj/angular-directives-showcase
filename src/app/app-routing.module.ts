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
  { path: 'highlight', loadChildren: () => import('./pages/highlight/highlight.module').then(m => m.HighlightModule) },
  { path: 'long-press', loadChildren: () => import('./pages/long-press/long-press.module').then(m => m.LongPressModule) },
  { path: 'badges', loadChildren: () => import('./pages/badges/badges.module').then(m => m.BadgesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-header></app-header>
    <main class="p-6 md:px-10 nt-10">
      <router-outlet></router-outlet>
    </main>`,
})
export class AppComponent {}

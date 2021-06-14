import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="mb-4 flex space-x-2 items-center">
      <a routerLink="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
        </svg>
      </a>
      <p class="text-2xl font-bold">{{ title }}</p>
    </div>
  `,
})
export class PageHeaderComponent {
  @Input() title = '';
}

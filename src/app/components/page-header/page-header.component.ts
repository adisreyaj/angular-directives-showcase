import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="mb-4">
      <p class="text-2xl font-bold">{{ title }}</p>
    </div>
  `,
})
export class PageHeaderComponent {
  @Input() title = '';
}

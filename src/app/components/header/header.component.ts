import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="w-100 h-16 bg-blue-600 flex items-center px-4">
      <div>
        <p class="text-white text-lg font-medium">Angular Directives</p>
      </div>
    </header>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

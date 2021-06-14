import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  template: `
    <app-page-header title="Fullscreen Toggle"></app-page-header>
    <div class="border h-96 border-gray-100 shadow-md flex flex-col" appUiFullscreen #fullscreen="fullscreen">
      <header
        class="flex bg-blue-200 rounded-tl-md rounded-tr-md text-gray-800 justify-between items-center py-2 px-4 border-b border-gray-300"
      >
        <p>Total Sales Report</p>
        <div class="grid grid-cols-2 gap-2">
          <button class="w-6 h-6 p-1 cursor-pointer overflow-hidden" (click)="fullscreen.minimize()">
            <span>🗕</span>
          </button>
          <button class="w-6 h-6 p-1 cursor-pointer overflow-hidden" (click)="fullscreen.maximize()">
            <span>🗖</span>
          </button>
        </div>
      </header>
      <div class="flex-1 bg-gray-100"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

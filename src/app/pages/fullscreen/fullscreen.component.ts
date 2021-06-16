import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FULLSCREEN_CODE } from 'src/app/config/fullscreen-code.config.';

@Component({
  selector: 'app-fullscreen',
  template: `
    <app-page-header title="Fullscreen Toggle"></app-page-header>
    <div class="border h-96 border-gray-100 shadow-md flex flex-col" appUiFullscreen #fullscreen="fullscreen">
      <header
        class="flex bg-blue-200 rounded-tl-md rounded-tr-md text-gray-800 justify-between items-center py-2 px-4 border-b border-gray-300"
      >
        <p>Total Sales Report</p>
        <div>
          <button class="grid items-center w-8 h-8 p-1 cursor-pointer overflow-hidden" (click)="fullscreen.toggle()">
            <ng-container *ngIf="fullscreen.isMaximized$ | async; else maximizeIcon">
              <img src="../../../assets/icons/minimize.svg" alt="Minimize" width="24" height="24" />
            </ng-container>
            <ng-template #maximizeIcon>
              <img src="../../../assets/icons/maximize.svg" alt="Minimize" width="24" height="24" />
            </ng-template>
          </button>
        </div>
      </header>
      <div class="flex-1 bg-gray-100"></div>
    </div>
    <section class="mt-20">
      <app-code-explorer [codes]="codes"></app-code-explorer>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenComponent {
  codes = FULLSCREEN_CODE;
}

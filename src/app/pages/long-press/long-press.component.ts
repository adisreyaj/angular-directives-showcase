import { Component } from '@angular/core';
import { LONG_PRESS_CODE } from 'src/app/config/long-press-code.config';

@Component({
  selector: 'app-long-press',
  template: `
    <app-page-header title="Long Press Directive"></app-page-header>
    <div class="grid grid-cols-2 gap-4 max-w-sm mt-10">
      <button class="btn primary" [duration]="500" (longPress)="handleLongPress()">Press & Hold</button>
      <button class="btn primary" [duration]="1000" (longPress)="handleLongPress()">Hold me for 1s</button>
    </div>
    <section class="mt-20">
      <app-code-explorer [codes]="code"></app-code-explorer>
    </section>
  `,
})
export class LongPressComponent {
  code = LONG_PRESS_CODE;
  handleLongPress() {
    alert('Successfully unlocked');
  }
}

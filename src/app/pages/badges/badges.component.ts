import { Component, OnInit } from '@angular/core';
import { BADGES_CODE } from 'src/app/config/badges-code.config';

@Component({
  selector: 'app-badges',
  template: ` <app-page-header title="Badges Directive"></app-page-header>
    <div class=" mt-10">
      <div class="flex justify-center items-center space-x-4">
        <button class="btn primary" badge="4" size="small">Small</button>
        <button class="btn primary" badge="2">Medium</button>
        <button class="btn primary" badge="2" size="large">Large</button>
      </div>
      <div class="flex justify-center items-center space-x-4 mt-10">
        <button class="btn primary" badge="4" position="top-right">Test</button>
        <button class="btn primary" badge="2" position="bottom-left">Test</button>
        <button class="btn primary" badge="4" position="bottom-right">Test</button>
        <button class="btn primary" badge="2" position="top-left">Test</button>
      </div>
    </div>
    <section class="mt-20">
      <app-code-explorer [codes]="code"></app-code-explorer>
    </section>`,
})
export class BadgesComponent implements OnInit {
  code = BADGES_CODE;
  constructor() {}

  ngOnInit(): void {}
}

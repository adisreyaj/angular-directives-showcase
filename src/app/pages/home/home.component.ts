import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SECTIONS } from '@config/sections.config';

@Component({
  selector: 'app-home',
  template: `
    <section class="grid gap-2 md:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <ng-container *ngFor="let section of sections">
        <app-section-card [data]="section"></app-section-card>
      </ng-container>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  sections = SECTIONS;
  constructor() {}

  ngOnInit(): void {}
}

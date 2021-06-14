import { Component } from '@angular/core';
import { StatsCardData } from 'src/app/components/stats-card/stats-card.component';
import { STATS_CODE } from 'src/app/config/stats-code.config';

@Component({
  selector: 'app-stats',
  template: `
    <app-page-header title="Stats Card"></app-page-header>
    <section class="stats__container grid gap-4">
      <ng-container *ngFor="let stat of stats">
        <app-stats-card [data]="stat"></app-stats-card>
      </ng-container>
    </section>
    <section class="mt-20">
      <app-code-explorer [codes]="codes"></app-code-explorer>
    </section>
  `,
  styles: [
    `
      .stats__container {
        grid-template-columns: repeat(auto-fit, 300px);
      }
    `,
  ],
})
export class StatsComponent {
  stats: StatsCardData[] = [
    {
      name: 'Gross Sales',
      value: 1203412,
      delta: -5.6,
    },
    {
      name: 'Total Sales',
      value: 4950003,
      delta: -9.8,
    },
    {
      name: 'Expenses',
      value: 34520,
      delta: 25,
    },
  ];

  codes = STATS_CODE;
}

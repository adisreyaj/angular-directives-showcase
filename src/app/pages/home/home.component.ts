import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SECTIONS } from 'src/app/config/sections.config';

@Component({
  selector: 'app-home',
  template: `
    <section class="grid gap-6 sections__container">
      <ng-container *ngFor="let section of sections">
        <app-section-card [data]="section"></app-section-card>
      </ng-container>
    </section>
  `,
  styles: [
    `
      .sections__container {
        grid-template-columns: repeat(auto-fit, 350px);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  sections = SECTIONS;
  constructor() {}

  ngOnInit(): void {}
}

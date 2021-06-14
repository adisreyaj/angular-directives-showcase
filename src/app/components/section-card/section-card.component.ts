import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-card',
  template: `
    <div class="p-4 rounded-md border border-gray-100 shadow-md">
      <p class="font-medium">
        <a [routerLink]="data.link">{{ data?.name }}</a>
      </p>
    </div>
  `,
})
export class SectionCardComponent implements OnInit {
  @Input() data!: { name: string; image: string; link: string };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-card',
  template: `
    <div class="p-4 rounded-md border border-gray-100 shadow-md">
      <img [src]="'../../../assets/images/' + data.image + '.jpg'" [alt]="data?.name" width="350" height="350" />
      <p class="font-medium hover:text-blue-600">
        <a [routerLink]="data.link">{{ data?.name }}</a>
      </p>
      <p class="mt-2 text-sm text-gray-600">{{ data?.description }}</p>
    </div>
  `,
})
export class SectionCardComponent implements OnInit {
  @Input() data!: { name: string; image: string; link: string; description: string };
  constructor() {}

  ngOnInit(): void {}
}

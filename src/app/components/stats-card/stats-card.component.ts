import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export interface StatsCardData {
  name: string;
  value: number;
  delta: number;
}
@Component({
  selector: 'app-stats-card',
  template: `
    <div class="flex items-center border border-gray-100 rounded-md shadow-md p-4">
      <div class="mr-4">
        <img class="h-10 w-10 rounded-full" [src]="'https://avatar.tobi.sh/' + data.name" [alt]="data.name" />
      </div>
      <div class="flex justify-between items-end flex-1">
        <div>
          <p class="font-medium text-lg text-gray-800">{{ data?.value | currency }}</p>
          <p class="text-sm text-gray-500">{{ data?.name }}</p>
        </div>
        <p appStatsDeltaColorArrow [value]="data.delta" class="text-sm font-medium">{{ data?.delta }}%</p>
      </div>
    </div>
  `,
  styles: [
    `
      .negative {
        @apply text-red-500;
      }
      .positive {
        @apply text-green-500;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardComponent {
  @Input() data!: StatsCardData;
}

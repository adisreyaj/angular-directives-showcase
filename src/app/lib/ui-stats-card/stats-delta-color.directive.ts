import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStatsDeltaColor]',
})
export class StatsDeltaColorDirective {
  @Input() value!: number;

  @HostBinding('class')
  get classes() {
    return this.value > 0 ? 'positive' : 'negative';
  }
  constructor() {}
}

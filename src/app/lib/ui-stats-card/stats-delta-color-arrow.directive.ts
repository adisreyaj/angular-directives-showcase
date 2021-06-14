import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStatsDeltaColorArrow]',
})
export class StatsDeltaColorArrowDirective implements OnChanges {
  @Input() value!: number;

  private arrow!: HTMLElement;

  @HostBinding('class')
  get classes() {
    return this.value > 0 ? 'positive' : 'negative';
  }
  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes.value.currentValue;
    if ('value' in changes && currentValue != undefined) {
      const el = this.el.nativeElement as HTMLElement;
      if (!this.arrow) {
        this.arrow = this.getArrowElement(currentValue);
        el.appendChild(this.arrow);
      }
    }
  }

  getArrowElement(value: number) {
    const arrow = this.document.createElement('span');
    arrow.style.setProperty('margin-left', '4px');
    arrow.textContent = value > 0 ? '⮝' : '⮟';
    return arrow;
  }
}

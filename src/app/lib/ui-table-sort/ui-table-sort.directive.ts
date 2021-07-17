import { Component, Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
export interface SortChangeEvent {
  column: string;
  direction: SortDirection;
}

type SortDirection = 'asc' | 'desc' | null;
@Directive({
  selector: '[sorter]',
})
export class Sorter {
  active: string | null = null;
  direction: SortDirection = null;
  @Output() sortChange = new EventEmitter<SortChangeEvent>();

  sort(column: string) {
    let direction = this.direction;
    if (this.active !== column) {
      this.direction = null;
      this.active = column;
    }
    if (this.direction === null) {
      direction = 'asc';
    } else if (this.direction === 'asc') {
      direction = 'desc';
    } else if (this.direction === 'desc') {
      direction = null;
    }
    this.sortChange.emit({
      column,
      direction,
    });
    this.direction = direction;
  }
}

@Component({
  selector: '[sortHeader]',
  template: `
    <div class="sort-col">
      <ng-content></ng-content>
      <div
        [ngClass]="{
          arrow: true,
          hide: sorter?.active !== ref || sorter?.direction === null,
          asc: sorter?.active === ref && sorter?.direction === 'asc',
          desc: sorter?.active === ref && sorter?.direction === 'desc'
        }"
      >
        🡡
      </div>
    </div>
  `,
  styles: [
    `
      .sort-col {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .arrow {
        font-size: 14px;
      }
      .arrow.hide {
        opacity: 0;
      }
      .arrow.desc {
        transform: rotate(180deg);
      }
    `,
  ],
})
export class SortHeader {
  @Input()
  ref: string | null = null;

  @HostListener('click')
  sort() {
    if (!this.ref) {
      throw new Error('ref should be provided');
    }
    this.sorter.sort(this.ref);
  }
  constructor(public sorter: Sorter) {}
}

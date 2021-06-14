import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface CodeExplorerData {
  name: string;
  language: string;
  content: string;
}

@Component({
  selector: 'app-code-explorer',
  templateUrl: './code-explorer.component.html',
  styles: [
    `
      .selector {
        @apply px-4 py-2 bg-gray-300 ring-inset rounded-tl-md rounded-tr-md;
        @apply focus:outline-none focus:ring-2 focus:ring-blue-600;
        @apply focus:ring-offset-gray-300 focus:ring-offset-2;
      }
      .active {
        @apply bg-blue-600;
        @apply focus:ring-white;
        @apply focus:ring-offset-blue-600;
        color: #fff;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeExplorerComponent implements OnInit, OnDestroy {
  @Input()
  set codes(data: CodeExplorerData[]) {
    const selectedTab = this.selectedTab$.getValue();
    this.selectedCode$.next(data[selectedTab]);
    this._codes = data;
  }
  get codes() {
    return this._codes;
  }

  selectedTab$ = new BehaviorSubject(0);
  selectedCode$ = new BehaviorSubject<CodeExplorerData | null>(null);

  private _codes: CodeExplorerData[] = [];
  private destroy$ = new Subject();
  constructor() {}

  ngOnInit(): void {
    this.selectedTab$.pipe(takeUntil(this.destroy$)).subscribe((index) => {
      this.selectedCode$.next(this.codes[index]);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

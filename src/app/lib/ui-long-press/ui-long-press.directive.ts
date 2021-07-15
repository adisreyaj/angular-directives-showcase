import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[longPress]',
})
export class UiLongPressDirective implements OnInit, OnDestroy {
  @Input() duration = 500;
  @Output() longPress = new EventEmitter<void>();

  sub!: Subscription;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    const mouseDown$ = fromEvent(this.el.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent(this.el.nativeElement, 'mouseup');
    this.sub = mouseDown$
      .pipe(switchMap(() => timer(this.duration).pipe(takeUntil(mouseUp$))))
      .subscribe(() => this.longPress.emit());
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

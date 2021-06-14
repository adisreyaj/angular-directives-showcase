import { Directive, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appUiFullscreen]',
  exportAs: 'fullscreen',
})
export class UiFullscreenDirective {
  private isMaximizedSubject = new BehaviorSubject(false);
  isMaximized$ = this.isMaximizedSubject.asObservable();

  constructor(private el: ElementRef) {}

  toggle() {
    if (this.isMaximizedSubject?.getValue()) this.minimize();
    else this.maximize();
  }
  maximize() {
    if (this.el) {
      this.isMaximizedSubject.next(true);
      this.nativeElement.classList.add('fullscreen');
    }
  }
  minimize() {
    if (this.el) {
      this.isMaximizedSubject.next(false);
      this.nativeElement.classList.remove('fullscreen');
    }
  }

  private get nativeElement() {
    return this.el.nativeElement as HTMLElement;
  }
}

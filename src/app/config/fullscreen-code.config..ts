import { CodeExplorerData } from '../components/code-explorer/code-explorer.component';

const FULLSCREEN_CODE_TS = `
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
      if (Fullscreen.isEnabled) {
        Fullscreen.request();
      }
    }
  }
  minimize() {
    if (this.el) {
      this.isMaximizedSubject.next(false);
      this.nativeElement.classList.remove('fullscreen');
      if (Fullscreen.isEnabled) {
        Fullscreen.exit();
      }
    }
  }

  private get nativeElement() {
    return this.el.nativeElement as HTMLElement;
  }
}
`;

const FULLSCREEN_HTML = `
<div appUiFullscreen #fullscreen="fullscreen">
  <header>
    <p>Total Sales Report</p>
    <div>
      <button (click)="fullscreen.minimize()">🗕</button>
      <button (click)="fullscreen.maximize()">🗖</button>
    </div>
  </header>
  <div class="body"></div>
</div>
  `;

export const FULLSCREEN_CODE: CodeExplorerData[] = [
  {
    name: 'Directive',
    content: FULLSCREEN_CODE_TS,
    language: 'typescript',
  },
  {
    name: 'Usage',
    content: FULLSCREEN_HTML,
    language: 'html',
  },
];

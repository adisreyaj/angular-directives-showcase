import { CodeExplorerData } from '../components/code-explorer/code-explorer.component';

const CODE_TS = `
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
`;

const HTML = `
<div">
  <button [duration]="500" (longPress)="handleLongPress()">Press & Hold</button>
  <button [duration]="1000" (longPress)="handleLongPress()">Hold me for 1s</button>
</div>
  `;

export const LONG_PRESS_CODE: CodeExplorerData[] = [
  {
    name: 'Directive',
    content: CODE_TS,
    language: 'typescript',
  },
  {
    name: 'Usage',
    content: HTML,
    language: 'html',
  },
];

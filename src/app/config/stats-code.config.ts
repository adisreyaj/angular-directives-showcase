import { CodeExplorerData } from '../components/code-explorer/code-explorer.component';

const STATS_CODE_TS = `
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
`;

const STATS_HTML = `
<div class="card">
  <div>
    <img [src]="data.name" [alt]="data.name" />
  </div>
  <div>
    <div>
      <p>{{ data?.value | currency }}</p>
      <p>{{ data?.name }}</p>
    </div>
    <p appStatsDeltaColorArrow [value]="data.delta">{{ data?.delta }}%</p>
  </div>
</div>
  `;

export const STATS_CODE: CodeExplorerData[] = [
  {
    name: 'Directive',
    content: STATS_CODE_TS,
    language: 'typescript',
  },
  {
    name: 'Usage',
    content: STATS_HTML,
    language: 'html',
  },
];

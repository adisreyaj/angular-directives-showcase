import { CodeExplorerData } from '../components/code-explorer/code-explorer.component';

const CODE_TS = `
@Directive({
  selector: '[badge]',
})
export class UiBadgeDirective implements OnChanges, OnDestroy {
  @Input() badge = null;
  @Input() size: BadgeSizes = 'medium';
  @Input() position: BadgePositions = 'top-right';
  @Input() customBadgeClasses: string | null = null;
  @Input() variant: BadgeVariants = 'secondary';

  badgeElement: HTMLElement | null = null;

  constructor(@Inject(DOCUMENT) private document: Document, private elRef: ElementRef<HTMLElement>) {}
  ngOnChanges(changes: SimpleChanges): void {
    if ('badge' in changes) {
      const value = \`\${changes.badge.currentValue}\`\.trim();
      if (value?.length > 0) {
        this.updateBadgeText(value);
      }
    }
  }

  ngOnDestroy() {
    if (this.badgeElement) {
      this.badgeElement.remove();
    }
  }

  private updateBadgeText(value: string) {
    if (!this.badgeElement) {
      this.createBadge(value);
    } else {
      this.badgeElement.textContent = value;
    }
  }

  private createBadge(value: string): HTMLElement {
    const badgeElement = this.document.createElement('span');
    this.addClasses(badgeElement);
    badgeElement.textContent = value;
    this.elRef.nativeElement.classList.add('badge-container');
    this.elRef.nativeElement.appendChild(badgeElement);
    return badgeElement;
  }

  private addClasses(badgeElement: HTMLElement) {
    const [vPos, hPos] = this.position.split('-');
    badgeElement.classList.add('badge', vPos, hPos);
    if (this.customBadgeClasses) {
      const customClasses = this.customBadgeClasses.split(' ');
      badgeElement.classList.add(...customClasses);
    }
    badgeElement.classList.add(this.variant);
    badgeElement.classList.add(this.size);
  }
}
`;

const HTML = `
  <div>
    <button badge="4" size="small">Small</button>
    <button badge="2">Medium</button>
    <button badge="2" size="large">Large</button>
  </div>
  <div>
    <button badge="4" position="top-right">Test</button>
    <button badge="2" position="bottom-left">Test</button>
    <button badge="4" position="bottom-right">Test</button>
    <button badge="2" position="top-left">Test</button>
  </div>
  `;

const STYLES = `
  
:root {
  --primary: hsl(207, 94%, 49%);
  --primary-dark: hsl(207, 94%, 39%);
  --secondary: hsl(129, 87%, 22%);
}

/*  ------- Styles for Badges Start ------- */
.badge-container {
  position: relative;
}

.badge {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  color: #fff;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 50%);
}
.badge.primary {
  --bg-color: var(--primary);
}

.badge.secondary {
  --bg-color: var(--secondary);
}

.badge.top {
  top: -10px;
}
.badge.bottom {
  bottom: -10px;
}
.badge.left {
  left: -10px;
}
.badge.right {
  right: -10px;
}
.badge.small {
  width: 18px;
  height: 18px;
  font-size: 10px;
}
.badge.medium {
  width: 22px;
  height: 22px;
  font-size: 11px;
}
.badge.large {
  width: 28px;
  height: 28px;
  font-size: 12px;
}
/*  ------- Styles for Badges End ------- */
`;

export const BADGES_CODE: CodeExplorerData[] = [
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
  {
    name: 'Styles',
    content: STYLES,
    language: 'scss',
  },
];

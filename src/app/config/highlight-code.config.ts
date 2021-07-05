import { CodeExplorerData } from '../components/code-explorer/code-explorer.component';

const HIGHLIGHT_CODE_TS = `
@Directive({
  selector: "[highlight]"
})
export class HighlightDirective implements OnChanges {
  @Input("highlight") searchTerm: string;
  @Input() caseSensitive = false;
  @Input() customClasses = "";

  @HostBinding("innerHtml")
  content: string;
  constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.el?.nativeElement) {
      if ("searchTerm" in changes || "caseSensitive" in changes) {
        const text = (this.el.nativeElement as HTMLElement).textContent;
        if (this.searchTerm === "") {
          this.content = text;
        } else {
          let regex = new RegExp(
            this.searchTerm,
            this.caseSensitive ? "g" : "gi"
          );
          let newText = text.replace(regex, (match: string) => {
            return \`<mark class="highlight \${this.customClasses}">\${match}</mark>\`;
          });
          const sanitzed = this.sanitizer.sanitize(
            SecurityContext.HTML,
            newText
          );
          this.content = sanitzed;
        }
      }
    }
  }
}
`;

const HIGHLIGHT_HTML = `
<div [caseSensitive]="caseSensitive"
     [highlight]="searchTerm"
     customClasses="bg-green-200">
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
</div>
  `;

export const HIGHLIGHT_CODE: CodeExplorerData[] = [
  {
    name: 'Directive',
    content: HIGHLIGHT_CODE_TS,
    language: 'typescript',
  },
  {
    name: 'Usage',
    content: HIGHLIGHT_HTML,
    language: 'html',
  },
];

import { Directive, ElementRef, HostBinding, Input, OnChanges, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appUiHighlight]',
})
export class UiHighlightDirective implements OnChanges {
  @Input('appUiHighlight') searchTerm!: string;
  @Input() caseSensitive = false;
  @Input() customClasses = '';

  @HostBinding('innerHtml')
  content!: string;
  constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.el?.nativeElement) {
      if ('searchTerm' in changes || 'caseSensitive' in changes) {
        const text = (this.el.nativeElement as HTMLElement).textContent ?? '';
        if (this.searchTerm === '') {
          this.content = text;
        } else {
          let regex = new RegExp(this.searchTerm, this.caseSensitive ? 'g' : 'gi');
          let newText = text.replace(regex, (match: string) => {
            return `<mark class="highlight ${this.customClasses}">${match}</mark>`;
          });
          const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, newText);
          if (sanitized) this.content = sanitized;
        }
      }
    }
  }
}

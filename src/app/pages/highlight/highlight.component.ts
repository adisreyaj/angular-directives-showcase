import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HIGHLIGHT_CODE } from 'src/app/config/highlight-code.config';

@Component({
  selector: 'app-highlight',
  template: `
    <app-page-header title="Highlight Directive"></app-page-header>
    <div
      style="max-width: 600px; width: 90%;"
      class="bg-white w-full flex flex-col items-start shadow-xl p-4 mt-10 border border-gray-200"
    >
      <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <input type="text" [(ngModel)]="searchTerm" />
        <label for="case-sensitive" class="mt-2 sm:mt-0">
          <input type="checkbox" name="case-sensitive" [(ngModel)]="caseSensitive" id="case-sensitive" />
          <span class="ml-2">Case Sensitive</span>
        </label>
      </div>
      <p
        [appUiHighlight]="searchTerm"
        [caseSensitive]="caseSensitive"
        customClasses="bg-transparent font-semibold text-blue-600"
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
      <span [caseSensitive]="caseSensitive" [appUiHighlight]="searchTerm">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </span>

      <div [caseSensitive]="caseSensitive" [appUiHighlight]="searchTerm" customClasses="bg-green-200 ">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </div>
    </div>
    <section class="mt-20">
      <app-code-explorer [codes]="codes"></app-code-explorer>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightComponent {
  codes = HIGHLIGHT_CODE;
  searchTerm = 'lorem ipsum';
  caseSensitive = false;
}

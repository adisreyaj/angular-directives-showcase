import { Component } from '@angular/core';
import { TABLE_SORT_CODE } from '@config/table-sort-code.config';

@Component({
  selector: 'app-table-sort',
  template: `
   <app-page-header title="Table Sort Directive"></app-page-header>
  <div class="flex justify-center">
    <iframe src="https://ng-table-datasource.vercel.app/?iframe=1" width="500px" height="250px"  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="table-sort-iframe"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
    </iframe>
  </div>
   <section class="mt-20">
      <app-code-explorer [codes]="code"></app-code-explorer>
    </section>
  `,
})
export class TableSortComponent {
  code = TABLE_SORT_CODE;
}

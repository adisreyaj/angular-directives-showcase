import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightJsModule } from 'ngx-highlight-js';
import { CodeExplorerComponent } from './code-explorer.component';

@NgModule({
  declarations: [CodeExplorerComponent],
  imports: [CommonModule, HighlightJsModule],
  exports: [CodeExplorerComponent],
})
export class CodeExplorerModule {}

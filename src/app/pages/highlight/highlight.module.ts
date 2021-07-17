import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { UiHighlightModule } from '@lib/ui-highlight/ui-highlight.module';
import { HighlightRoutingModule } from './highlight-routing.module';
import { HighlightComponent } from './highlight.component';

@NgModule({
  declarations: [HighlightComponent],
  imports: [CommonModule, HighlightRoutingModule, PageHeaderModule, CodeExplorerModule, UiHighlightModule, FormsModule],
})
export class HighlightModule {}

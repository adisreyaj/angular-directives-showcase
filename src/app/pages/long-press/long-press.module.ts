import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExplorerModule } from '@components/code-explorer/code-explorer.module';
import { PageHeaderModule } from '@components/page-header/page-header.module';
import { UiLongPressModule } from '@lib/ui-long-press/ui-long-press.module';
import { LongPressRoutingModule } from './long-press-routing.module';
import { LongPressComponent } from './long-press.component';

@NgModule({
  declarations: [LongPressComponent],
  imports: [CommonModule, LongPressRoutingModule, UiLongPressModule, CodeExplorerModule, PageHeaderModule],
})
export class LongPressModule {}

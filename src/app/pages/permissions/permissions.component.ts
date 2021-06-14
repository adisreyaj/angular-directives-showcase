import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  template: ` <app-page-header title="Permissions Directive"></app-page-header> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

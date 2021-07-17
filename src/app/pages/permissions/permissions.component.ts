import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERMISSION_CODE } from '@config/permissions-code.config';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-permissions',
  template: `
    <app-page-header title="Permissions Directive"></app-page-header>
    <section>
      <div class="flex space-x-4 mb-10">
        <button
          class="btn"
          [class.active]="(authService.loggedUser$ | async)?.id === 1"
          (click)="authService.authorizedUser()"
        >
          Authorized User
        </button>
        <button
          class="btn"
          [class.active]="(authService.loggedUser$ | async)?.id === 2"
          (click)="authService.unauthorizedUser()"
        >
          Unauthorized User
        </button>
      </div>
      <div class="p-4 rounded-md shadow-md w-80  border border-gray-100">
        <div>
          <img src="../../../assets/images/angular-merch.jpg" alt="Angular Tshirt" height="300" width="300" />
          <div class="space-y-2 mt-4">
            <p class="font-medium">Angular Tshirt</p>
            <p class="text-sm text-gray-500">Show off that you are an Angular developer.</p>
            <div>
              <p class="text-lg font-medium">$25</p>
            </div>
          </div>
        </div>
        <footer class="flex items-center gap-4 mt-6">
          <button class="btn" *appUiPermissions="'READ'; feature: 'product'">View</button>
          <button class="btn" *appUiPermissions="'UPDATE'; feature: 'product'">Edit</button>
          <button class="btn" *appUiPermissions="'DELETE'; feature: 'product'">Delete</button>
        </footer>
      </div>
    </section>
    <section class="mt-20">
      <app-code-explorer [codes]="code"></app-code-explorer>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionsComponent {
  code = PERMISSION_CODE;
  constructor(public authService: AuthService) { }
}

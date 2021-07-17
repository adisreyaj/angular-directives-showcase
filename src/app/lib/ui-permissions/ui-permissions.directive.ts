import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Permissions, User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Directive({
  selector: '[appUiPermissions]',
})
export class UiPermissionsDirective implements OnInit, OnDestroy {
  private loggedInUser!: User;
  private permission!: Permissions;
  private feature!: string;

  private subscription!: Subscription;

  @Input()
  set appUiPermissions(permission: any) {
    this.permission = permission;
    this.updateView();
  }

  @Input()
  set appUiPermissionsFeature(feature: string) {
    this.feature = feature;
    this.updateView();
  }
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef, private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.loggedUser$.subscribe((user) => {
      this.loggedInUser = user;
      this.updateView();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateView() {
    this.vcr.clear();
    if (this.hasPermission()) {
      this.vcr.createEmbeddedView(this.tpl);
    } else {
      this.vcr.clear();
    }
  }

  private hasPermission() {
    if (!this.loggedInUser) return false;
    const featurePermissions = this.loggedInUser.permissions[this.feature];
    if (featurePermissions) {
      return featurePermissions.includes(this.permission);
    }
    return false;
  }
}

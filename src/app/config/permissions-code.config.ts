import { CodeExplorerData } from '../components/code-explorer/code-explorer.component';

const PERMISSION_CODE_TS = `
@Directive({
  selector: '[appUiPermissions]',
})
export class UiPermissionsDirective implements OnInit, OnDestroy {
  private loggedInUser!: User;
  private permission!: Permissions;
  private feature!: string;

  subscription!: Subscription;

  @Input()
  set appUiPermissions(permission: Permissions) {
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
      this.vcr.clear();
      this.updateView();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateView() {
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
`;

const PERMISSION_HTML = `
<div>
  <button class="btn" *appUiPermissions="permissions.read; feature: 'product'">View</button>
  <button class="btn" *appUiPermissions="permissions.update; feature: 'product'">Edit</button>
  <button class="btn" *appUiPermissions="permissions.delete; feature: 'product'">Delete</button>
</div>
  `;

export const PERMISSION_CODE: CodeExplorerData[] = [
  {
    name: 'Directive',
    content: PERMISSION_CODE_TS,
    language: 'typescript',
  },
  {
    name: 'Usage',
    content: PERMISSION_HTML,
    language: 'html',
  },
];

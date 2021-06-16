export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  permissions: UserPermission;
}

export interface UserPermission {
  [key: string]: Permissions[];
}

export enum Permissions {
  create = 'CREATE',
  read = 'READ',
  update = 'UPDATE',
  delete = 'DELETE',
}

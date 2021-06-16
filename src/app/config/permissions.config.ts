import { Permissions, User } from '../interfaces/user.interface';

export const AUTHORIZED_USER: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'sincere@april.biz',
  permissions: {
    product: [Permissions.create, Permissions.update, Permissions.delete, Permissions.read],
  },
};
export const UNAUTHORIZED_USER = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'shanna@melissa.tv',
  permissions: {
    product: [Permissions.read],
  },
};

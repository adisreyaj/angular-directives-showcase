import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AUTHORIZED_USER, UNAUTHORIZED_USER } from '../config/permissions.config';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser$ = new BehaviorSubject<User>(AUTHORIZED_USER);

  constructor() {}
  unauthorizedUser() {
    this.loggedUser$.next(UNAUTHORIZED_USER);
  }
  authorizedUser() {
    this.loggedUser$.next(AUTHORIZED_USER);
  }
}

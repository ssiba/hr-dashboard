import { Injectable } from '@angular/core';
import { UserRole } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: UserRole = 'ADMIN';

  constructor() { }
  getRole(): UserRole {
    return this.role;
  }
  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  isUser(): boolean {
    return this.role === 'USER';
  }
}

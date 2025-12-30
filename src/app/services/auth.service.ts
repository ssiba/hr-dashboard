import { Injectable } from '@angular/core';
import { UserRole } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ROLE_KEY = 'role';
  private role: UserRole | null = null;

  constructor() {
    this.restoreSession();
  }
  
  login(email: string, password: string): boolean {
    if (!email || !password) {
      return false;
    }

    // authentication logic
    const isAdmin =
      email === 'admin@gmail.com' && password === 'admin123';

    this.setRole(isAdmin ? 'ADMIN' : 'USER');
    return true;
  }

  logout(): void {
    this.clearSession();
  }

  /* ---------------------- ROLE HELPERS ---------------------- */

  getRole(): UserRole | null {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  isUser(): boolean {
    return this.role === 'USER';
  }

  isLoggedIn(): boolean {
    return this.role !== null;
  }

  /* ---------------------- PRIVATE METHODS ---------------------- */

  private setRole(role: UserRole): void {
    this.role = role;
    localStorage.setItem(this.ROLE_KEY, role);
  }

  private restoreSession(): void {
    const storedRole = localStorage.getItem(this.ROLE_KEY) as UserRole | null;
    this.role = storedRole ?? null;
  }

  private clearSession(): void {
    this.role = null;
    localStorage.removeItem(this.ROLE_KEY);
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authRedirectGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (authService.isAdmin()) {
    router.navigate(['/admin-dashboard']);
    return false;
  }

  if (authService.isUser()) {
    router.navigate(['/user-dashboard']);
    return false;
  }

  return false;
};

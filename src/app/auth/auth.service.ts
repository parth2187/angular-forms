import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 isLoggedIn = false;

  constructor(private router: Router) {}

 getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }

  checkAuthentication(): void {
    if (!this.isLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }

}

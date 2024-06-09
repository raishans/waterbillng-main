import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  username = '';

  login(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === '12345') {
      this.isLoggedIn = true;
      this.username = 'pranish'; // Set the username upon successful login
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }

  getCurrentUser(): string {
    return this.username;
  }
}

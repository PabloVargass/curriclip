import { Injectable } from '@angular/core';

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private KEY = 'curriclip_user';

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.KEY);
  }

  get currentUser(): User | null {
    const raw = localStorage.getItem(this.KEY);
    return raw ? JSON.parse(raw) as User : null;
  }

  async login(email: string, _password: string) {
    // Simulado: guarda un usuario “fake” en localStorage
    const user: User = {
      id: 'u1',
      name: email.split('@')[0] || email,
      email,
      token: 'dev-token'
    };
    localStorage.setItem(this.KEY, JSON.stringify(user));
    return user;
  }

  logout() {
    localStorage.removeItem(this.KEY);
  }
}

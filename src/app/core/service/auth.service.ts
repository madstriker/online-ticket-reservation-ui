import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtService: JwtHelperService = new JwtHelperService();

  constructor() { }

  setToken(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
  }

  haveToken(): boolean {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken;
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  getDecodedToken(): any {
    return this.jwtService.decodeToken(this.getToken()) || null;
  }

  getUserId(): string {
    return this.getDecodedToken()['user_id'];
  }

}

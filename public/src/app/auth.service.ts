import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


private token: string;

data: any;
result: {
  success: boolean,
  message: string
};

  private loggedInStatus = false

  constructor(private _http: Http, private router: Router) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  login(usuario, senha) {
    console.log('AuthService > login(usuario)');
    return this._http.post('/login/', { usuario: usuario, senha: senha });
  }

  getUserDetails() {
    const token = this.getToken();
    console.log('getUserDetails() ', token);
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }

  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }


  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }


}
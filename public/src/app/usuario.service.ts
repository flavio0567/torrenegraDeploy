import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private isUserLoggedIn;
  private username;


  constructor(private _http: Http) { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  // login(user, callback) {
  //   this._http.post('/login/', user).subscribe(
  //     (res) => {
  //       if (!callback) {
  //         console.log('Email nao cadastrado, tente novamente!');
  //       } else {
  //         console.log('SUCCESS in login: ', res);
  //         callback(res.json());
  //       }
  //     },
  //     (err) => {
  //       console.log('ERROR in login: ', err.json());
  //     }
  //   );
  // }



}
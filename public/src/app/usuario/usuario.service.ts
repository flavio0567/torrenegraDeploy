import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private isUserLoggedIn;
  public usuario;


  constructor(private _http: Http) { 
    this.isUserLoggedIn = false;
  }

  login(usuario, callback) {
    this.usuario = usuario;
    console.log('LOGIN success: ', this.usuario);
    callback(this.usuario.email);
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.usuario;
    // return this.isUserLoggedIn;
  }


  obterTodos() {
    console.log('UsuarioService > obterTodos()');
    return this._http.get('/usuarios');
  }

  obterUsuarioById(id) {
    console.log('UsuarioService > obterUsuarioById', id);
    return this._http.get('/usuario/' + id );
  }

  criarUsuario(usuario) {
    console.log('UsuarioService > criarUsuario(usuario)', usuario);
    return this._http.post('usuario/novo', usuario);
  }

  editarUsuario(usuario) {
    console.log('UsuarioService > editarUsuario(usuario)', usuario);
    return this._http.put('usuario/edit/' + usuario['_id'], usuario);
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
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private isUserLoggedIn;
  public usuarioLogado;


  constructor(private _http: Http) { 
    this.isUserLoggedIn = false;
  }

  login(usuario) {
    console.log('UsuarioService > login(usuario)', usuario);
    this.usuarioLogado = usuario;
    return this._http.get('/login/', { params: { usuario: usuario } });
  }

  setUserLoggedIn(usuario) {
    this.isUserLoggedIn = true;
    usuario = this.usuarioLogado;
  }

  getUserLoggedIn() {
    this.login(this.usuarioLogado);
    console.log('getUserLoggedIn() ',this.usuarioLogado);
    return this.usuarioLogado;
  }


  obterListaUsuario() {
    console.log('UsuarioService > obterListaUsuario()');
    return this._http.get('/usuarios');
  }

  obterUsuario(usuario) {
    console.log('UsuarioService > obterUsuario', usuario);
    return this._http.get('/usuario/', {params: {usuario: usuario } });
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

  mudarSituacao(usuario) {
    console.log('UsuarioService > mudarSituacao(usuario)',  usuario);
    return this._http.put('usuario/mudarSituacao/' + usuario['_id'], usuario);
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
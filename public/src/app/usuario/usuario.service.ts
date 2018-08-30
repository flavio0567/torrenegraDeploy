import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private isUserLoggedIn;
  public usuarioLogado;


  constructor(private http: HttpClient, private _http: Http) { }


  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/isloggedin')
  }

  setUserLoggedIn(status, usuario) {
    this.isUserLoggedIn = status;
    this.usuarioLogado = usuario;
  }

  logout() {
    this.isUserLoggedIn = false;
    return this.http.get<logoutStatus>('/logout')
  }

  getUserLoggedIn() {
    console.log('UsuarioService > getUserLoggedIn() ');
    return this.usuarioLogado;
  }

  obterListaUsuario() {
    console.log('UsuarioService > obterListaUsuario()');
    return this._http.get('/usuarios');
  }

  obterUsuario(usuario) {
    console.log('UsuarioService > obterUsuario' );
    return this._http.get('/usuario/', {params: {usuario: usuario } });
  }

  obterUsuarioById(id) {
    console.log('UsuarioService > obterUsuarioById');
    return this._http.get('/usuario/' + id );
  }

  criarUsuario(usuario) {
    console.log('UsuarioService > criarUsuario(usuario)' );
    return this._http.post('usuario/novo', usuario);
  }

  editarUsuario(usuario) {
    console.log('UsuarioService > editarUsuario(usuario)' );
    return this._http.put('usuario/edit/' + usuario['_id'], usuario);
  }


  registrarUsuario(usuario) {
    console.log('UsuarioService > registrarUsuario(usuario)' );
    return this._http.put('usuario/register', usuario);
  }


  mudarSituacao(usuario) {
    console.log('UsuarioService > mudarSituacao(usuario)');
    return this._http.put('usuario/mudarSituacao/' + usuario['_id'], usuario);
  }


}
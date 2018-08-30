import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario/usuario.service'
import { map } from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, 
    private router: Router,
    private usuario: UsuarioService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // debugger
    if(this._auth.isLoggedIn) {
      return true
    }
    return this.usuario.isLoggedIn().pipe(map(res => {
      if(res.status) {
        this._auth.setLoggedIn(true)
        return true
      } else {
        this.router.navigate(['login'])
        return false
      }
    }))
  }
} 
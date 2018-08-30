import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.scss']
})
export class UsuarioShowComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
  usuario: any;
  frontPath:string = "../../assets/images/check.png";
  backPath:string =  "";

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('UsuarioShowComponent > ngOnInit()');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterUsuario(this._route.snapshot.params['id']);
  }

  isChecked(): boolean {
    return this.usuario.admin;
  }

  isFalse(): boolean {
    return false;
  }

  obterUsuario(id){
    console.log('UsuarioShowComponent > obterUsuario'); 
    this._usuarioService.obterUsuarioById(id)
      .subscribe((response) => {
      this.usuario = response.json();
    });
  }

  mudarSituacao(event){
    console.log('UsuarioShowComponent > mudarSituacao'); 
    this.usuario.ativo = event;
    this._usuarioService.mudarSituacao(this.usuario)
      .subscribe((response) => {
      this.usuario = response.json();
      this._router.navigate(['/usuarios']);
    });
  }

  cancel() {
    this._router.navigate(['/usuarios']);
  }

}

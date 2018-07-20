import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.css']
})
export class UsuarioShowComponent implements OnInit {
  usuario = { 
    nome: "",
    email: "",
    funcao: "",
    custoHora: 0,
    admin: false
  };

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    console.log('ProjetoEditComponent > usuario: ', this.usuario);
    this.obterUsuario(this._route.snapshot.params['id']);
  }

  obterUsuario(id){
    console.log('UsuarioEditComponent > obterUsuario'); 
    const observable = this._usuarioService.obterUsuarioById(id);
    observable.subscribe((response) => {
      this.usuario = response.json();
    });
  }

  excluirUsuario(id){
    console.log('excluir Usuario OK!!!');
  
  }


  
}

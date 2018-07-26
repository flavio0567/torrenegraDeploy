import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.css']
})
export class UsuarioShowComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
  usuario = { 
    nome: "",
    email: "",
    funcao: "",
    custoHora: 0,
    admin: ""
  };
  frontPath:string = "../../assets/images/check.png";

  backPath:string =  "";

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('UsuarioShowComponent > usuarioLogado ', this.usuarioLogado.email);
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

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: any;
  frontPath:string = "../../assets/images/check.png";

  backPath:string =  "";

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.obterListaUsuario();
  }

  obterListaUsuario() {
    console.log('ProjetoListComponent > obterListaUsuario()')
    const usuarioObservable = this._usuarioService.obterTodos();
    usuarioObservable.subscribe(
      (usuarios) => { 
        this.usuarios = usuarios.json();
        console.log('usuarios in UsuariosListComponent:', this.usuarios);
      },
      (err) => { },
        () => { }
    )
  }



}

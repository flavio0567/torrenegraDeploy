import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css']
})
export class UsuarioNovoComponent implements OnInit {
  usuarioLogado: any;
  usuario = { 
    nome: "",
    email: "",
    funcao: "",
    custoHora: 0,
    admin: false
  };
  errors: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.usuario;
    console.log('UsuarioNovoComponent > ', this.usuarioLogado);
  }

  criarUsuario(userForm: NgForm) {
  console.log('UsuarioNovoComponent > criarUsuario(userForm)', userForm); 
  this._usuarioService.criarUsuario(userForm.value)
    .subscribe(observable => {
      if(observable.json().errors) {
        this.errors = observable.json().errors;
        console.log('Algum erro ocorreu salvando usuario ', this.errors);
        this._router.navigate(['/usuario/novo']);
      } else {
        this._router.navigate(['/usuarios']);
      }
    },
      err => {
        throw err;
      }
    );
    userForm.resetForm();
  }

  cancel(){
    this._router.navigate(['/usuarios']);
  }

}

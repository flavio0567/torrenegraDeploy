import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.scss']
})
export class UsuarioNovoComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }

  errors: any;
  userForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('UsuarioNovoComponent > usuariologado ', this.usuarioLogado.email);
    this.userForm = this._formBuilder.group({
      nome: [null, [ Validators.required, Validators.minLength(2) ]],
      sobrenome: [null, [ Validators.required, Validators.minLength(2) ]],
      email: [null, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      funcao: [null, [ Validators.required ]],
      custoHora: [null, [ Validators.required ]],
      admin: []
    })
  }

  get nome() {
    return this.userForm.get('nome');
  }

  get sobrenome() {
    return this.userForm.get('sobrenome');
  }

  get email() {
    return this.userForm.get('email');
  }

  get funcao() {
    return this.userForm.get('funcao');
  }

  get custoHora() {
    return this.userForm.get('custoHora');
  }

  criarUsuario(userForm) {
  console.log('UsuarioNovoComponent > criarUsuario(userForm)', userForm.value); 
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
  }

  cancel(){
    this._router.navigate(['/usuarios']);
  }

}

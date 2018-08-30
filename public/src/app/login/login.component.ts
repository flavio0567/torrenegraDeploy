import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog  } from '@angular/material';
import { AuthService } from '../auth.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: any;

  public usuarioLogado = {
    email: '',
    admin: ''
  }
  errors: any = {}
  
  formLogin: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _usuarioService: UsuarioService,
    private _auth: AuthService,
  ) {
    this.formLogin = this._formBuilder.group({
      email: [null, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      senha: [null, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,})')]
    })
  }

  ngOnInit() {
    this.usuario = { email: "", senha: "", admin: "", ativo: ""};
  }

  get email() {
    return this.formLogin.get('email');
  }

  get senha() {
    return this.formLogin.get('senha');
  }

  login(formLogin) {
    console.log('LoginComponent  > login(form)'); 
    const usuario = formLogin.controls.email.value;
    const senha = formLogin.controls.senha.value;
    
    this._auth.login(usuario, senha).subscribe(data => {
      let result = data.json();
      if(result.success) {
        if (result.ativo === "ativo") {
          this._usuarioService.setUserLoggedIn(true, usuario);
          console.log('SUCESSO em login');
          if (result.admin) {
            this._router.navigate(['/projetos']);
          } else {
            this._router.navigate(['/apontamentos']);
          }
        } else {
          result.message = "Usuário desativado!"
          window.alert(result.message)
          console.log('ERRO em login', result.message);
          this._router.navigate(['/']);
        }
      } else {
        window.alert(result.message)
        console.log('ERRO em login', result.message);
        this._router.navigate(['/']);
      }
    })
    this._usuarioService.setUserLoggedIn(true, this.usuarioLogado);
  }

}

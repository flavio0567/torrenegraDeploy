import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UsuarioService } from '../usuario/usuario.service';



@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  user: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _usuario: UsuarioService,
    private _auth: AuthService,
  ) {
    this.formRegister = this._formBuilder.group({
      email: [null, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      senha: [null, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,})')],
      novaSenha: [null, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,})')],
      senhaConfirm: [null, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,})')]
    })
  }

  ngOnInit() {
  }

  get email() {
    return this.formRegister.get('email');
  }

  get senha() {
    return this.formRegister.get('senha');
  }

  get senhaConfirm() {
    return this.formRegister.get('senhaConfirm');
  }

  registrar(formRegister) {
    console.log('RegisterComponent > registrar(formRegister)'); 
    let usuario = {
      user: formRegister.controls.email.value,
      senha: formRegister.controls.senha.value,
      novaSenha: formRegister.controls.novaSenha.value
    }
    let senhaConfirm = formRegister.controls.senhaConfirm.value
    console.log(formRegister.controls.email.value, formRegister.controls.senha.value);

    if (usuario.novaSenha !== senhaConfirm) {
      const message = 'Senhas diferentes, favor confirmar a senha!'
      window.alert(message);
      console.log('ERRO em login', message);
      this._router.navigate(['/primeiro/acesso']);
    } else {
      this._usuario.registrarUsuario(usuario).subscribe
      (result => {
        let user = result.json();
        // console.log('result', user);
        if (user.success) {
          if (user.ativo === "ativo") {
            this._auth.setLoggedIn(true)
            console.log('SUCESSO em register');
            if (user.admin) {
              this._router.navigate(['/projetos']);
            } else {
              this._router.navigate(['/apontamentos']);
            }
          } else {
            window.alert(user.message);
            this._router.navigate(['/']);
          }
        } else {
            window.alert(user.message);
            this._router.navigate(['/']);
        }
      },
      (err) => {console.log('deu erro:', err) },
      () => { })
    }
  }

}

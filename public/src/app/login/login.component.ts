import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    senha: '',
    admin: ''
  };
  public usuarioLogado = {
    email: '',
    admin: ''
  }
  errors: any = {}
  
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuario = { email: "", senha: "", admin: ""};
    console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
    
    this.formLogin = this.fb.group({
      email: '',
      senha: '',
      admin: ''
    })

    this.formLogin.valueChanges.subscribe(console.log)
    // if (this.usuario.senha === "torrenegra123") {
    //   this.errors = this.errors.senha.message = 'Primeiro acesso, informar sua nova senha';
    // }
  }

  login() {
    console.log('LoginComponent > login()',this.formLogin.controls.email.value)
    const userObservable = this._usuarioService.login(this.formLogin.controls.email.value);
    userObservable.subscribe(
        (usuario) => {
          this.usuario = usuario.json();
          console.log('SUCESSO em login');
          if (this.usuario.admin) {
            this.router.navigate(['/projetos']);
          } else {
            this.router.navigate(['/apontamentos']);
          }
        },
        (err) => { 
          this.errors = err.json();
          console.log('ERRO em login', this.errors);
          this.router.navigate(['/']);
        }
      )
      this._usuarioService.setUserLoggedIn(this.usuarioLogado);
    }

}

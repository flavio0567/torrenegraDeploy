import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    senha: ''
  };
  errors: any = {}
  
  constructor(
    private router: Router,
    private _usuarioService: UsuarioService) {}


  ngOnInit() {
    this.usuario = { email: "", senha: ""};
    console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
  }

  login() {
    this._usuarioService.login(this.usuario, (res) => { 
      if(res.errors) {
        console.log('ERRO em login');
        this.errors = res.errors;
        this.router.navigate(['/']);
      } else {
        console.log('SUCESSO em login');
        if (this.usuario.email == "admin@torrenegra.com.br") {
          this.router.navigate(['/projetos']);
        } else {
          this.router.navigate(['/apontamentos']);
        }
      }
    })
}


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

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

  constructor(
    private router: Router,
    private _usuarioService: UsuarioService) {}


  ngOnInit() {
    this.usuario = { email: "", senha: ""};
    console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
  }

  login() {
    console.log("Entrou aqui");
    if (this.usuario.email == "admin@torrenegra.com.br") {
      this.router.navigate(['/projeto/list']);
    } else {
      this.router.navigate(['/apontamento']);
    }
    // this._userService.login(this.user, (res) => { 
    //   if(res.errors) {
    //     console.log('Something went wrong when login');
    //     this.errors = res.errors;
    //     this.router.navigate(['/']);
    //   } else {
    //     console.log('successfully login');
    //     this.router.navigate(['/dashboard']);
    //   }
    // })
}
  
}

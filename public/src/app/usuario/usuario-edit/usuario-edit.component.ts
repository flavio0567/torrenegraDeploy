import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
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
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoEditComponent > usuarioLogado ', this.usuarioLogado);
    this.obterUsuario(this._route.snapshot.params['id']);
  }

  obterUsuario(id){
    console.log('UsuarioEditComponent > obterUsuario'); 
    const observable = this._usuarioService.obterUsuarioById(id);
    observable.subscribe((response) => {
      this.usuario = response.json();
    });
  }

  editarUsuario() {
    console.log('UsuarioEditComponent > obterUsuario()', this.usuario); 
    this._usuarioService.editarUsuario(this.usuario)
    .subscribe(observable => {
      if(observable.json().errors) {
        this.errors = observable.json().errors;
        console.log('Algum erro ocorreu editando usuario ', this.errors);
        this._router.navigate(['/usuario/edit/', this.usuario['_id']]);
      } else {
        this._router.navigate(['/usuarios']);
      }
    },
    err => {
      throw err;
    }
  );
}


}

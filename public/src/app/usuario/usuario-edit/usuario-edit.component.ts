import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }

  errors: any;
  usuario: any;
  userForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoEditComponent > usuarioLogado ', this.usuarioLogado.email);
    this.obterUsuario(this._route.snapshot.params['id']);
  }

  obterUsuario(id){
    console.log('UsuarioEditComponent > obterUsuario'); 
    const observable = this._usuarioService.obterUsuarioById(id);
    observable.subscribe(
      (response) => {
      this.usuario = response.json();
      console.log('in UsuarioEditComponent >>>>:', this.usuario);
      this.userForm = this._formBuilder.group({
        _id: [this.usuario._id],
        nome: [this.usuario.nome, [Validators.required]],
        funcao: [this.usuario.funcao, [Validators.required]],
        email: [this.usuario.email, [Validators.required]],
        custoHora: [this.usuario.custoHora, [Validators.required]],
        admin: [this.usuario.admin, [Validators.required]]
      })

    });
  }

  get nome() {
    return this.userForm.get('nome');
  }

  get funcao() {
    return this.userForm.get('funcao');
  }

  get email() {
    return this.userForm.get('email');
  }

  get custoHora() {
    return this.userForm.get('custoHora');
  }


  editarUsuario(userForm: NgForm) {
    console.log('UsuarioEditComponent > obterUsuario(userForm)', userForm.value); 
    this._usuarioService.editarUsuario(userForm.value)
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

cancel() {
  this._router.navigate(['/usuarios']);
}

}

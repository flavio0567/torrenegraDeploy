import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../projeto.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-projeto-edit',
  templateUrl: './projeto-edit.component.html',
  styleUrls: ['./projeto-edit.component.css']
})
export class ProjetoEditComponent implements OnInit {
  usuario: any;
  errors: any;
  projeto = {
    codigo: "",
    descricao: "",
    cliente:  "",
    pedido:  0,
    horasPLC:  0,
    horasIHM:  0,
    valorTerceiros:  0,
    valorMateriais:  0,
    valorViagens:  0
  };

  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    console.log('ProjetoEditComponent > usuario: ', this.usuario);
    this.obterProjeto(this._route.snapshot.params['id']);

  }

  obterProjeto(id){
    console.log('ProjetoEditComponent > obterProjeto'); 
      const observable = this._projetoService.obterProjetoById(id);
      observable.subscribe((response) => {
        this.projeto = response.json();
        console.log('ProjetoEditComponent > returning', this.projeto);
    });
  }


  editarProjeto() {
      console.log('ProjetoEditComponent > obterProjeto(projForm)', this.projeto); 
      this._projetoService.editarProjeto(this.projeto)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu editando projeto ', this.errors);
          this._router.navigate(['/projeto/edit/', this.projeto['_id']]);
        } else {
          this._router.navigate(['/projetos']);
        }
      },
      err => {
        throw err;
      }
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../projeto.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-projeto-novo',
  templateUrl: './projeto-novo.component.html',
  styleUrls: ['./projeto-novo.component.css']
})
export class ProjetoNovoComponent implements OnInit {
  usuario: any;
  errors: any;
  projetos: any;
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
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    console.log('ProjetoNovoComponent > ', this.usuario);
  }

  criarProjeto(projForm: NgForm) {
    console.log('ProjetoNovoComponent > novoProjeto(nProjForm)', projForm); 
    this._projetoService.criarProjeto(projForm.value)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu salvando projeto ', this.errors);
          this._router.navigate(['/projeto/novo']);
        } else {
          this._router.navigate(['/projetos']);
        }
      },
      err => {
        throw err;
      }
    );
    projForm.resetForm();
  }

}

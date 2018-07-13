import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projeto-novo',
  templateUrl: './projeto-novo.component.html',
  styleUrls: ['./projeto-novo.component.css']
})
export class ProjetoNovoComponent implements OnInit {
  usuario: any;
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
    private _projetoService: ProjetoService
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    console.log('entrando em novo projeto: ', this.usuario);
  }

  criarProjeto(projForm: NgForm) {
    console.log('ProjetoNovoComponent > novoProjeto(nProjForm)', projForm); 
    const observable = this._projetoService.criarProjeto(projForm.value);
    observable.subscribe((res) => {
      console.log('res', res)
      ,
      error => {
        error.callback=()=>this.projeto;
        throw error;
      }
    });
    projForm.resetForm();
  }


}

import { Component, OnInit } from '@angular/core';
// import { NgbdDatepickerPopup } from './datepicker-popup';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Router } from '../../../../node_modules/@angular/router';
import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-apontamento-novo',
  templateUrl: './apontamento-novo.component.html',
  styleUrls: ['./apontamento-novo.component.css']
})
export class ApontamentoNovoComponent implements OnInit {
  usuario: any;;

  today = new Date();
  
  projetos: any[];
  projetoSelecionado: Number;
 
  id: any;
  tipo: any;
  opcaoDespesa: any;

  apontamento: any = {
    usuario: "",
    hora: {
      inicio: "",
      fim: ""
      },
    despesa: {
      descricao: "",
      valor: 0
    }
  }
  
  // apontamentos: any[];

  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.getUserLoggedIn();
    console.log(' usuario in apontamento:', this.usuario);
    this.obterListaProjeto();
  }
  
  obterListaProjeto() {
    console.log('ApontamentoNovoComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => { },
        () => { }
    )
  }

  setApontamento() {
    console.log('ApontamentoNovoComponent > setApontamento() ', this.apontamento, this.projetoSelecionado);
    if (this.tipo != 'Hora') {
    this.apontamento.hora.inicio = "";
    this.apontamento.hora.fim = "";
    }
    if (this.opcaoDespesa != 'outros') {
      this.apontamento.despesa.descricao = this.opcaoDespesa;
    }
    this.apontamento.usuario = this.usuario.email;   // arrumar essa mess
    const Observable = this._projetoService.apontamentoNovo(this.projetoSelecionado, this.apontamento);
    Observable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        this._router.navigate(['/apontamentos']);
      },
      (err) => { },
        () => { }
    )
  }

  cancel() {
    this._router.navigate(['/apontamentos']);
  }




}

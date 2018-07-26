import { Component, OnInit } from '@angular/core';
// import { NgbdDatepickerPopup } from './datepicker-popup';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-apontamento-novo',
  templateUrl: './apontamento-novo.component.html',
  styleUrls: ['./apontamento-novo.component.scss']
})
export class ApontamentoNovoComponent implements OnInit {

  panelColor = new FormControl('green');

  options: FormGroup;
  tipo: string = 'hora';
  projeto: string = '';
  opDespesa: string = '';
  descricao: string = '';
  inicio: string = '';
  fim: string = '';
  valor: number = 0;

  usuarioLogado = {
    email: '',
    admin: ''
  }

  today = new Date();
  // today = moment(new Date()).format('MM/DD/YYYY h:mm a');

  projetos: any[];
  projetoSelecionado: Number;
 
  id: any;
  // tipo: any;
  opcaoDespesa: any;

  apontamento: any = {
    tipo: "",
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
  
  constructor(
    private fb: FormBuilder,
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {  
    this.options = fb.group({
      tipo: ['hora'],
      projeto: [null],
      opDespesa: [null],
      descricao: [null],
      inicio: [null],
      fim: [null],
      valor: [null]
    });
  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log(' ApontamentoNovoComponent > usuarioLogado ', this.usuarioLogado.email);
    this.apontamento.usuario = this.usuarioLogado;
    this.obterListaProjeto();
  }
  
  obterListaProjeto() {
    console.log('ApontamentoNovoComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        console.log('projetos in List apontamentos:', this.projetos);
      },
      (err) => { },
        () => { }
    )
  }


  setApontamento() {
    console.log('debug: - tipo ',  this.options.value, this.options.controls.tipo.value );
    this.apontamento.tipo = this.options.controls.tipo.value;
    if (this.options.controls.tipo.value != 'hora') {
      this.apontamento.hora.inicio = "";
      this.apontamento.hora.fim = "";
    } else {
      this.apontamento.hora.inicio = this.options.controls.inicio.value;
      this.apontamento.hora.fim = "";
    }
    if (this.options.controls.tipo.value == 'despesa' && this.options.controls.opDespesa.value != 'outros') {
      this.apontamento.despesa.descricao = this.options.controls.opDespesa.value;
      this.apontamento.despesa.valor = this.options.controls.valor.value;
    }
    if (this.options.controls.tipo.value == 'despesa' && this.options.controls.opDespesa.value == 'outros') {
      this.apontamento.despesa.descricao = this.options.controls.descricao.value;
      this.apontamento.despesa.valor = this.options.controls.valor.value;
    }
    console.log('ApontamentoNovoComponent > setApontamento() >  this.apontamento, this.options', this.apontamento );
    const Observable = this._projetoService.apontamentoNovo(this.options.controls.projeto.value, this.apontamento);
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

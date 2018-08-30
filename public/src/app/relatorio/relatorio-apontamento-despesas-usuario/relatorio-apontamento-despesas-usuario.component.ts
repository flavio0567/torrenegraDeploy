import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Datepicker } from './datepicker-popup';
// import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';

export interface Transaction {
  codigo: string;
  cliente: string;
  despesa: string;
  valor: number;
  data: string;
  reembolso: boolean;
}

export function getProjeto(projetos, id) {
  for (var i = 0 ; i < projetos.length; i++){
    if (projetos[i]._id === id) {
      return projetos[i];
    }
  }
}


@Component({
  selector: 'relatorio-apontamento-despesas-usuario',
  templateUrl: './relatorio-apontamento-despesas-usuario.component.html',
  styleUrls: ['./relatorio-apontamento-despesas-usuario.component.scss']
})
export class RelatorioApontamentoDespesasUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'cliente', 'despesa', 'valor', 'data', 'reembolso'];
  transactions: Transaction[];

  options: FormGroup;
  selected: boolean = false;
  projetos: any[];
  usuarios: any[];
  projeto: any;
  apontamentos: any;
  lista: [{
    codigo: string,
    cliente: string,
    despesa: string,
    valor: number,
    data: string,
    reembolso: boolean
  }]
  usuarioLogado = {
    email: '',
    admin: ''
  }
  cliente = {
    _id: "",
    nomeFantasia: ""
  }
  frontPath:string = "../../assets/svg/baseline-thumb_up.svg";
  backPath:string =  "";

  constructor(
    private fb: FormBuilder,
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService
  ) { 
    this.options = fb.group({
      _projetoId: [null],
      email: [null, [ Validators.required ]],
      data1: new Date().toDateString(),
      data2: new Date().toDateString(),
      tipo: 'despesa'
    });
  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('RelatorioApontamentoDespesasUsuarioComponent > usuariologado ')
    this.obterListaUsuario();
    this.obterListaProjeto();
  }

  get reembolso() {
    return this.options.get('reembolso');
  }

  obterListaUsuario() {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > obterListaUsuario()')
    this._usuarioService.obterListaUsuario()
    .subscribe(
      (usuarios) => { 
        this.usuarios = usuarios.json();
      },
      (err) => { },
        () => { }
    )
  }

  obterListaProjeto() {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => { },
        () => { }
    )
  }

  obterApontamentos() {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > obterApontamentos');
    this._projetoService.obterApontamento(this.options.value)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        for (let a of this.apontamentos) {
          a.valor = a.despesa.valor;
          this.projeto = getProjeto(this.projetos, a._projeto);
          a.codigo = this.projeto.codigo;  
          this._clienteService.obterClienteById(this.projeto._clienteId)
          .subscribe(
            (cliente) => { 
              this.cliente = cliente.json();
              a.cliente = this.cliente.nomeFantasia
            },
            (err) => { },
              () => { }
          )
        }
        this.transactions = this.apontamentos;
        this.selected = true;
      },
      (err) => { },
        () => { }
    )
  }

  getTotalCost() {
    return this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

}

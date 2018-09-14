import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ExcelService } from '../../excel.service';
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
  estados: any[] = [0, 1, 2, 3, 4];
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

  data : Array<object> = [];

  constructor(
    private fb: FormBuilder,
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _excelService: ExcelService,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer
  ) { 
    this.options = fb.group({
      _projetoId: [null],
      email: [null, [ Validators.required ]],
      data1: new Date(),
      data2: new Date(),
      tipo: 'despesa'
    });
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/thumbup-icon.svg'));
  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('RelatorioApontamentoDespesasUsuarioComponent > usuariologado ')
    this.obterListaUsuario();
    this.obterProjetos();
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
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de usuario ', err);
        throw err;
      }
    )
  }

  obterProjetos() {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > obterListaProjeto()')
    this._projetoService.obterProjetos(this.estados)
    .subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de projetos ', err);
        throw err;
      }
    )
  }

  obterApontamentos() {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > obterApontamentos');
    this._projetoService.obterApontamentosDespesa(this.options.value)
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
            (err) => {
              console.log('Algum erro ocorreu obtendo cliente de apontamentos de projeto ', err);
              throw err;
            }
          )
        }
        this.transactions = this.apontamentos;
        this.selected = true;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de apontamentos de projeto ', err);
        throw err;
      }
    )
  }

  getTotalCost() {
    return this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

  montarRelatorio() {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > montarRelatorio()');
    this.data = [];
    let total;
    for (let i=0 ; i < this.apontamentos.length; i++) {
      let row = new Array();
      row['codigo'] = this.apontamentos[i].codigo;
      row['cliente'] = this.apontamentos[i].cliente;
      row['despesa'] = this.apontamentos[i].despesa.descricao;
      row['valor'] = this.apontamentos[i].valor;
      let dt = new Date(this.apontamentos[i].despesa.data);
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      row['data'] = dt.toLocaleDateString('pt-BR', options);
      total = this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
      this.apontamentos[i].despesa.reembolso? row['reembolso'] = 'sim' : row['reembolso'] = '';
      this.data.push(row);
    }
    this.data.push({'total': total});
    this.exportAsXLSX();
  }

  exportAsXLSX():void {
    console.log('RelatorioApontamentoDespesasUsuarioComponent > exportAsXLSX()');
    this._excelService.exportAsExcelFile(this.data, 'rel_financeiro');
 }

}

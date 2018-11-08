import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExcelService } from '../../excel.service';
// import { Datepicker } from './datepicker-popup';
// import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';


export interface Transaction {
  codigo: string;
  cliente: string;
  inicio: string;
  fim: string;
  totalhh: number;
}

export function getProjeto(projetos, id) {
  for (var i = 0 ; i < projetos.length; i++){
    if (projetos[i]._id === id) {
      return projetos[i];
    }
  }
}

export function DataHora(x, y) {
  let diff;
  let hora;
  let minutes;

  x = new Date(x);
  y = new Date(y);
  
  diff=Math.abs(y.getTime()- x.getTime())/3600000;
  
  if (isNaN(diff)){ return {dia: 0, hora: 0, minuto: 0}; }
  
  hora = parseInt(diff);   
  
  minutes = ((diff)%1/100*60)*100;
  minutes = parseInt(minutes); 
  if (minutes<10) {    
    minutes = "0" + minutes;
  } else if (minutes>60) {
    let h = minutes / 60;
    minutes = ((h)%1/100*60)*100;
    h = Math.trunc(h);
    hora += h;
  } else {
    console.log('minutes');
  }

  return {hora: hora, minuto: minutes };
}


@Component({
  selector: 'relatorio-apontamento-horas-usuario',
  templateUrl: './relatorio-apontamento-horas-usuario.component.html',
  styleUrls: ['./relatorio-apontamento-horas-usuario.component.scss']
})
export class RelatorioApontamentoHorasUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'cliente', 'inicio', 'fim', 'totalhh'];
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
    inicio: string,
    fim: string,
    totalhh: number
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
    private _excelService: ExcelService
  ) { 
    this.options = fb.group({
      _projetoId: [null],
      email: [null, [ Validators.required ]],
      data1: new Date(),
      data2: new Date(),
      tipo: 'hora'
    });
  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('RelatorioApontamentoHorasUsuarioComponent')
    this.obterListaUsuario();
    this.obterProjetos();
  }

  get email() {
    return this.options.get('email');
  }

  obterListaUsuario() {
    console.log('RelatorioApontamentoHorasUsuarioComponent > obterListaUsuario()')
    this._usuarioService.obterListaUsuario()
    .subscribe(
      (usuarios) => { 
        this.usuarios = usuarios.json();
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de usuários', err);
        throw err;
      }
    )
  }

  obterProjetos() {
    console.log('RelatorioApontamentoHorasUsuarioComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterProjetos(this.estados);
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de projetos ', err);
        throw err;
      }
    )
  }

  obterApontamento() {
    console.log('RelatorioApontamentoHorasUsuarioComponent > obterApontamento');
    this._projetoService.obterApontamento(this.options.value)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        for (let i=0 ; i < this.apontamentos.length; i++) {
          let data = DataHora(this.apontamentos[i].hora.inicio, this.apontamentos[i].hora.fim);
          // this.apontamentos[i].totalhh = data.hora + ':' + data.minuto;
          this.apontamentos[i].totalhh =
            (data.hora > 9 ? "" + data.hora.toFixed(0) : "0" + data.hora.toFixed(0)) + ':' +
            (data.minuto > 9 ? "" + data.minuto : "0" + parseInt(data.minuto).toFixed(0));
          this.projeto = getProjeto(this.projetos, this.apontamentos[i]._projeto);
          this.apontamentos[i].codigo = (this.projeto? this.projeto.codigo : '-');
          this._clienteService.obterClienteById(this.projeto._clienteId)
          .subscribe(
            (cliente) => { 
              this.cliente = cliente.json();
              this.apontamentos[i].cliente = this.cliente.nomeFantasia;
            },
            (err) => {
              console.log('Algum erro ocorreu obtendo cliente do projeto (apontamento) ', err);
              throw err;
            }
          )
        }
        this.transactions = this.apontamentos;
        this.selected = true;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo apontamentos de projeto ', err);
        throw err;
      }
    )
  }

  obterCustoTotal() {
    console.log('RelatorioApontamentoHorasUsuarioComponent > obterCustoTotal()');
    return this.projetos.map(t => t.custo).reduce((acc, value) => acc + value, 0);
  }


  montarRelatorio() {
    console.log('RelatorioFinanceiroComponent > montarRelatorio()');
    this.data = [];
    for (let i=0 ; i < this.apontamentos.length; i++) {
      let row = new Array();
      row['codigo'] = this.apontamentos[i].codigo;
      row['cliente'] = this.apontamentos[i].cliente;
      let dtInicio = new Date(this.apontamentos[i].hora.inicio);
      // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      let semana = { weekday: 'long'};
      let dia = { year: 'numeric', month: '2-digit', day: '2-digit' };
      row['dia_da_semana_inicio'] = dtInicio.toLocaleDateString('pt-BR', semana);
      row['data_inicio '] = dtInicio.toLocaleDateString('pt-BR', dia);
      row['hora_inicio'] =  ('00' + dtInicio.getHours()).slice(-2) + ':' + ('00' + dtInicio.getMinutes()).slice(-2);
      let dtFim = new Date(this.apontamentos[i].hora.fim);
      if (Object.prototype.toString.call(dtFim) === "[object Date]") {
        if (isNaN(dtFim.getTime())) {
          // row['fim'] = '';
          row['dia_da_semana_fim'] = '';
          row['data_fim'] = '';
          row['hora_fim'] = '';
        } else {
          // row['fim'] = dtFim.toLocaleDateString('pt-BR', options);
          row['dia_da_semana_fim'] = dtFim.toLocaleDateString('pt-BR', semana);
          row['data_fim'] = dtFim.toLocaleDateString('pt-BR', dia);
          row['hora_fim'] = ('00' + dtFim.getHours()).slice(-2) + ':' + ('00' + dtFim.getMinutes()).slice(-2);
        }
      } else {
        // row['fim'] = '';
        row['dia_da_semana_fim'] = '';
        row['data_fim'] = '';
        row['hora_fim'] = '';
      }
      row['totalhh'] = this.apontamentos[i].totalhh;
      this.data.push(row);
    }
    this.exportAsXLSX();
  }

  exportAsXLSX():void {
    console.log('RelatorioFinanceiroComponent > exportAsXLSX()');
    this._excelService.exportAsExcelFile(this.data, 'rel_financeiro');
 }

}
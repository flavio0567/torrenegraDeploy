import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { ExcelService } from '../../excel.service';

export interface Transaction {
  codigo: string;
  descricao: string;
  cliente: string;
  apontamentos: [{
    data: string;
    custo: number;
    despesa: string;
    valor: number;
  }]
}


export function DataHora(x, y) {

  let diff;
  let hora;
  let minutes;

  x = new Date(x);
  y = new Date(y);
  
  diff=Math.abs(y.getTime() - x.getTime())/3600000;
  
  if (isNaN(diff)){ return {dia: 0, hora: 0, minuto: 0}; }
  
  hora = parseInt(diff);   
  
  minutes = ((diff)%1/100*60)*100;
  minutes = parseInt(minutes);  
  
  return {hora: hora, minuto: minutes };
}


@Component({
  selector: 'relatorio-apontamento-projeto',
  templateUrl: './relatorio-apontamento-projeto.component.html',
  styleUrls: ['./relatorio-apontamento-projeto.component.scss']
})


export class RelatorioApontamentoProjetoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'cliente', 'data', 'custo', 'despesa', 'valor', 'ctotal', 'vtotal'];
  transactions: any;

  projetos: [{
    _id: string,
    codigo: string,
    descricao: string,
    _clienteId: string,
    cliente: string,
    apontamentos: [{
      data: string,
      custo: any;
      despesa: string,
      valor: number
    }],
    valorTotalDespesa: 0,
    custoTotalHora: 0,
    custoTotalMinuto: 0,
  }];
  estados: any[] = [0, 1, 2, 3];
  usuarioLogado = {
    email: '',
    admin: ''
  };
  cliente = {
    _id: "",
    nomeFantasia: ""
  };
  nomeCliente: any;
  usuario: any;
  apontamentos: any;
  apontamento: any;

  data : Array<object> = [];

  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    private _excelService: ExcelService
  ) { } 

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoListComponent > usuariologado ')
    this.obterProjetos();
  }

  obterProjetos() {
    console.log('ProjetoListComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterProjetos(this.estados);
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        for (var i = 0; i < this.projetos.length; i++) {
          this.obterCliente(this.projetos[i]['_clienteId'], i);
          this.obterApontamentos(this.projetos[i]['_id'], i);
        }
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de projetos ', err);
        throw err;
      }
    )
  }

  obterCliente(id, i) {
    console.log('ProjetoListComponent > obterCliente()');
    this._clienteService.obterClienteById(id)
    .subscribe(
      (cliente) => { 
        this.cliente = cliente.json();
        this.projetos[i]['cliente'] = this.cliente.nomeFantasia;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo cliente de projetos ', err);
        throw err;
      }
    )
  }
  obterApontamentos(id, i) {
    console.log('ProjetoListComponent > obterApontamentos');
    this._projetoService.obterTotalApontamentos(id)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        for (let a of this.apontamentos) {
          if (a.tipo == 'hora') {
            let data = DataHora(a.hora.inicio, a.hora.fim)
            if (isNaN(this.projetos[i].custoTotalHora)) { 
              this.projetos[i].custoTotalHora = data.hora;
              this.projetos[i].custoTotalMinuto = data.minuto;
            } else {
              this.projetos[i].custoTotalHora += data.hora;
              this.projetos[i].custoTotalMinuto += data.minuto;
            }
            this.apontamento = { 'data': a.hora.inicio ,'custo': data }; 
          } else {
            this.apontamento = { 'despesa': a.despesa.descricao, 'valor': a.despesa.valor };
            if (isNaN(this.projetos[i].valorTotalDespesa)) {
              this.projetos[i].valorTotalDespesa = 0;
            } 
            this.projetos[i].valorTotalDespesa +=  a.despesa.valor;      
          }
          if (this.projetos[i].custoTotalMinuto) {
            let hora;
            let minuto;
            if (this.projetos[i].custoTotalMinuto>=60) {
              hora = this.projetos[i].custoTotalMinuto / 60;
              minuto = ((hora)%1/100*60)*100;
              hora = parseInt(hora);
              this.projetos[i].custoTotalHora += hora;
              this.projetos[i].custoTotalMinuto = minuto;
            }
          }
          this.projetos[i].apontamentos.push(this.apontamento);
          let row = new Array();
          row['codigo'] = this.projetos[i].codigo;
          row['descricao'] = this.projetos[i].descricao;
          row['cliente'] = this.projetos[i].cliente;
          row['data'] = this.apontamento.data;
          if (this.apontamento.custo) {
            row['hhmm'] = 
            ((this.apontamento.custo.hora > 9 ? "" + this.apontamento.custo.hora.toFixed(0) : "0" + this.apontamento.custo.hora.toFixed(0)) + ':' 
            + (this.apontamento.custo.minuto > 9 ? "" + this.apontamento.custo.minuto.toFixed(0) : "0" + this.apontamento.custo.minuto.toFixed(0)));
          }
          row['despesa'] = this.apontamento.despesa;
          row['valor'] = this.apontamento.valor;
          if (this.projetos[i].custoTotalHora || this.projetos[i].custoTotalMinuto) {  
            row['totalHora'] = (this.projetos[i].custoTotalHora + ':' + (this.projetos[i].custoTotalMinuto > 9 ? "" + this.projetos[i].custoTotalMinuto.toFixed(0) : "0" + this.projetos[i].custoTotalMinuto.toFixed(0)) );       
          }
          row['valorTotalDespesa'] = this.projetos[i].valorTotalDespesa;
          this.data.push(row);
          this.apontamento = '';
        }
        this.transactions = this.projetos;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo apontamentos de projetos ', err);
        throw err;
      }
    )
  }

  montarRelatorio() {
    console.log('RelatorioApontamentoProjetoComponent > montarRelatorio()');
    for (let i = 0; i < this.data.length; i++) {
      let cod = Object(this.data[i]).codigo;
      for (let j = 0; j < this.projetos.length; j++) {
        if (cod === this.projetos[j].codigo) {
          Object(this.data[i]).cliente = this.projetos[j].cliente;
          break
        }
      }
      let dt = new Date(Object(this.data[i]).data);
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
      if (Object.prototype.toString.call(dt) === "[object Date]") {
        if (isNaN(dt.getTime())) {
          Object(this.data[i]).data = '';
        } else {
          Object(this.data[i]).data = dt.toLocaleDateString('pt-BR', options);
        }
      } else {
          Object(this.data[i]).data = '';
      }
    }
    this.exportAsXLSX();
  }

  exportAsXLSX():void {
    console.log('RelatorioApontamentoProjetoComponent > exportAsXLSX()');
    this._excelService.exportAsExcelFile(this.data, 'rel_apontamento');
 }


}

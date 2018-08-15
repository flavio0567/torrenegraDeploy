import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';

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
  console.log('x , y : ', x, y)
  let diff;
  let hora;
  let minutes;

  x = new Date(x);
  y = new Date(y);
  
  diff=Math.abs(y.getTime()- x.getTime())/3600000;
  console.log(diff);
  
  if (isNaN(diff)){ return {dia: 0, hora: 0, minuto: 0}; }
  
  hora = parseInt(diff);   
  console.log('hora', hora);
  
  minutes = ((diff)%1/100*60)*100;
  minutes = parseInt(minutes);
  console.log('minutes', minutes);  
  
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
    valorTotal: 0,
    custoTotalHora: 0,
    custoTotalMinuto: 0,
  }]
  usuarioLogado = {
    email: '',
    admin: ''
  }
  cliente = {
    _id: "",
    nomeFantasia: ""
  }
  nomeCliente: any;
  usuario: any;
  apontamentos: any;
  apontamento: any;


  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService
  ) { } 

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoListComponent > usuariologado ',this.usuarioLogado)
    this.obterListaProjeto();
  }

  obterListaProjeto() {
    console.log('ProjetoListComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        console.log('ProjetoListComponent > obterListaProjeto()', this.projetos);
        for (var i = 0; i < this.projetos.length; i++) {
          this.obterCliente(this.projetos[i]['_clienteId'], i);
          this.obterApontamentos(this.projetos[i]['_id'], i);
          console.log('p r o j e t o s  ',i, this.projetos);
        }
      },
      (err) => { },
        () => { }
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
      (err) => { },
        () => { }
    )
  }

  obterApontamentos(id, i) {
    console.log('ProjetoListComponent > obterApontamentos', id);
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
            if (isNaN(this.projetos[i].valorTotal)) {
              this.projetos[i].valorTotal = 0;
            } 
            this.projetos[i].valorTotal +=  a.despesa.valor;      
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
          this.apontamento = '';
        }

        this.transactions = this.projetos;
      },
      (err) => { },
        () => { }
    )
  }


}

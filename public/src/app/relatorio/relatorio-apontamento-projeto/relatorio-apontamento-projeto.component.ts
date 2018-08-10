import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { Pipe,  PipeTransform  } from '@angular/core';

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

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes.toString().padStart(2, '0') + ':' + 
           (value - minutes * 60).toString().padStart(2, '0');
    }
}


@Component({
  selector: 'relatorio-apontamento-projeto',
  templateUrl: './relatorio-apontamento-projeto.component.html',
  styleUrls: ['./relatorio-apontamento-projeto.component.scss']
})


export class RelatorioApontamentoProjetoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'cliente', 'data', 'custo', 'despesa', 'valor'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  projetos: [{
    _id: string,
    codigo: string,
    descricao: string,
    _clienteId: string,
    cliente: string,
    apontamentos: [{
      data: string,
      custo: number,
      despesa: string,
      valor: number
    }]  
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
          // console.log('p r o j e t o s  ',i, this.projetos);
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
    let valorDespesa = 0;
    this._projetoService.obterTotalApontamentos(id)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        for (let a of this.apontamentos) {
          if(a.tipo == 'hora') {
            let fim = new Date(a.hora.fim).getTime();
            let inicio = new Date(a.hora.inicio).getTime();
            let diff = Math.ceil( fim - inicio )/(1000 * 60 * 60);
            this.apontamento = { 'data': a.hora.inicio, 'custo': diff };             
          } else {
            this.apontamento = { 'despesa': a.despesa.descricao, 'valor': a.despesa.valor };       
          }
          this.projetos[i].apontamentos.push(this.apontamento);
          this.apontamento = '';
        }
        console.log('projetos >  >  > ',i,this.projetos[i]);
        // console.log('apontamentos >  >  > ',this.projetos[i].apontamentos);
        this.dataSource = new MatTableDataSource(this.projetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => { },
        () => { }
    )
  }


  obterCustoTotal() {
    console.log('ProjetoListComponent > obterCustoTotal()', this.projetos);
    return this.projetos.map(t => t.apontamentos['custo'], d => d.apontamentos['valor']).reduce((acc, value) => acc + value, 0);
  }

}

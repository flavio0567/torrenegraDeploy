import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';



export interface Transaction {
  codigo: string;
  descricao: string;
  cliente: string;
  custo: number;
  despesa: number;
}


@Component({
  selector: 'app-relatorio-financeiro',
  templateUrl: './relatorio-financeiro.component.html',
  styleUrls: ['./relatorio-financeiro.component.scss']
})
export class RelatorioFinanceiroComponent implements OnInit {

 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['codigo', 'descricao', 'cliente', 'custo', 'despesa', 'total'];
  dataSource: MatTableDataSource<Transaction>;


  projetos: [{
    _id: string,
    codigo: string,
    descricao: string,
    _clienteId: string,
    cliente: string,
    custo: number,
    despesa: number,
    total: number
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
          console.log('p r o j e t o s >  >  > ', this.projetos);
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
        console.log('apontamentoTotal >  >  > ', this.apontamentos);
        for (let a of this.apontamentos) {
          if(a.tipo == 'hora') {
            let fim = new Date(a.hora.fim).getTime();
            let inicio = new Date(a.hora.inicio).getTime();
            let diff = Math.ceil( fim - inicio )/(1000 * 60 * 60)
            this.projetos[i]['custo'] = a.valorHH * diff;
          } else {
            valorDespesa +=  a.despesa.valor;             
          }
        }
        this.projetos[i]['despesa'] = valorDespesa;
        this.projetos[i]['total'] = valorDespesa + this.projetos[i]['custo'];
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
    return this.projetos.map(t => t.custo).reduce((acc, value) => acc + value, 0);
  }



}

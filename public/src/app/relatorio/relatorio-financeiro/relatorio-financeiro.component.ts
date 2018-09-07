import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { ExcelService } from '../../excel.service';

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

  row: any[];
  data : Array<object> = [];

  projetos: [{
    _id: string,
    codigo: string,
    descricao: string,
    _clienteId: string,
    cliente: string,
    custo: number,
    despesa: number,
    total: number;
  }];
  usuarioLogado = {
    email: '',
    admin: ''
  };
  cliente = {
    _id: "",
    nomeFantasia: ""
  };
  estados: any[] = [0, 1, 2, 3];
  nomeCliente: any;
  usuario: any;
  apontamentos: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    private _excelService: ExcelService
  ) { } 

  ngOnInit() {
    console.log('RelatorioFinanceiroComponent > ngOnInit() ')
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterProjetos();
  }

  obterProjetos() {
    console.log('RelatorioFinanceiroComponent > obterProjetos()')
    const projetoObservable = this._projetoService.obterProjetos(this.estados);
    projetoObservable.subscribe(projetos => {
      this.projetos = projetos.json();
      for (let i = 0; i < this.projetos.length; i++) {
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
    console.log('RelatorioFinanceiroComponent > obterCliente()');
    this._clienteService.obterClienteById(id)
      .subscribe(cliente => { 
        this.cliente = cliente.json();
        this.projetos[i]['cliente'] = this.cliente.nomeFantasia;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo cliente de projeto ', err);
        throw err;
      }
    )
  }

  async obterApontamentos(id, i) {
    console.log('RelatorioFinanceiroComponent > obterApontamentos');
    let valorDespesa = 0;
    let custoTotal = 0;
    await this._projetoService.obterTotalApontamentos(id)
    .subscribe(async apontamentos => { 
        this.apontamentos = apontamentos.json();
        for (let j=0 ; j < this.apontamentos.length; j++) {
          if(this.apontamentos[j].tipo === 'hora' && this.apontamentos[j].hora.fim) {
            let fim = new Date(this.apontamentos[j].hora.fim).getTime();
            let inicio = new Date(this.apontamentos[j].hora.inicio).getTime();
            let diff = Math.ceil( fim - inicio )/(1000 * 60 * 60)
            custoTotal += (this.apontamentos[j].valorHH * diff);
          } else {
            valorDespesa +=  this.apontamentos[j].despesa.valor; 
          }
        }

        this.projetos[i]['despesa'] = valorDespesa;
        this.projetos[i]['custo'] = custoTotal;
        this.projetos[i]['total'] = (this.projetos[i]['custo'] || 0) + (this.projetos[i]['despesa'] || 0); 

        this.dataSource = new MatTableDataSource(this.projetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo apontamentos de projetos ', err);
        throw err;
      }
    )
  }

montarRelatorio() {
  console.log('RelatorioFinanceiroComponent > montarRelatorio()');
  for (let i = 0; i < this.projetos.length; i++) {
    this.row = new Array();
    this.row['codigo'] = this.projetos[i]['codigo'];
    this.row['descricao'] = this.projetos[i]['descricao'];
    this.row['cliente'] = this.projetos[i]['cliente'];
    this.row['custo'] = this.projetos[i]['custo'];
    this.row['despesa'] = this.projetos[i]['despesa'];
    this.row['total'] = (this.projetos[i]['custo'] || 0) + (this.projetos[i]['despesa'] || 0); 
    this.data.push(this.row);
  }
  this.exportAsXLSX();
}


  obterCustoTotal() {
    console.log('RelatorioFinanceiroComponent > obterCustoTotal()');
    return this.projetos.map(t => t.custo).reduce((acc, value) => acc + value, 0);
  }

  exportAsXLSX():void {
    console.log('RelatorioFinanceiroComponent > exportAsXLSX()');
    this._excelService.exportAsExcelFile(this.data, 'rel_financeiro');
  }

}

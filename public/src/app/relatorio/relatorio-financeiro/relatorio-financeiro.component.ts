import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
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

  data: any = [{
    codigo: String,
    descricao: String,
    cliente: String,
    custo: Number,
    despesa: Number,
    total: Number
    }];

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
    console.log('RelatorioFinanceiroComponent > obterCliente()');
    this._clienteService.obterClienteById(id)
    .subscribe(
      (cliente) => { 
        this.cliente = cliente.json();
        this.projetos[i]['cliente'] = this.cliente.nomeFantasia;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo cliente de projeto ', err);
        throw err;
      }
    )
  }

  obterApontamentos(id, i) {
    console.log('RelatorioFinanceiroComponent > obterApontamentos');
    let valorDespesa = 0,
        custoTotal = 0;
    this._projetoService.obterTotalApontamentos(id)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        for (let a of this.apontamentos) {
          if(a.tipo == 'hora' && a.hora.fim) {
            let fim = new Date(a.hora.fim).getTime();
            let inicio = new Date(a.hora.inicio).getTime();
            let diff = Math.ceil( fim - inicio )/(1000 * 60 * 60)
            custoTotal += (a.valorHH * diff);
          } else {
            valorDespesa +=  a.despesa.valor; 
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

  obterCustoTotal() {
    console.log('RelatorioFinanceiroComponent > obterCustoTotal()');
    return this.projetos.map(t => t.custo).reduce((acc, value) => acc + value, 0);
  }

  // exportAsXLSX():void {
  //   console.log('RelatorioFinanceiroComponent > exportAsXLSX()', this.dataSource.filteredData);
  //   this._excelService.exportAsExcelFile(this.dataSource.filteredData, 'rel_financeiro');
  // }
  exportAsXLSX():void {
    console.log('RelatorioFinanceiroComponent > exportAsXLSX() >>> data / dadaSource', this.projetos);
    // for (let i = 0; i < this.projetos.length; i++) {
    //   this.data[i]    = this.projetos[i] ;
    // }
    this._excelService.exportAsExcelFile(this.projetos, 'rel_financeiro');
 }

}

import { Component, OnInit, Inject, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface ApontamentoData {
  codigo: string;
  descricao: string;
  despesa: {
    descricao: string, 
    valor: string,
    data: string}
}

export function AddDays(date, amount) {
  var tzOff = date.getTimezoneOffset() * 60 * 1000,
      t = date.getTime(),
      d = new Date(),
      tzOff2;

  t += (1000 * 60 * 60 * 24) * amount;
  d.setTime(t);
  tzOff2 = d.getTimezoneOffset() * 60 * 1000;
  if (tzOff != tzOff2) {
    var diff = tzOff2 - tzOff;
    t += diff;
    d.setTime(t);
  }
  return d;
}



@Component({
  selector: 'apontamento-lista-despesa',
  templateUrl: './apontamento-lista-despesa.component.html',
  styleUrls: ['./apontamento-lista-despesa.component.scss']
})
export class ApontamentoListaDespesaComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'descricaoDespesa', 'despesaValor', 'despesaData'];
  dataSource: MatTableDataSource<ApontamentoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  usuarioLogado = '';

  apontamentos = [{
    codigo: "",
    descricao: "",
    despesa: {
      descricao: "",
      valor: "",
      data: ""},
    _projeto: ""
  }] 

  today = AddDays(new Date(),-1);
  tomorrow = AddDays(new Date(), 1);
  apto = {
    email: this.usuarioLogado,
    data1: this.today,
    data2: this.tomorrow,
    tipo: 'despesa'
  }

  projeto: any;
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('ApontamentoListaDespesaComponent > ngOnInit()');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterListaApontamento();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obterListaApontamento(){
    this.apto.email = this.usuarioLogado;
    console.log('ApontamentoListaDespesaComponent > obterListaApontamento()');
    const apontObservable = this._projetoService.obterApontamentosDespesa(this.apto);
    apontObservable.subscribe(
      (apontamentos) => {
        this.apontamentos = apontamentos.json();
        // console.log('ApontamentoListaDespesaComponent > obterListaApontamento() > apontamentos ', this.apontamentos)
        for (var i = 0; i < this.apontamentos.length; i++) {
          this.obterProjeto(this.apontamentos[i]._projeto, i);
        } 
        this.dataSource = new MatTableDataSource(this.apontamentos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista de apontamentos despesa ', err);
        throw err;
      }
    )
  }

  obterProjeto(id, i) {
    console.log('ApontamentoListaDespesaComponent > obterProjeto()');
    const observable = this._projetoService.obterProjetoById(id);
    observable.subscribe(
      (response) => {
        this.projeto = response.json();
        this.apontamentos[i].codigo = this.projeto.codigo;
        this.apontamentos[i].descricao = this.projeto.descricao;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo projetoById ', err);
        throw err;
      }
    )
  }


}
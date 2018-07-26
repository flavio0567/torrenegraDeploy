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
    valor: string}
}

@Component({
  selector: 'apontamento-lista-despesa',
  templateUrl: './apontamento-lista-despesa.component.html',
  styleUrls: ['./apontamento-lista-despesa.component.scss']
})
export class ApontamentoListaDespesaComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'descricaoDespesa', 'despesaValor'];
  dataSource: MatTableDataSource<ApontamentoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  usuarioLogado = {
    email: '',
    admin: ''
  }

  apontamentos = [{
    codigo: "",
    descricao: "",
    despesa: {
      descricao: "",
      valor: ""},
    _projeto: ""
  }] 

  projeto: any;
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ApontamentoListaDespesaComponent > usuariologado',this.usuarioLogado.email)
    this.obterListaApontamento();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obterListaApontamento(){
    console.log('ApontamentoListaDespesaComponent > obterListaApontamento()', this.usuarioLogado)
    const apontObservable = this._projetoService.obterApontamentosDespesa(this.usuarioLogado);
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
      (err) => { },
        () => { }
    )
  }

  obterProjeto(id, i) {
    console.log('ApontamentoListaDespesaComponent > obterProjeto()', id, i)
    const observable = this._projetoService.obterProjetoById(id);
    observable.subscribe(
      (response) => {
        this.projeto = response.json();
        // console.log('ApontamentoListaDespesaComponent > obterProjeto() > this.projeto', this.projeto.apontamentos);
        this.apontamentos[i].codigo = this.projeto.codigo;
        this.apontamentos[i].descricao = this.projeto.descricao;
      },
      (err) => { },
        () => { }
    )
  }


}
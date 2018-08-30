import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface ApontamentoData {
  codigo: string;
  descricao: string;
  hora : {
    inicio: string};
  acao: string;
}

@Component({
  selector: 'apontamento-lista-hora',
  templateUrl: './apontamento-lista-hora.component.html',
  styleUrls: ['./apontamento-lista-hora.component.scss']
})
export class ApontamentoListaHoraComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'acao'];
  dataSource: MatTableDataSource<ApontamentoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  usuarioLogado = {
    email: '',
    admin: ''
  }

  apontamentos = [{
    _id: "", 
    _projeto: "",
    usuario: "",
    codigo: "",
    descricao: "",
    hora: {
      inicio: ""},
    acao: ""
  }] 
  

  projeto: any;
  
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('ApontamentoListaHoraComponent > ngOnInit() ');
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
    console.log('ApontamentoListaHoraComponent > obterListaApontamento()');
    const apontObservable = this._projetoService.obterApontamentosHoraPorUsuario(this.usuarioLogado);
    apontObservable.subscribe(
      (apontamentos) => {
        this.apontamentos = apontamentos.json();
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
    console.log('ApontamentoListaHoraComponent > obterProjeto()');
    const observable = this._projetoService.obterProjetoById(id);
    observable.subscribe(
      (response) => {
        this.projeto = response.json();
        this.apontamentos[i].descricao = this.projeto.descricao;
        this.apontamentos[i].codigo = this.projeto.codigo;
      },
      (err) => { },
        () => { }
    )
  }

  openDialog(projeto): void {
    console.log('ApontamentoListaHoraComponent > openDialog(projeto)');
    let dialogRef = this.dialog.open(DialogApontamentoHora, {
      width: '350px',

      data: {
        id: projeto._id,
        codigo: projeto.codigo,
        descricao: projeto.descricao,
        inicio: projeto.hora.inicio,
        fim: new Date(),
        usuario: this.usuarioLogado
      }
    });

    dialogRef.afterClosed().subscribe(res => {
        console.log('The dialog was closed');
        this.obterListaApontamento();
    });
  }

}


@Component({
  selector: 'app-popup',
  templateUrl: '../popup/popup.component.html',
  styleUrls: ['../popup/popup.component.scss']
})

export class DialogApontamentoHora {

  constructor(private _projetoService: ProjetoService, 
    private _router: Router, 
    public dialogRef: MatDialogRef<DialogApontamentoHora>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  encerrarApontamento(data) {
    console.log('DialogApontamentoHora >  encerrarApontamento(data) ');
    const dialogObservable = this._projetoService.encerrarApontamento(data);
    dialogObservable.subscribe(
      (res) => { 
        console.log('The dialog called encerrar apontamento!', res);
        this.dialogRef.close();
      },
      (err) => {
        console.log('Algum erro ocorreu encerrando apontamento ', err);
        throw err;
      }
    )
  }

}

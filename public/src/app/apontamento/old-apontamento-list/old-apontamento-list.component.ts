import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface ApontamentoData {
  codigo: string;
  descricao: string;
  hora: {
    inicio: string};
  acao: string;
}

@Component({
  selector: 'app-apontamento-list',
  templateUrl: './apontamento-list.component.html',
  styleUrls: ['./apontamento-list.component.scss']
})
export class ApontamentoListComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'acao'];
  dataSource: MatTableDataSource<ApontamentoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  usuario: any;
  apontamentos = [{
    _id: "", 
    _projeto: "",
    usuario: "",
    codigo: "",
    descricao: "",
    hora: {
      inicio: ""
    },
    acao: ""
  }] 
  

  projeto: any;
  
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.getUserLoggedIn();
    this.obterListaApontamento();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obterListaApontamento(){
    console.log('ApontamentoListComponent > obterListaApontamento()', this.usuario.email)
    const apontObservable = this._projetoService.obterApontamentosDespesa(this.usuario.email);
    apontObservable.subscribe(
      (apontamentos) => {
        this.apontamentos = apontamentos.json();
        console.log('ApontamentoListComponent > obterListaApontamento() > apontamentos ', this.apontamentos)
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
    console.log('ApontamentoListComponent > obterProjeto()')
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
    console.log('ApontamentoListComponent > openDialog(projeto)', projeto)
    let dialogRef = this.dialog.open(DialogApontamento, {
      width: '250px',

      data: {
        id: projeto._id,
        codigo: projeto.codigo,
        descricao: projeto.descricao,
        inicio: projeto.hora.inicio,
        fim: new Date(),
        usuario: this.usuario.email
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
  templateUrl: '../popup/popup.component.html'
})

export class DialogApontamento {

  constructor(private _projetoService: ProjetoService, 
    private _router: Router, 
    public dialogRef: MatDialogRef<DialogApontamento>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  encerrarApontamento(data) {
    console.log('DialogApontamento >  encerrarApontamento(data) ', data)
    const dialogObservable = this._projetoService.encerrarApontamento(data);
    dialogObservable.subscribe(
      (res) => { 
        console.log('The dialog called encerrar apontamento!', res);
        this.dialogRef.close();
      },
      (err) => { },
        () => { }
    )
  }

}


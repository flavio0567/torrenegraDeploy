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

  // apontamentos = [{
  //   _id: "", 
  //   _projeto: "",
  //   usuario: "",
  //   codigo: "",
  //   descricao: "",
  //   despesaDescricao: "",
  //   despesaValor: ""
  // }] 

  projeto: any;
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ApontamentoListaDespesaComponent > usuariologado',this.usuarioLogado)
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
        // for (let j = 0; j < this.projeto.apontamentos.length; j++) {
        //   console.log('this.projeto.apontamentos[j]', this.projeto.apontamentos[j]);
        //   // console.log('this.projeto.apontamentos[j].despesaValor;', this.projeto.apontamentos[j].despesa.valor);
        //   if(this.projeto.apontamentos[j].tipo === 'despesa'){
        //     this.apontamentos[i].despesaDescricao = this.projeto.apontamentos[j].despesa.descricao;
        //     this.apontamentos[i].despesaValor = this.projeto.apontamentos[j].despesa.valor;
        //   }
        // }
      },
      (err) => { },
        () => { }
    )
  }



  // obterProjeto(id, i) {
  //   console.log('ApontamentoListaDespesaComponent > obterProjeto()', id, i)
  //   const observable = this._projetoService.obterProjetoById(id);
  //   observable.subscribe(
  //     (response) => {
  //       this.projeto = response.json();
  //       // console.log('ApontamentoListaDespesaComponent > obterProjeto() > this.projeto', this.projeto.apontamentos);
  //       this.apontamentos[i].codigo = this.projeto.codigo;
  //       this.apontamentos[i].descricao = this.projeto.descricao;
  //       for (let j = 0; j < this.projeto.apontamentos.length; j++) {
  //         console.log('this.projeto.apontamentos[j]', this.projeto.apontamentos[j]);
  //         // console.log('this.projeto.apontamentos[j].despesaValor;', this.projeto.apontamentos[j].despesa.valor);
  //         if(this.projeto.apontamentos[j].tipo === 'despesa'){
  //           this.apontamentos[i].despesaDescricao = this.projeto.apontamentos[j].despesa.descricao;
  //           this.apontamentos[i].despesaValor = this.projeto.apontamentos[j].despesa.valor;
  //         }
  //       }
  //     },
  //     (err) => { },
  //       () => { }
  //   )
  // }


  // openDialog(projeto): void {
  //   console.log('ApontamentoListaDespesaComponent > openDialog(projeto)', projeto)
  //   let dialogRef = this.dialog.open(DialogApontamentoDespesa, {
  //     width: '250px',

  //     data: {
  //       id: projeto._id,
  //       codigo: projeto.codigo,
  //       descricao: projeto.descricao,
  //       valor: projeto.valor,
  //       usuario: this.usuarioLogado
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(res => {
  //       console.log('The dialog was closed');
  //       this.obterListaApontamento();
  //   });
  // }


}


// @Component({
//   selector: 'app-popup',
//   templateUrl: '../popup/popup.component.html'
// })

// export class DialogApontamentoDespesa {

//   constructor(private _projetoService: ProjetoService, 
//     private _router: Router, 
//     public dialogRef: MatDialogRef<DialogApontamentoDespesa>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   encerrarApontamento(data) {
//     console.log('DialogApontamentoDespesa >  encerrarApontamento(data) ', data)
//     const dialogObservable = this._projetoService.encerrarApontamento(data);
//     dialogObservable.subscribe(
//       (res) => { 
//         console.log('The dialog called encerrar apontamento!', res);
//         this.dialogRef.close();
//       },
//       (err) => { },
//         () => { }
//     )
//   }

// }

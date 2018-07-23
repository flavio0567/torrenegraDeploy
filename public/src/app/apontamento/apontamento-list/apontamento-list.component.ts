import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-apontamento-list',
  templateUrl: './apontamento-list.component.html',
  styleUrls: ['./apontamento-list.component.css']
})
export class ApontamentoListComponent implements OnInit {
  usuario: any;
  apontamentos: any; 
  
  ap = [{
    descricao: "",
    usuario: "",
    hora: {
      inicio: "",
      fim: ""
      },
    despesa: {
      descricao: "",
      valor: 0
    }
  }];

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

  obterListaApontamento(){
    console.log('ApontamentoListComponent > obterListaApontamento()', this.usuario)
    const apontObservable = this._projetoService.obterApontamentos();
    apontObservable.subscribe(
      (apontamentos) => {
        this.apontamentos = apontamentos.json();
        console.log('JSON apontamentos in obterApontamentos()', this.apontamentos);
        // this.ap.push(this.apontamentos);
        for (var i = 0; i < this.apontamentos.length; i++) {
          this.obterProjeto(this.apontamentos[i]._projeto, i);
        } 
      },
      (err) => { },
        () => { }
    )
  }

  obterProjeto(id, i) {
    console.log('ApontamentoNovoComponent > obterProjeto()')
    const observable = this._projetoService.obterProjetoById(id);
    observable.subscribe(
      (response) => {
        this.projeto = response.json();
        console.log(' descricao do projeto in obterProjeto()', this.projeto, this.ap);
        this.apontamentos[i].descricao = this.projeto.descricao;
        this.apontamentos[i].codigo = this.projeto.codigo;
        // this.obterClienteNomeFantasia(this.projeto._clienteId);
        // this.obterClientes();
      },
      (err) => { },
        () => { }
    )
  }



  openDialog(projeto): void {
    console.log('ProjetoListComponent > openDialog(projeto) > encerrar()')
    let dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: {
        id: projeto._id,
        codigo: projeto.codigo,
        descricao: projeto.descricao,
        usuario: this.usuario
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
  styleUrls: ['../popup/popup.component.css']
})

export class Dialog {

  constructor(private _projetoService: ProjetoService, 
    private _router: Router, 
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  encerrarAtendinmento(id) {
    console.log('Dialog >  encerrarAtendimento(id) ', id)
    const dialogObservable = this._projetoService.encerrarApontamento(id);
    dialogObservable.subscribe(
      (res) => { 
        console.log('The dialog called encerrar apontamento!', res);
        this.dialogRef.close();
      },
      (err) => { },
        () => { }
    )
    // console.log('The dialog called delete projeto!');
    // this.dialogRef.close();
  }

}


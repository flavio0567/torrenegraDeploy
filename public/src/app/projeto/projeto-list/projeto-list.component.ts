import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from '../projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent implements OnInit {
  usuario: any;
  projetos = [{
    codigo: "",
    descricao: "",
    _clienteId: "",
    nomeFantasiaCliente: "",
    pedido: ""
  }];
  cliente = {
    _id: "",
    cnpj: 0,
    razaoSocial: "",
    nomeFantasia: "",
    endereco: "",
    valorHH: 0,
    prazoPgto: 0,
    contatos:  [{ 
      nome: "",
      email: "",
      telefone: 0,
      skype: ""}]
  }

  constructor(
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    public dialog: MatDialog
  ) { } 

  ngOnInit() {
    this.obterListaProjeto();
  }

  obterListaProjeto() {
    console.log('ProjetoListComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        console.log('projetos in List:', this.projetos);
        for (var i = 0; i < this.projetos.length; i++) {
          this.obterCliente(this.projetos[i]._clienteId, i);
        }
      },
      (err) => { },
        () => { }
    )
  }

  obterCliente(id, i) {
    console.log('ProjetoListComponent > obterCliente()')
    const clienteObservable = this._clienteService.obterClienteById(id);
    clienteObservable.subscribe(
      (cliente) => { 
        this.cliente = cliente.json();
        this.projetos[i].nomeFantasiaCliente = this.cliente.nomeFantasia;
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
        this.obterListaProjeto();
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

  encerrarProjeto(id) {
    console.log('Dialog >  encerrarProjeto(id) ', id)
    const dialogObservable = this._projetoService.encerrarProjeto(id);
    dialogObservable.subscribe(
      (res) => { 
        console.log('The dialog called encerrar projeto!', res);
        this.dialogRef.close();
      },
      (err) => { },
        () => { }
    )
    // console.log('The dialog called delete projeto!');
    // this.dialogRef.close();
  }

}

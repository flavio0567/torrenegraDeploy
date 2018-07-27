import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from '../projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface PedidoData {
  codigo: string;
  descricao: string;
  cliente: string;
  pedido: string;
  acao: string;
}

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.scss']
})
export class ProjetoListComponent implements OnInit {


  displayedColumns: string[] = ['codigo', 'descricao', 'cliente', 'pedido', 'acao1', 'acao2'];
  dataSource: MatTableDataSource<PedidoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  usuarioLogado = {
    email: '',
    admin: ''
  }
  projetos = [{
    _id: "",
    codigo: "",
    descricao: "",
    _clienteId: "",
    cliente: "",
    pedido: "",
    acao: "",
    encerrado: ""
  }];
  cliente = {
    _id: "",
    cnpj: 0,
    razaoSocial: "",
    nomeFantasia: "",
    endereco: "",
    valorHH: "",
    prazoPgto: "",
    contatos:  [{ 
      nome: "",
      email: "",
      telefone: 0,
      skype: ""}]
  }


  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    public dialog: MatDialog
  ) { } 

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoListComponent > usuariologado ',this.usuarioLogado.email)
    this.obterListaProjeto();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  obterListaProjeto() {
    console.log('ProjetoListComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        for (var i = 0; i < this.projetos.length; i++) {
          this.obterCliente(this.projetos[i]._clienteId, i);
        }
        this.dataSource = new MatTableDataSource(this.projetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
        this.projetos[i].cliente = this.cliente.nomeFantasia;
      },
      (err) => { },
        () => { }
    )
  }

  openDialog(projeto): void {
    console.log('ProjetoListComponent > openDialog(projeto) ')
    let dialogRef = this.dialog.open(DialogProjeto, {
      width: '450px',
      data: {
        id: projeto._id,
        codigo: projeto.codigo,
        descricao: projeto.descricao,
        usuario: this.usuarioLogado
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
  templateUrl: '../popup/popup.component.html'
})

export class DialogProjeto {

  constructor(private _projetoService: ProjetoService, 
    private _router: Router, 
    public dialogRef: MatDialogRef<DialogProjeto>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  encerrarProjeto(id) {
    console.log('DialogProjeto >  encerrarProjeto(id) ', id)
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

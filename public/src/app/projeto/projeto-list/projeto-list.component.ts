import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '../../auth.service';

export interface ProjetoData {
  codigo: string;
  descricao: string;
  cliente: string;
  pedido: string;
  situacao: number;
  sitDesc: string;
  acao: string;
}

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.scss']
})
export class ProjetoListComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'cliente', 'pedido', 'situacao', 'acao1', 'acao2'];
  dataSource: MatTableDataSource<ProjetoData>;

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
    situacao: 0,
    sitDesc: "",
    acao: "" 
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
    // private _auth: AuthService,
    public dialog: MatDialog
  ) { } 

  ngOnInit() {
    console.log('ProjetoListComponent > ngOnInit() ');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
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
          this.obterSituacao(this.projetos[i].situacao, i);
        }
        this.dataSource = new MatTableDataSource(this.projetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo lista projetos ', err);
        throw err;
      }
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
      (err) => {
        console.log('Algum erro ocorreu obtendo cliente ', err);
        throw err;
      }
    )
  }

  obterSituacao(situacao, i) {
    console.log('ProjetoListComponent > obterSituacao()');
    switch (this.projetos[i].situacao) {
      case 0:
        this.projetos[i].sitDesc = 'aberto';
        break;
      case 1:
        this.projetos[i].sitDesc = 'liberado';
        break;
      case 2:
        this.projetos[i].sitDesc = 'finalizado';
        break;
      case 3:
        this.projetos[i].sitDesc = 'faturado';
        break;
      case 4:
        this.projetos[i].sitDesc = 'encerrado';
        break;
      case 5:
        this.projetos[i].sitDesc = 'cancelado';
        break;
      default:
        this.projetos[i].sitDesc = '';
    }
  }


  openDialog(projeto): void {
    console.log('ProjetoListComponent > openDialog(projeto) ')
    let dialogRef = this.dialog.open(DialogProjeto, {
      width: '450px',
      data: {
        id: projeto._id,
        codigo: projeto.codigo,
        descricao: projeto.descricao,
        usuario: this.usuarioLogado,
        situacao: projeto.sitDesc
      }
    });

    dialogRef.afterClosed().subscribe(res => {
        console.log('The dialog was closed');
        this.obterListaProjeto();
    });
  }

}

export interface Situacao {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: '../popup/popup.component.html',
  styleUrls: ['../popup/popup.component.scss']
})

export class DialogProjeto {
  selectedValue: number;
  situacoes: Situacao[] = [
    {value: 1, viewValue: '1-liberado'},
    {value: 2, viewValue: '2-finalizado'},
    {value: 3, viewValue: '3-faturado'},
    {value: 4, viewValue: '4-encerrado'},
    {value: 5, viewValue: '5-cancelado'}
  ];

  constructor(private _projetoService: ProjetoService, 
    public dialogRef: MatDialogRef<DialogProjeto>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  mudarSituacao(id) {
    console.log('DialogProjeto >  mudarSituacao(id) ')
    const dialogObservable = this._projetoService.mudarSituacao(id, this.selectedValue);
    dialogObservable.subscribe(
      (res) => { 
        console.log('The dialog called encerrar projeto!', res);
        this.dialogRef.close();
      },
      (err) => {
        console.log('Algum erro ocorreu mudando situacao projeto ', err);
        throw err;
      }
    )
  }

}

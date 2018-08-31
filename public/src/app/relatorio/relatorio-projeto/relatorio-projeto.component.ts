import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface ProjetoData {
  codigo: string;
  descricao: string;
  cliente: string;
  situacao: number;
  sitDesc: string;
  pedido: string;
  valorPedido: string;
}

@Component({
  selector: 'relatorio-projeto',
  templateUrl: './relatorio-projeto.component.html',
  styleUrls: ['./relatorio-projeto.component.scss']
})
export class RelatorioProjetoComponent implements OnInit {

  estados = new FormControl();
  estado = new Array();
  estadoList: string[] = ['0 aberto', '1 liberado', '2 finalizado', '3 faturado', '4 encerrado',  '5 cancelado'];


  displayedColumns: string[] = ['codigo', 'descricao', 'cliente', 'situacao', 'pedido',  'valorPedido'];
  dataSource: MatTableDataSource<ProjetoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  usuarioLogado = {
    email: '',
    admin: ''
  }

  projetos: any[];

  cliente = {
    _id: "",
    nomeFantasia: ""
  }

  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
  ) { } 

  ngOnInit() {
    console.log('RelatorioProjetoComponent > ngOnInit()');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obterProjetos() {
    console.log('RelatorioProjetoComponent > obterProjetos()' );
    this.estado = new Array();
    for (var i=0; i<this.estados.value.length; i++) {
      var str = this.estados.value[i].toString().split(" ");
      this.estado.push(parseInt(str[0]));
    }
    const projetoObservable = this._projetoService.obterProjetos(this.estado);
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
        console.log('Algum erro ocorreu obtendo lsita de projetos ', err);
        throw err;
      }
    )
  }

  obterCliente(id, i) {
    console.log('RelatorioProjetoComponent > obterCliente()')
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


}


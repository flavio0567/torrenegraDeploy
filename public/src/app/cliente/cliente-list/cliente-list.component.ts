import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Cliente } from '../cliente-novo/cliente';

export interface ClienteData {
  _id: string;
  nomeFantasia: string;
  dvalorHH: string;
  prazoPgto: string;
  nome: string,
  email: string,
  fone: number
}

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  
  clientes: any;
  cliente: any = new Cliente();

  displayedColumns: string[] = ['nomeFantasia', 'valorHH', 'nome', 'email', 'fone', 'acao1', 'acao2' ];
  dataSource: MatTableDataSource<ClienteData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.obterClientes();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obterClientes() {
    console.log('ClienteListComponent > obterClienteList()')
    const clienteObservable = this._clienteService.obterTodos();
    clienteObservable.subscribe(
      (clientes) => { 
        console.log('clientes in obterClientes list:', clientes.json());
        this.clientes = clientes.json();
        for(var i=0;i<this.clientes.length;i++){
          if (this.clientes[i].contatos[0]) {
            this.clientes[i].nome = this.clientes[i].contatos[0].nome;
            this.clientes[i].email = this.clientes[i].contatos[0].email;
            this.clientes[i].fone = this.clientes[i].contatos[0].fone;
            this.clientes[i].skype = this.clientes[i].contatos[0].skype;
          }
        }
        this.dataSource = new MatTableDataSource(this.clientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => { },
        () => { }
    )
  }


}

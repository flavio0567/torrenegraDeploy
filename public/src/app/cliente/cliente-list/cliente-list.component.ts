import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: any;

  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.obterClientes();
  }

  obterClientes() {
    console.log('ClienteListComponent > obterClienteList()')
    const clienteObservable = this._clienteService.obterTodos();
    clienteObservable.subscribe(
      (clientes) => { 
        this.clientes = clientes.json();
      },
      (err) => { },
        () => { }
    )
  }


}

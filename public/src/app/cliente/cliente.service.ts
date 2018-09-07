import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable()
export class ClienteService {
  clientes: any;

  constructor(private _http: Http) { }

  obterTodos() {
    console.log('ClienteService > obterTodos()');
    return this._http.get('/clientes');
  }

  criarCliente(cliente) {
    console.log('ClienteService > criarCliente(cliente, endereco)' );
    return this._http.post('cliente/novo', cliente);
  }

  obterClienteById(id) {
    console.log('ClienteService > obterClienteById' );
    return this._http.get('/cliente/' + id );
  }

  editarCliente(id, cliente) {
    console.log('ClienteService > editarCliente(cliente)' );
    return this._http.put('cliente/edit/' + id, cliente);
  }

  excluirCliente(id) {
    console.log('ClienteService > excluirCliente(id)' );
    return this._http.delete('cliente/excluir/' + id);
  }


  
}


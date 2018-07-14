import { Injectable } from '@angular/core';
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
    console.log('ClienteService > criarCliente(cliente)', cliente);
    return this._http.post('cliente/novo', cliente);
  }

  // editarCliente(cliente) {
  //   console.log('ProjetoService > editarProjeto(projeto)', projeto);
  //   return this._http.put('projeto/edit/' + projeto['_id'], projeto);
  // }

  // encerrarProjeto(id) {
  //   this._http.put('/projeto/encerrar,' + id, this.projeto).subscribe(
  //     (res) => {
  //       console.log('SUCESSO no encerramento do projeto: ', res.json());
  //       this.projeto(res.json());
  //     },
  //     (err) => {
  //       console.log('ERRO no encerramento do projeto: ', err);
  //     }
  //   );
  // }

  // obterProjetoById(id) {
  //   console.log('ProjetoService > obterProjetoById', id);
  //   return this._http.get('/projeto/' + id );
  // }
  
  // getOne(recipie, id) {
  //   this._http.get('/recipie').subscribe(
  //   id => id.json());
  //   console.log('services-recipie in getOne:', id)
  // }



  // updateRecipie(ingredients, callback) {
  //   this._http.put('/recipie/update', ingredients).subscribe(
  //     (res) => {
  //       console.log('SUCCESS updating recipie: ', res.json());
  //       callback(res.json());
  //     },
  //     (err) => {
  //       console.log('ERROR updating recipie: ', err);
  //     }
  //   );
  // }

  // likeRecipie(id, callback) {
  //   this._http.put('/recipie/like/' + id, this.recipie ).subscribe(
  //     (res) => {
  //       console.log('SUCCESS Like recipie: ', res.json());
  //       res.json();
  //     },
  //     (err) => {
  //       console.log('ERROR like recipie: ', err);
  //     }
  //   );
  // }



  
}


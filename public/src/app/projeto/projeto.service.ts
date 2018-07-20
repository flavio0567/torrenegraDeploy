import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjetoService {
  projeto: any;
  projetos: any;
  apontamentos: any;

  constructor(private _http: Http) { }

  obterApontamentos() {
    console.log('ProjetoService > obterApontamentos()');
    return this._http.get('/apontamentos');

  }

  obterTodos() {
    console.log('ProjetoService > obterTodos()');
    return this._http.get('/projetos');
  }

  criarProjeto(projeto) {
    console.log('ProjetoService > criarProjeto(projeto)', projeto);
    return this._http.post('projeto/novo', projeto);
  }

  editarProjeto(projeto) {
    console.log('ProjetoService > editarProjeto(projeto)', projeto);
    return this._http.put('projeto/edit/' + projeto['_id'], projeto);
  }

  apontamentoNovo(id, apontamento) {
    console.log('ProjetoService > apontamentoNovo(id, apontamento)', id, apontamento);
    return this._http.put('apontamento/novo/' + id, apontamento);
  }

  encerrarProjeto(id) {
    console.log('ProjetoService > encerrarProjeto(id)', id);
    return this._http.put('/projeto/encerrar/' + id, this.projeto);
  }

  obterProjetoById(id) {
    console.log('ProjetoService > obterProjetoById', id);
    return this._http.get('/projeto/' + id );
  }
  
  
}

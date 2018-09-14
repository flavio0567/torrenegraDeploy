import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjetoService {
  projeto: any;
  projetos: any;

  constructor(private _http: Http) { }

  obterApontamentosHoraPorUsuario(usuario) {
    console.log('ProjetoService > obterApontamentosHoraPorUsuario(usuario)' );
    return this._http.get('/apontamentos/hora/usuario/', {params: { usuario: usuario}});
  }

  obterApontamento(apto) {
    console.log('ProjetoService > obterApontamento(apto)' );
    return this._http.post('/obter/apontamento',  apto);
  }

  obterApontamentosDespesa(apto) {
    console.log('ProjetoService > obterApontamentosDespesa(apto)' );
    return this._http.post('/apontamentos/despesa/', apto);

  }

  obterTodos() {
    console.log('ProjetoService > obterTodos()');
    return this._http.get('/projetos');
  }
  
  obterProjetos(estados) {
    console.log('ProjetoService > obterProjetos(estados)');
    return this._http.post('/projetos/estado', estados);
  }

  criarProjeto(projeto) {
    console.log('ProjetoService > criarProjeto(projeto)');
    return this._http.post('projeto/novo', projeto);
  }

  editarProjeto(projeto) {
    console.log('ProjetoService > editarProjeto(projeto)' );
    return this._http.put('projeto/edit/' + projeto['_id'], projeto);
  }

  apontamentoNovo(id, apontamento) {
    console.log('ProjetoService > apontamentoNovo(id, apontamento)' );
    return this._http.put('apontamento/novo/' + id, apontamento);
  }

  obterTotalApontamentos(id) {
    console.log('ProjetoService > obterTotalApontamentos' );
    return this._http.get('apontamento/total/' + id);
  }


  mudarSituacao(id, situacao) {
    console.log('ProjetoService > mudarSituacao(id, situacao)' );
    return this._http.put('/projeto/mudarsituacao/' + id, situacao);
  }

  obterProjetoById(id) {
    console.log('ProjetoService > obterProjetoById' );
    return this._http.get('/projeto/' + id );
  }

  encerrarApontamento(projeto) {
    console.log('ProjetoService > encerrarApontamento(projeto)' );
    return this._http.put('/apontamento/encerrar/' + projeto['id'], projeto);
  }
  
}

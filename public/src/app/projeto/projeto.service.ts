import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjetoService {
  projeto: any;
  projetos: any;

  constructor(private _http: Http) { }

  obterApontamentosHoraPorUsuario(usuario) {
    console.log('ProjetoService > obterApontamentosHoraPorUsuario(usuario)', usuario);
    return this._http.get('/apontamentos/hora/usuario/', {params: { usuario: usuario}});
  }

  obterApontaHora(apto) {
    console.log('ProjetoService > obterApontaHora(apto)', apto);
    return this._http.get('/apontamentos/hora/',  {params: { _projetoId: apto._projetoId, email: apto.email, data1: apto.data1, data2: apto.data2}});
  }

  obterApontamentosDespesa(usuario) {
    console.log('ProjetoService > obterApontamentosDespesa(usuario)', usuario);
    return this._http.get('/apontamentos/despesa/', {params: { usuario: usuario}});

  }

  obterTodos() {
    console.log('ProjetoService > obterTodos()');
    return this._http.get('/projetos');
  }

  criarProjeto(projeto) {
    console.log('ProjetoService > criarProjeto(projeto,cliente)', projeto.codigo, projeto.descricao, projeto._clienteId );
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

  obterTotalApontamentos(id) {
    console.log('ProjetoService > obterTotalApontamentos', id);
    return this._http.get('apontamento/total/' + id);
  }


  mudarSituacao(id, situacao) {
    console.log('ProjetoService > mudarSituacao(id, situacao)', id, situacao);
    return this._http.put('/projeto/mudarsituacao/' + id, situacao);
  }

  obterProjetoById(id) {
    console.log('ProjetoService > obterProjetoById', id);
    return this._http.get('/projeto/' + id );
  }

  encerrarApontamento(projeto) {
    console.log('ProjetoService > encerrarApontamento(projeto)', projeto);
    return this._http.put('/apontamento/encerrar/' + projeto['id'], projeto);
  }
  
}

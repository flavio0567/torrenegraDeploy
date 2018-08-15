import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface Transaction {
  // codigo: string;
  // descricao: string;
  cliente: string;
  data: string;
  custohh: number;
  inicio: string;
  fim: string;
  custo: number;
}

export function getProjeto(projetos, id) {
  for (var i = 0 ; i < projetos.length; i++){
    if (projetos[i]._id === id) {
      return projetos[i];
    }
  }
}

@Component({
  selector: 'relatorio-apontamento-horas-usuario',
  templateUrl: './relatorio-apontamento-horas-usuario.component.html',
  styleUrls: ['./relatorio-apontamento-horas-usuario.component.scss']
})
export class RelatorioApontamentoHorasUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['cliente', 'data', 'custohh', 'inicio', 'fim', 'custo'];
  transactions: Transaction[];

  options: FormGroup;
  selected: boolean = false;
  projetos: any[];
  projeto: any;
  apontamentos: any;
  lista: [{
    cliente: string,
    data: string,
    custohh: number,
    inicio: string,
    fim: string,
    custo: number
  }]
  usuarioLogado = {
    email: '',
    admin: ''
  }
  cliente = {
    _id: "",
    nomeFantasia: ""
  }
  
  constructor(
    private fb: FormBuilder,
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService
  ) { 
    this.options = fb.group({
      _id: [null]
    });
  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoListComponent > usuariologado ',this.usuarioLogado)
    this.obterListaProjeto();
  }

  obterListaProjeto() {
    console.log('ProjetoListComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
        // console.log('ProjetoListComponent > obterListaProjeto()', this.projetos);
        // for (var i = 0; i < this.projetos.length; i++) {
        //   this.obterCliente(this.projetos[i]['_clienteId'], i);
        //   this.obterApontamentos(this.projetos[i]['_id'], i);
        //   console.log('p r o j e t o s >  >  > ', this.projetos);
        // }
      },
      (err) => { },
        () => { }
    )
  }

  obterCliente(id) {
    console.log('ProjetoListComponent > obterCliente()', id);
    this._clienteService.obterClienteById(id)
    .subscribe(
      (cliente) => { 
        this.cliente = cliente.json();
      },
      (err) => { },
        () => { }
    )
  }

  obterApontamentos() {
    console.log('ProjetoListComponent > obterApontamentos',  this.options.controls._id.value);
    this.projeto = getProjeto(this.projetos, this.options.controls._id.value);
    console.log('    projeto    : >> >>> >>> ', this.projeto);
    this.obterCliente(this.projeto['_clienteId']);
    // this.projeto['cliente'] = this.cliente.nomeFantasia;

    this._projetoService.obterApontaHora(this.options.controls._id.value)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        console.log('apontamentos >  >  > ', this.apontamentos);
        for (let a of this.apontamentos) {
          if(a.tipo == 'hora') {
            let fim = new Date(a.hora.fim).getTime();
            let inicio = new Date(a.hora.inicio).getTime();
            let diff = Math.ceil( fim - inicio )/(1000 * 60 * 60)
            a.cliente = this.cliente.nomeFantasia;
            a.custo = a.valorHH * diff;
          } 
        }
        this.transactions = this.apontamentos;
        this.selected = true;
      },
      (err) => { },
        () => { }
    )
  }

  obterCustoTotal() {
    console.log('ProjetoListComponent > obterCustoTotal()', this.projetos);
    return this.projetos.map(t => t.custo).reduce((acc, value) => acc + value, 0);
  }


}

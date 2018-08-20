import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../../projeto/projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Datepicker } from './datepicker-popup';
// import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';

export interface Transaction {
  codigo: string;
  cliente: string;
  inicio: string;
  fim: string;
  totalhh: number;
}

export function getProjeto(projetos, id) {
  for (var i = 0 ; i < projetos.length; i++){
    if (projetos[i]._id === id) {
      return projetos[i];
    }
  }
}

export function DataHora(x, y) {
  console.log('x , y : ', x, y)
  let diff;
  let hora;
  let minutes;

  x = new Date(x);
  y = new Date(y);
  
  diff=Math.abs(y.getTime()- x.getTime())/3600000;
  
  if (isNaN(diff)){ return {dia: 0, hora: 0, minuto: 0}; }
  
  hora = parseInt(diff);   
  
  minutes = ((diff)%1/100*60)*100;
  minutes = parseInt(minutes); 
  if (minutes<10) {    
    minutes = "0" + minutes;
  } else if (minutes>60) {
    let h = minutes / 60;
    minutes = ((h)%1/100*60)*100;
    h = Math.trunc(h);
    hora += h;
  } else {
    console.log('minutes:', minutes);
  }

  return {hora: hora, minuto: minutes };
}



@Component({
  selector: 'relatorio-apontamento-horas-usuario',
  templateUrl: './relatorio-apontamento-horas-usuario.component.html',
  styleUrls: ['./relatorio-apontamento-horas-usuario.component.scss']
})
export class RelatorioApontamentoHorasUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'cliente', 'inicio', 'fim', 'totalhh'];
  transactions: Transaction[];

  options: FormGroup;
  selected: boolean = false;
  projetos: any[];
  usuarios: any[];
  projeto: any;
  apontamentos: any;
  lista: [{
    codigo: string,
    cliente: string,
    inicio: string,
    fim: string,
    totalhh: number
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
      _projetoId: [null],
      email: [null, [ Validators.required ]],
      data1: new Date(),
      data2: new Date()
    });
  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoListComponent > usuariologado ',this.usuarioLogado)
    this.obterListaUsuario();
    this.obterListaProjeto();
  }

  get email() {
    return this.options.get('email');
  }

  obterListaUsuario() {
    console.log('ProjetoListComponent > obterListaUsuario()')
    this._usuarioService.obterListaUsuario()
    .subscribe(
      (usuarios) => { 
        this.usuarios = usuarios.json();
      },
      (err) => { },
        () => { }
    )
  }

  obterListaProjeto() {
    console.log('ProjetoListComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => { },
        () => { }
    )
  }

  obterApontamentos() {
    console.log('ProjetoListComponent > obterApontamentos',  this.options.controls._projetoId.value, this.options.controls.data1.value, this.options.controls.data2.value);
    this._projetoService.obterApontaHora(this.options.value)
    .subscribe(
      (apontamentos) => { 
        this.apontamentos = apontamentos.json();
        for (let a of this.apontamentos) {
          let data = DataHora(a.hora.inicio, a.hora.fim);
          a.totalhh = data.hora + ':' + data.minuto;
          this.projeto = getProjeto(this.projetos, a._projeto);
          a.codigo = this.projeto.codigo;
          console.log('ProjetoListComponent > obterCliente(id)', this.projeto._clienteId );
          this._clienteService.obterClienteById(this.projeto._clienteId)
          .subscribe(
            (cliente) => { 
              this.cliente = cliente.json();
              a.cliente = this.cliente.nomeFantasia
            },
            (err) => { },
              () => { }
          )
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

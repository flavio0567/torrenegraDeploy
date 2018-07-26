import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../projeto.service';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-projeto-edit',
  templateUrl: './projeto-edit.component.html',
  styleUrls: ['./projeto-edit.component.css']
})
export class ProjetoEditComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
  errors: any;
  projeto = {
    codigo: "",
    descricao: "",
    _clienteId:  "",
    nomeFantasiaCliente: "",
    pedido:  "",
    horasPLC:  0,
    horasIHM:  0,
    valorTerceiros:  0,
    valorMateriais:  0,
    valorViagens:  0
  };
  clientes: any;
  cliente = {
    _id: "",
    cnpj: 0,
    razaoSocial: "",
    nomeFantasia: "",
    endereco: "",
    valorHH: 0,
    prazoPgto: 0,
    contatos:  [{ 
      nome: "",
      email: "",
      telefone: 0,
      skype: ""}]
  }
  clienteSelecionado: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoEditComponent > usuario: ', this.usuarioLogado.email);
    this.obterProjeto(this._route.snapshot.params['id']);
  }

  obterProjeto(id){
    console.log('ProjetoEditComponent > obterProjeto'); 
      const observable = this._projetoService.obterProjetoById(id);
      observable.subscribe(
        (response) => {
          this.projeto = response.json();
          this.obterClienteNomeFantasia(this.projeto._clienteId);
          this.obterClientes();
        },
        (err) => { },
          () => { }
      )
  }

  obterClienteNomeFantasia(id) {
    console.log('ProjetoEditComponent > obterCliente()')
    const clienteObservable = this._clienteService.obterClienteById(id);
    clienteObservable.subscribe(
      (cliente) => { 
        this.cliente = cliente.json();
        this.projeto.nomeFantasiaCliente = this.cliente.nomeFantasia;
        this.clienteSelecionado = this.cliente._id;
      },
      (err) => { },
        () => { }
    )
  }

  obterClientes() {
    console.log('ProjetoEditComponent  > obterClienteList()')
    const clienteObservable = this._clienteService.obterTodos();
    clienteObservable.subscribe(
      (clientes) => { 
        // console.log('clientes in obterClientes ProjetoEditComponent:', clientes.json());
        this.clientes = clientes.json();
      },
      (err) => { },
        () => { }
    )
  }

  editarProjeto() {
      console.log('ProjetoEditComponent > editarProjeto', this.projeto);
      this.projeto._clienteId = this.clienteSelecionado; 
      this._projetoService.editarProjeto(this.projeto)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu editando projeto ', this.errors);
          this._router.navigate(['/projeto/edit/', this.projeto['_id']]);
        } else {
          this._router.navigate(['/projetos']);
        }
      },
      err => {
        throw err;
      }
    );
  }


}

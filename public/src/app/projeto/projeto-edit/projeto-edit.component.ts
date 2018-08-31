import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../projeto.service';
import { ClienteService } from '../../cliente/cliente.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-projeto-edit',
  templateUrl: './projeto-edit.component.html',
  styleUrls: ['./projeto-edit.component.scss']
})
export class ProjetoEditComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
  errors: any;
  projeto: any;
  projetoForm: FormGroup;

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
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
  }

  ngOnInit() {
    console.log('ProjetoEditComponent > ngOnInit() ' );
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterProjeto(this._route.snapshot.params['id']);
  }

  obterProjeto(id){
    console.log('ProjetoEditComponent > obterProjeto'); 
      const observable = this._projetoService.obterProjetoById(id);
      observable.subscribe(
        (response) => {
          this.projeto = response.json();  
          this.projetoForm = this._formBuilder.group({
            _id: [this.projeto._id],
            codigo: [this.projeto.codigo],
            descricao: [this.projeto.descricao, [Validators.required]],
            _clienteId: [this.projeto._clienteId, [Validators.required]],
            pedido: [this.projeto.pedido, [Validators.required]],
            valorPedido: [this.projeto.valorPedido || 0, [Validators.required]],
            horasPLC: [this.projeto.horasPLC, [Validators.required]],
            horasIHM: [this.projeto.horasIHM, [Validators.required]],
            valorTerceiros: [this.projeto.valorTerceiros || 0, [Validators.required]],
            valorMateriais: [this.projeto.valorMateriais || 0, [Validators.required]],
            valorViagens: [this.projeto.valorViagens || 0, [Validators.required]]
          })
          this.projeto.nomeFantasiaCliente = this.cliente.nomeFantasia;
          this.clienteSelecionado = this.cliente._id;
          this.obterClienteNomeFantasia(this.projeto._clienteId);
          this.obterClientes();
        },
        (err) => {
          console.log('Algum erro ocorreu obtendo projeto ', err);
          throw err;
        }
      )
  }

  obterClienteNomeFantasia(id) {
    console.log('ProjetoEditComponent > obterClienteNomeFantasia()')
    const clienteObservable = this._clienteService.obterClienteById(id);
    clienteObservable.subscribe(
      (cliente) => { 
        this.cliente = cliente.json();   
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo cliente ', err);
        throw err;
      }
    )
  }

  obterClientes() {
    console.log('ProjetoEditComponent  > obterClientes()')
    const clienteObservable = this._clienteService.obterTodos();
    clienteObservable.subscribe(
      (clientes) => { 
        this.clientes = clientes.json();
      },
      (err) => {
        console.log('Algum erro ocorreu obtendo cliente ', err);
        throw err;
      }
    )
  }

  editarProjeto(projetoForm: NgForm) {
      console.log('ProjetoEditComponent > editarProjeto');
      this.projeto._clienteId = this.clienteSelecionado; 
      this._projetoService.editarProjeto(projetoForm.value)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu editando projeto ', this.errors);
          this._router.navigate(['/projeto/edit/', this.projeto['_id']]);
        } else {
          this._router.navigate(['/projetos']);
        }
      },
      (err) => {
        console.log('Algum erro ocorreu editando projeto ', err);
        throw err;
      }
    );
  }
  
  cancel() {
    this._router.navigate(['/projetos']);
  }

}

import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

  usuarioLogado = {
    email: '',
    admin: ''
  }  
  errors: any;
  cliente: any;

  clienteForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log(' ClienteEditComponent > ', this.usuarioLogado.email);
    this.obterCliente(this._route.snapshot.params['id']);
    }

  obterCliente(id) {
    console.log('ClienteEditComponent > obterCliente'); 
      const observable = this._clienteService.obterClienteById(id);
      observable.subscribe(
        (response) => {
          this.cliente = response.json();
          console.log('in ClienteEditComponent >>>>:', this.cliente);
          this.newForm();
          // this.clienteForm = this.cliente;
        },
        (err) => { },
          () => { }
      )
  }

  newForm() {
    this.clienteForm = this.fb.group({
      cnpj: [this.cliente.cnpj, [ Validators.required, Validators.minLength(11) ]],
      razaoSocial: [this.cliente.razaoSocial, [ Validators.required ]],
      nomeFantasia: [this.cliente.nomeFantasia, [ Validators.required ]],
      endereco: [this.cliente.endereco, [ Validators.required ]],
      valorHH: this.cliente.valorHH,
      prazoPgto: this.cliente.prazoPgto,
      contatos: this.fb.array([this.cliente.contatos])
    })
  }

  get cnpj() {
    return this.clienteForm.get('cnpj');
  }

  get razaoSocial() {
    return this.clienteForm.get('razaoSocial');
  }

  get nomeFantasia() {
    return this.clienteForm.get('nomeFantasia');
  }

  get endereco() {
    return this.clienteForm.get('endereco');
  }

  get contatoForms() {
    return this.clienteForm.get('contatos') as FormArray
  }

  addContato() {
    const contato = this.fb.group({
      nome: [],
      email: [],
      fone: [],
      skype: []
    })

    this.contatoForms.push(contato);
  }

  deleteContato(i) {
    this.contatoForms.removeAt(i);
  }

  editarCliente(clienteForm: NgForm) {
    console.log('ClienteEditarComponent > editarCliente(clienteForm)', clienteForm); 
    this._clienteService.editarCliente(this.cliente['_id'], clienteForm.value)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu editando cliente ', this.errors);
          this._router.navigate(['/cliente/edit/' + this.cliente['_id'] ]);
        } else {
          this._router.navigate(['/clientes']);
        }
      },
      err => {
        throw err;
      }
    );
    // this.createForm(this.contatosCliente);
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

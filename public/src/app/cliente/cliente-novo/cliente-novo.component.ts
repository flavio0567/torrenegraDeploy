import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.scss']
})
export class ClienteNovoComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }  
  errors: any;

  clienteForm: FormGroup;
  endereco: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _router: Router
  ) {}

  ngOnInit() {
    console.log(' ClienteNovoComponent > ngOnInit() ');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.clienteForm = this._formBuilder.group({
      cnpj: [null, [ Validators.required, Validators.minLength(11) ]],
      razaoSocial: [null, [ Validators.required ]],
      nomeFantasia: [null, [ Validators.required ]],
      valorHH: [],
      prazoPgto: [],
      contatos: this._formBuilder.array([])
    })
    this.endereco = this._formBuilder.group({ 
      logradouro: [null, [ Validators.required ]],
      complemento: [],
      cidade: [null, [ Validators.required ]],
      estado: [null, [ Validators.required ]],
      cep: [null, [ Validators.required ]]
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

  get logradouro() {
    return this.clienteForm.get('logradouro');
  }

  get cidade() {
    return this.clienteForm.get('cidade');
  }

  get estado() {
    return this.clienteForm.get('estado');
  }

  get cep() {
    return this.clienteForm.get('cep');
  }

  get contatoForms() {
    return this.clienteForm.get('contatos') as FormArray
  }

  addContato() {
    const contato = this._formBuilder.group({
      nome: [],
      email: ['', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      fone: [],
      skype: []
    })

    this.contatoForms.push(contato);
  }

  deleteContato(i) {
    this.contatoForms.removeAt(i);
  }

  criarCliente(clienteForm, endereco) {
    console.log('ClienteNovoComponent > criarCliente(form)'); 
    let cliente = clienteForm.value;
    cliente.endereco = endereco.value;
    this._clienteService.criarCliente(cliente)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu salvando cliente ', this.errors);
          this._router.navigate(['/cliente/novo']);
        } else {
          this._router.navigate(['/clientes']);
        }
      },
      (err) => {
        console.log('Algum erro ocorreu criando cliente ', err);
        throw err;
      }
    );
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, NgForm, FormControl } from '@angular/forms';
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
  
  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log(' ClienteNovoComponent > ', this.usuarioLogado.email);
    this.clienteForm = this.fb.group({
      cnpj: ['', [ Validators.required, Validators.minLength(11) ]],
      razaoSocial: ['', [ Validators.required ]],
      nomeFantasia: ['', [ Validators.required ]],
      endereco: ['', [ Validators.required ]],
      valorHH: '',
      prazoPgto: '',
      contatos: this.fb.array([])
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
      email: ['', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      fone: [],
      skype: []
    })

    this.contatoForms.push(contato);
  }

  deleteContato(i) {
    this.contatoForms.removeAt(i);
  }

  criarCliente(clienteForm: NgForm) {
    console.log('ClienteNovoComponent > criarCliente(clienteForm: NgForm)', clienteForm); 
    this._clienteService.criarCliente(clienteForm.value)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu salvando cliente ', this.errors);
          this._router.navigate(['/cliente/novo']);
        } else {
          this._router.navigate(['/clientes']);
        }
      },
      err => {
        throw err;
      }
    );
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

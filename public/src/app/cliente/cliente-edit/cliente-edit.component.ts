import { Component, OnInit } from '@angular/core';
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
  endereco: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    console.log(' ClienteEditComponent > result.message');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterCliente(this._route.snapshot.params['id']);
    }

  obterCliente(id) {
    console.log('ClienteEditComponent > obterCliente'); 
      const observable = this._clienteService.obterClienteById(id);
      observable.subscribe(
        (response) => {
          this.cliente = response.json();
          this.clienteForm = this._formBuilder.group({
            cnpj: [this.cliente.cnpj, [Validators.required]],
            razaoSocial: [this.cliente.razaoSocial, [Validators.required]],
            nomeFantasia: [this.cliente.nomeFantasia, [Validators.required]],
            valorHH: [this.cliente.valorHH],
            prazoPgto: [this.cliente.prazoPgto],
            contatos: [this._formBuilder.array([this.cliente.contatos])]
            })
          this.endereco = this._formBuilder.group({ 
              logradouro: [this.cliente.endereco.logradouro, [Validators.required]],
              complemento: [this.cliente.endereco.complemento],
              cidade: [this.cliente.endereco.cidade, [Validators.required]],
              estado: [this.cliente.endereco.estado, [Validators.required]],
              cep: [this.cliente.endereco.cep, [Validators.required]]
            })
            this.setContato();
        },
        (err) => { },
          () => { }
      )
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

  setContato() {
    let contatoForms = this.cliente.contatos.map(contato => this._formBuilder.group(contato));
    let contatoFormsArray = this._formBuilder.array(contatoForms);
    this.clienteForm.setControl('contatos', contatoFormsArray);
  }

  addContato() {
    const contato = this._formBuilder.group({
      nome: [''],
      email: ['', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      fone: [''],
      skype: ['']
    })
    this.contatoForms.push(contato);
  }

  deleteContato(i) {
    this.contatoForms.removeAt(i);
  }

  editarCliente(clienteForm: NgForm, endereco: NgForm) {
    console.log('ClienteEditComponent > editarCliente(form)'); 
    let cliente = clienteForm.value;
    cliente.endereco = endereco.value;
    this._clienteService.editarCliente(this.cliente['_id'], cliente)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu editando cliente ', this.errors);
          this._router.navigate(['/cliente/edit/' + this.cliente['_id'] ]);
        } else {
          this._router.navigate(['/clientes']);
        }
      },
      (err) => {
        console.log('Algum erro ocorreu editendo cliente ', err);
        throw err;
      }
    );
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Contato } from './cliente-model';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit, OnChanges {
  usuario: any;
  errors: any;
  cliente = {
    cnpj: 0,
    razaoSocial: "",
    nomeFantasia: "",
    endereco: "",
    contatos:  [{ 
      nome: "",
      email: "",
      telefone: 0,
      skype: ""}]
  }
  contato = new Contato;

  contatosArray = [];
  flContato: Boolean = false;
  clienteForm: FormGroup;

  products=[
    {
      'brand': "nome"
    },
    {
      'brand': "email"
    },
    {
      'brand': "telefone"
    },
    {
      'brand': "skype"
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _router: Router
  ) { 
    // this.contactForm = this.createFormGroup();
  }

  ngOnInit() {
    console.log('contato in ngOnInit:', this.contato);
    this.usuario = this._usuarioService.usuario;
    console.log(' ClienteNovoComponent > ', this.usuario);
    this.createForm(this.products);
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.clienteForm.reset({
      // cnpj: this.contato.nome,
      // contatos: this.cliente.contatos[1] || new Contato()
    });
    // this.setContatos(this.cliente.contatos);
  }

  createForm(products) {
    var arr = [];
    for (var i=0; i < products.length; i++ ) {
      arr.push(this.buildContato(products[i]));
    }
    return this.clienteForm = this.formBuilder.group({
      cnpj: ['', Validators.required ],
      razaoSocial: ['', Validators.required ],
      nomeFantasia: ['', Validators.required ],
      endereco: ['', Validators.required ],
      contatos: this.formBuilder.array(arr)
      })

  }

addContato() {
  console.log('controls value:', this.clienteForm.controls.contatos.value);
  this.flContato = true;
  this.contatosArray.push(this.clienteForm.controls.contatos.value);
  this.contato.nome = this.contatosArray[0][0].value;
  this.contato.email = this.contatosArray[0][1].value;
  this.contato.telefone = this.contatosArray[0][2].value;
  this.contato.skype = this.contatosArray[0][3].value;
  console.log('contatos antes setValue in addContato :', this.contatosArray[0][0].value );
  console.log('contato after cleaning in addContato :', this.contato);
}

  buildContato(product): FormGroup {
    return this.formBuilder.group({
      title: [product.brand],
      value: ['']
    });
  }

  criarCliente(clienteForm: NgForm) {
    if (!this.flContato) { this._router.navigate(['/cliente/novo']) };
    console.log('ClienteNovoComponent > novoProjeto(clienteForm)', clienteForm); 
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
    this.createForm(this.products);
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

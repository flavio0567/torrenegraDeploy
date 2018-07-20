import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
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
  // cliente = {
  //   cnpj: 0,
  //   razaoSocial: "",
  //   nomeFantasia: "",
  //   endereco: "",
  //   valorHH: 0,
  //   prazoPgto: 0,
  //   contatos:  [{ 
  //     nome: "",
  //     email: "",
  //     telefone: 0,
  //     skype: ""}]
  // }
  contato = new Contato;

  contatosArray = [];
  flContato: Boolean = false;
  clienteForm: FormGroup;
  index: any = 0;

  clienteContatos=[
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
    this.createForm(this.clienteContatos);
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

  createForm(clienteContatos) {
    var arr = [];
    for (var i=0; i < clienteContatos.length; i++ ) {
      arr.push(this.buildContato(clienteContatos[i]));
    }
    return this.clienteForm = this.formBuilder.group({
      cnpj: ['', Validators.required ],
      razaoSocial: ['', Validators.required ],
      nomeFantasia: ['', Validators.required ],
      endereco: ['', Validators.required ],
      valorHH: '',
      prazoPgto: '', 
      contatos: this.formBuilder.array(arr)
  })
  } 

  addContato() {
    console.log('ClienteNovoComponent > >>>>>>> addContato() ', this.clienteForm.controls.contatos.value);
    this.flContato = true;
    this.contatosArray.push(this.clienteForm.controls.contatos.value);
    this.contato.nome = this.contatosArray[this.index][0].value;
    this.contato.email = this.contatosArray[this.index][1].value;
    this.contato.telefone = this.contatosArray[this.index][2].value;
    this.contato.skype = this.contatosArray[this.index][3].value;
    console.log('contatos antes >>> contatosArray :', this.contatosArray );
    this.createContatos()
    this.index += 1;
  }

  createContatos() {
    console.log('ClienteNovoComponent >  createContatos() '); 
    var arr = [];
    for (var i=0; i < this.clienteContatos.length; i++ ) {
      arr.push(this.buildContato(this.clienteContatos[i]));
    }
    // return this.clienteForm = this.formBuilder.group({
    //   contatos: this.formBuilder.array(arr)
    //   })
  } 

  buildContato(clienteContatos): FormGroup {
    return this.formBuilder.group({
      title: [clienteContatos.brand],
      value: ['']
    });
  }

  criarCliente(clienteForm: NgForm) {
    console.log('ClienteNovoComponent > criarCliente(clienteForm: NgForm)', clienteForm.controls.contatos.value); 
    if (!this.flContato) { this._router.navigate(['/cliente/novo']) };
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
    this.createForm(this.clienteContatos);
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

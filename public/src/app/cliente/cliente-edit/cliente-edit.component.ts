import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario/usuario.service';
import { ClienteService } from '../cliente.service';
import { Contato } from '../cliente-novo/cliente-model';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  usuario: any;
  errors: any;
  cliente = {
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
  contato = new Contato;

  contatosArray = [];
  flContato: Boolean = false;
  clienteForm = new FormGroup({
      cnpj: new FormControl(),
      razaoSocial: new FormControl(),
      nomeFantasia: new FormControl(),
      endereco: new FormControl(),
      valorHH: new FormControl(),
      prazoPgto: new FormControl(),
      contatos: new FormControl()
  });

  contatosCliente=[
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
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    console.log('ProjetoEditComponent > usuario: ', this.usuario);
    this.obterCliente(this._route.snapshot.params['id']);
  }
  
  // ngOnChanges() {
  //   this.rebuildForm();
  // }

  // rebuildForm() {
  //   this.clienteForm.reset({
  //     // cnpj: this.contato.nome,
  //     // contatos: this.cliente.contatos[1] || new Contato()
  //   });
  //   // this.setContatos(this.cliente.contatos);
  // }

  createForm(contatosCliente) {
    var arr = [];
    for (var i=0; i < contatosCliente.length; i++ ) {
      arr.push(this.buildContato(contatosCliente[i]));
    }
    return this.clienteForm = this.formBuilder.group({
      cnpj: [this.cliente.cnpj, Validators.required ],
      razaoSocial: [this.cliente.razaoSocial, Validators.required ],
      nomeFantasia: [this.cliente.nomeFantasia, Validators.required ],
      endereco: [this.cliente.endereco, Validators.required ],
      valorHH: this.cliente.valorHH,
      prazoPgto: this.cliente.prazoPgto, 
      contatos: this.formBuilder.array(arr)
      })
  }

  obterCliente(id){
    console.log('ClienteEditComponent > obterCliente'); 
      const observable = this._clienteService.obterClienteById(id);
      observable.subscribe(
        (response) => {
          this.cliente = response.json();
          console.log('in ClienteEditComponent >>>>:', this.cliente);
          // this.clienteForm = this.cliente;
          this.createForm(this.contatosCliente);
        },
        (err) => { },
          () => { }
      )
  }

  buildContato(product): FormGroup {
    return this.formBuilder.group({
      title: [product.brand],
      value: ['']
    });
  }


  editarCliente(clienteForm: NgForm) {
    if (!this.flContato) { this._router.navigate(['/cliente/edit']) };
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
    this.createForm(this.contatosCliente);
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }


}

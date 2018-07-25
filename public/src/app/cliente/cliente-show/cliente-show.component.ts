import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder } from '@angular/forms';
import { Contato } from '../cliente-novo/cliente-model';
import { UsuarioService } from '../../usuario/usuario.service';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-show',
  templateUrl: './cliente-show.component.html',
  styleUrls: ['./cliente-show.component.css']
})
export class ClienteShowComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
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
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ClienteShowComponent > usuario ', this.usuarioLogado);
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
      cnpj: this.cliente.cnpj,
      razaoSocial: this.cliente.razaoSocial,
      nomeFantasia: this.cliente.nomeFantasia,
      endereco: this.cliente.endereco,
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

  excluirCliente(clienteForm: NgForm) {
    console.log('ClienteEditComponent > excluirCliente', clienteForm); 
  }

  // editarCliente(clienteForm: NgForm) {
  //   if (!this.flContato) { this._router.navigate(['/cliente/edit']) };
  //   console.log('ClienteEditarComponent > editarCliente(clienteForm)', clienteForm); 
  //   this._clienteService.editarCliente(this.cliente['_id'], clienteForm.value)
  //     .subscribe(observable => {
  //       if(observable.json().errors) {
  //         this.errors = observable.json().errors;
  //         console.log('Algum erro ocorreu editando cliente ', this.errors);
  //         this._router.navigate(['/cliente/edit/' + this.cliente['_id'] ]);
  //       } else {
  //         this._router.navigate(['/clientes']);
  //       }
  //     },
  //     err => {
  //       throw err;
  //     }
  //   );
  //   this.createForm(this.contatosCliente);
  // }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {
  usuario: any;
  errors: any;
  cliente = {
    cnpj: 0,
    razaoSocial: "",
    nomeFantasia: "",
    endereco: "",
    contato1: {
      nome: "",
      email: "",
      telefone: 0
    }
    // contato2: {
    //   nome: "",
    //   email: "",
    //   telefone: 0
    // },
    // contato3: {
    //   nome: "",
    //   email: "",
    //   telefone: 0
    // },
    // contato4: {
    //   nome: "",
    //   email: "",
    //   telefone: 0
    // },
    // contato5: {
    //   nome: "",
    //   email: "",
    //   telefone: 0
    // }
  }

  constructor(
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    console.log(' ClienteNovoComponent > ', this.usuario);
  }

  criarCliente(cliForm: NgForm) {
    console.log('ClienteNovoComponent > novoProjeto(cliForm)', cliForm); 
    this._clienteService.criarCliente(cliForm.value)
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
    cliForm.resetForm();
  }



}

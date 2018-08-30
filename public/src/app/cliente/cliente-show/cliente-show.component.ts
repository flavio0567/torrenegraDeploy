import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-show',
  templateUrl: './cliente-show.component.html',
  styleUrls: ['./cliente-show.component.scss']
})
export class ClienteShowComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
  cliente: any;
  errors: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _clienteService: ClienteService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('ClienteShowComponent > ngOnInit() ');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterCliente(this._route.snapshot.params['id']);
  }
  
  obterCliente(id) {
    console.log('ClienteShowComponent > obterCliente'); 
      const observable = this._clienteService.obterClienteById(id);
      observable.subscribe(
        (response) => {
          this.cliente = response.json();
        },
        (err) => {
          console.log('Algum erro ocorreu obtendo cliente ', err);
          throw err;
        }
      )
  }

  excluirCliente() {
    console.log('ClienteShowComponent > excluirCliente'); 
    if (!this.cliente.clienteProjetos[0]) {
      console.log('Cliente E X C L U I D O!');
      const observable = this._clienteService.excluirCliente(this.cliente._id);
      observable.subscribe(
        (response) => {
          this.cliente = response.json();
          this._router.navigate(['/clientes']);
        },
        (err) => {
          console.log('Algum erro ocorreu excluindo cliente ', err);
          throw err;
        }
      ) 
    } else {
      console.log('Cliente  N A O   excluido!'); 
      this.errors = this.cliente.clienteProjetos
    }
    
  }

  cancel() {
    this._router.navigate(['/clientes']);
  }
}

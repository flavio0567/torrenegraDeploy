import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProjetoService } from '../projeto.service';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-projeto-novo',
  templateUrl: './projeto-novo.component.html',
  styleUrls: ['./projeto-novo.component.scss']
})
export class ProjetoNovoComponent implements OnInit {
  usuarioLogado = {
    email: '',
    admin: ''
  }
  clientes: any;
  errors: any;
  projetos: any;
  projeto = {
    codigo: "",
    descricao: "",
    cliente:  "",
    pedido:  "",
    horasPLC:  0,
    horasIHM:  0,
    valorTerceiros:  0,
    valorMateriais:  0,
    valorViagens:  0
  };
  clienteSelecionado: Number;

  constructor(
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log('ProjetoNovoComponent > usuarioLogado ', this.usuarioLogado.email);
    this.obterListaCliente();
  }

  obterListaCliente() {
    console.log('ProjetoNovoComponent > obterListaCliente()')
    const cliObservable = this._clienteService.obterTodos();
    cliObservable.subscribe(
      (clientes) => { 
        this.clientes = clientes.json();
      },
      (err) => { },
        () => { }
    )
  }

  criarProjeto(projForm: NgForm) {
    console.log('ProjetoNovoComponent > novoProjeto(nProjForm)', projForm); 
    this._projetoService.criarProjeto(projForm.value)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu salvando projeto ', this.errors);
          this._router.navigate(['/projeto/novo']);
        } else {
          this._router.navigate(['/projetos']);
        }
      },
      err => {
        throw err;
      }
    );
    projForm.resetForm();
  }

}

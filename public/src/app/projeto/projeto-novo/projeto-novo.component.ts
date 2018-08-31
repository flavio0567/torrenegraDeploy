import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  projetoForm: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _projetoService: ProjetoService,
    private _clienteService: ClienteService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('ProjetoNovoComponent > ngOnInit() ');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterListaCliente();
    this.projetoForm = this._formBuilder.group({
      codigo: [null, [ Validators.required, Validators.pattern("[A-Z]{2}-[0-9]{3}-[0-9]{2}") ]],
      descricao: [null, [ Validators.required ]],
      _clienteId: [null],
      pedido:  [null, [ Validators.required ]],
      valorPedido: [null, [ Validators.required ]],
      horasPLC: [null],
      horasIHM: [null],
      valorTerceiros: [null],
      valorMateriais: [null],
      valorViagens: [null],
      situacao: [0]
    });
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

  get codigo() {
    return this.projetoForm.get('codigo');
  }

  get descricao() {
    return this.projetoForm.get('descricao');
  }

  get pedido() {
    return this.projetoForm.get('pedido');
  }

  get horasPLC() {
    return this.projetoForm.get('horasPLC');
  }

  get horasIHM() {
    return this.projetoForm.get('horasIHM');
  }

  criarProjeto(projetoForm) {
    console.log('ProjetoNovoComponent > criarProjeto(form)');
    this._projetoService.criarProjeto(projetoForm.value)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu salvando projeto ', this.errors);
          this._router.navigate(['/projeto/novo']);
        } else {
          this._router.navigate(['/projetos']);
        }
      },
      (err) => {
        console.log('Algum erro ocorreu criando projeto ', err);
        throw err;
      }
    );
  }
  cancel() {
    this._router.navigate(['/projetos']);
  }

}

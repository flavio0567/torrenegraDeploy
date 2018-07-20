import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apontamento-list',
  templateUrl: './apontamento-list.component.html',
  styleUrls: ['./apontamento-list.component.css']
})
export class ApontamentoListComponent implements OnInit {
  usuario: any;
  apontamentos: any[];
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.getUserLoggedIn();
    this.obterListaApontamento();
  }

  obterListaApontamento(){
    console.log('ApontamentoListComponent > obterListaApontamento()', this.usuario)
    const apontObservable = this._projetoService.obterApontamentos();
    apontObservable.subscribe(
      (apontamentos) => {
      console.log('retornei service obterApontamentos()', apontamentos);
      this.apontamentos = apontamentos.json();
      console.log('JSON apontamentos in obterApontamentos()', this.apontamentos);
      },
      (err) => { },
        () => { }
    )
  }

}

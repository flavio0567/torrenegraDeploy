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
  apontamentos: any[];
  
  constructor(
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.obterListaApontamentos();
  }

  obterListaApontamentos(){
    this._projetoService.obterApontamentos((res) => {
      this.apontamentos = res;
    });
  }


}

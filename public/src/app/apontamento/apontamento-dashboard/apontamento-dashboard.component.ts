import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'apontamento-dashboard',
  templateUrl: './apontamento-dashboard.component.html',
  styleUrls: ['./apontamento-dashboard.component.scss']
})
export class ApontamentoDashboardComponent implements OnInit {

  usuarioLogado = {
    email: '',
    admin: ''
  }

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    console.log('ApontamentoDashboardComponent > ngOnInit() ');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
  }

}

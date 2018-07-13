import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbdDatepickerPopup } from './datepicker-popup';
import { ProjetoService } from '../projeto/projeto.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.css']
})
export class ApontamentoComponent implements OnInit {
usuario: any;
today = Date.now();
projects: any[];
curProject: any = this.projects[0];
apontamento: any = {
  projeto: "",
  tipo: "",
  opcaoDespesa: "",
  hora: {
    inicio: 0,
    fim: 0
    },
  despesa: {
    descricao: "",
    valor: 0
  }
}
apontamentos: any[];

constructor(
  private _projetoService: ProjetoService,
  private _usuarioService: UsuarioService,
  private _router: Router
) { }

  ngOnInit() {
    this.usuario = this._usuarioService.login;
    console.log('apontamento:', this.apontamento);

  }

  // setProject(id: any): void {
  //   console.log('id projeto selecionado:',id);
  //   this.curProject = this.projects.filter(value => value.id === parseInt(id));
  //   console.log('curProject in setProject:',this.curProject[0]);
  // }

  setTipoApontamento(): void {
    console.log('apontaro:', this.apontamento);
    if (this.apontamento.tipo != 'Hora') {
      this.apontamento.hora.inicio = 0;
      this.apontamento.hora.fim = 0;
    }
    if (this.apontamento.opcaoDespesa != 'outros') {
      this.apontamento.despesa.descricao = this.apontamento.opcaoDespesa;
    }
  }

  // setInicioAtendimento() {
  //   this.apontamento.hora.inicio = this.today;
  //   console.log('INICIO:', this.apontamento.hora.inicio);
  // }

  // setTipoDespesa(id: any) {
  //   if (id === 'outros') {
  //     this.apontamento.tipo = 'Despesa';
  //   } else { 
  //     this.apontamento.tipo = id;
  //   }
  // }

  cancel() {
    this._router.navigate(['/projeto/list']);
  }

}

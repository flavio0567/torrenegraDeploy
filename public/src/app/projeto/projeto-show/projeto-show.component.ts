import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projeto-show',
  templateUrl: './projeto-show.component.html',
  styleUrls: ['./projeto-show.component.css']
})
export class ProjetoShowComponent implements OnInit {
  projeto: any;

  constructor(
    private _router: Router,
    private _projetoService: ProjetoService
  ) { }

  ngOnInit() {
  }

  // encerrar() {
  //   console.log('projeto em showProjeto: ', this.projeto); 
  //   this._projetoService.encerrarProjeto(this.projeto, (res) => {
  //     this._router.navigate(['projeto/list', res]);
  //   });
  // }

  cancel() {
    this._router.navigate(['/projeto/list']);
  }


}

import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent implements OnInit {
  
  projetos: any;

  constructor(
    private _projetoService: ProjetoService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.obterProjetoList();
  }

  obterProjetoList() {
    console.log('ProjetoListComponent > obterProjetoList()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => { },
        () => { }
    )
  }

  encerrar() {
    console.log('ProjetoListComponent > encerrar()')

  }


}

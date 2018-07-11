import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdDatepickerPopup } from './datepicker-popup';

@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.css']
})
export class ApontamentoComponent implements OnInit {

today: number = Date.now();

projects: any[] = [{id: 1, descricao: "Project AAA"}, {id: 2, descricao: "Project BBB"}, {id: 3, descricao: "Project CCC"}];
curProject: any = this.projects[0];

apontamento: any;

constructor(
  private _router: Router
) { }

  ngOnInit() {
    this.apontamento = {despesa: 0, hora: 0};
    console.log('today:', this.today);
  }

  setProject(id: any): void {
    console.log(id);
    // Match the selected ID with the ID's in array
    this.curProject = this.projects.filter(value => value.id === parseInt(id));
    console.log('project in setProject:',this.curProject);
  }

  setTipoApontamento(id: any): void {
    console.log('id in setTipoApontamento:',id);
    console.log('apontamento:',this.apontamento);
    this._router.navigate(['/apontamento']);
    // Match the selected ID with the ID's in array
    // this.curProject = this.projects.filter(value => value.id === parseInt(id));
    // console.log(this.curProject);
  }

  cancel() {
    this._router.navigate(['/projeto/list']);
  }

}

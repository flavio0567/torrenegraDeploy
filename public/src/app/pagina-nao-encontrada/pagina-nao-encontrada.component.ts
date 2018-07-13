import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: `<h2>Pagagina não encontrada ;|</h2>
             <div>
                <button (click)="goBack()">Retornar</button>
	     </div>
        `
})
export class PaginaNaoEncontradaComponent {
	constructor(private location: Location) { }
	goBack(): void {
          this.location.back();
        }
}
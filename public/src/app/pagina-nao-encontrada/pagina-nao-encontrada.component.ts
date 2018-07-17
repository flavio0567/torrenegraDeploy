import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: `<h2>Pagina não encontrada!</h2>
             <div>
                <button [routerLink]="['/projetos']">Retornar</button>
	     </div>
        `
})
export class PaginaNaoEncontradaComponent {
	constructor(private location: Location) { }
	goBack(): void {
          this.location.back();
        }
}
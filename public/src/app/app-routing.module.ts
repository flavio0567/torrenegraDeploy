import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioShowComponent } from './usuario/usuario-show/usuario-show.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { ProjetoListComponent } from './projeto/projeto-list/projeto-list.component';
import { ProjetoNovoComponent } from './projeto/projeto-novo/projeto-novo.component';
import { ProjetoEditComponent } from './projeto/projeto-edit/projeto-edit.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteShowComponent } from './cliente/cliente-show/cliente-show.component';
import { ApontamentoNovoComponent } from './apontamento/apontamento-novo/apontamento-novo.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RelatorioFinanceiroComponent } from './relatorio/relatorio-financeiro/relatorio-financeiro.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { ApontamentoDashboardComponent } from './apontamento/apontamento-dashboard/apontamento-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'apontamento/novo',
    component: ApontamentoNovoComponent,
    pathMatch: 'full'
  },
  {
    path: 'apontamentos',
    component: ApontamentoDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent,
    pathMatch: 'full'
  },
  {
    path: 'relatorio/financeiro',
    component: RelatorioFinanceiroComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/show/:id',
    component: UsuarioShowComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/novo',
    component: UsuarioNovoComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/edit/:id',
    component: UsuarioEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuarioListComponent,
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClienteListComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/novo',
    component: ClienteNovoComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/edit/:id',
    component: ClienteEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/show/:id',
    component: ClienteShowComponent,
    pathMatch: 'full'
  },
  {
    path: 'projetos',
    component: ProjetoListComponent,
    pathMatch: 'full'
  },
  {
    path: 'projeto/novo',
    component: ProjetoNovoComponent,
    pathMatch: 'full'
  },
  {
    path: 'projeto/edit/:id',
    component: ProjetoEditComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'relatorio/financeiro',
  //   component: RelatorioFinanceiroComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'error',
    component: GlobalErrorComponent
 },
  { 
    path: 'reset',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

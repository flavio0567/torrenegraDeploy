import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { RelatorioApontamentoProjetoComponent } from './relatorio/relatorio-apontamento-projeto/relatorio-apontamento-projeto.component';
import { RelatorioApontamentoHorasUsuarioComponent } from './relatorio/relatorio-apontamento-horas-usuario/relatorio-apontamento-horas-usuario.component';
import { RelatorioApontamentoDespesasUsuarioComponent } from './relatorio/relatorio-apontamento-despesas-usuario/relatorio-apontamento-despesas-usuario.component';
import { RelatorioProjetoComponent } from './relatorio/relatorio-projeto/relatorio-projeto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'apontamento/novo',
    component: ApontamentoNovoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'apontamentos',
    component: ApontamentoDashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorio/financeiro',
    component: RelatorioFinanceiroComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorio/apontamento/projeto',
    component:  RelatorioApontamentoProjetoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorio/horas/usuario',
    component: RelatorioApontamentoHorasUsuarioComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorio/despesas/usuario',
    component: RelatorioApontamentoDespesasUsuarioComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorio/projeto',
    component: RelatorioProjetoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/show/:id',
    component: UsuarioShowComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/novo',
    component: UsuarioNovoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/edit/:id',
    component: UsuarioEditComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: UsuarioListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    component: ClienteListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente/novo',
    component: ClienteNovoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente/edit/:id',
    component: ClienteEditComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente/show/:id',
    component: ClienteShowComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projetos',
    component: ProjetoListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projeto/novo',
    component: ProjetoNovoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'projeto/edit/:id',
    component: ProjetoEditComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'primeiro/acesso',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: GlobalErrorComponent
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
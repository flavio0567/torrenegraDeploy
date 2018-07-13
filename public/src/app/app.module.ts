import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { NgbdDatepickerPopup } from './apontamento/datepicker-popup';
// import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApontamentoComponent } from './apontamento/apontamento.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteShowComponent } from './cliente/cliente-show/cliente-show.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';
import { UsuarioShowComponent } from './usuario/usuario-show/usuario-show.component';
import { LoginComponent } from './login/login.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ProjetoListComponent } from './projeto/projeto-list/projeto-list.component';
import { ProjetoNovoComponent } from './projeto/projeto-novo/projeto-novo.component';
import { ProjetoShowComponent } from './projeto/projeto-show/projeto-show.component';
import { ProjetoEditComponent } from './projeto/projeto-edit/projeto-edit.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { RelatorioFinanceiroComponent } from './relatorio/relatorio-financeiro/relatorio-financeiro.component';
import { ApontamentoListComponent } from './apontamento/apontamento-list/apontamento-list.component';
import { ProjetoService } from './projeto/projeto.service';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApontamentoComponent,
    ApontamentoListComponent,
    FinanceiroComponent,
    ClienteListComponent,
    ClienteNovoComponent,
    ClienteEditComponent,
    ClienteShowComponent,
    UsuarioListComponent,
    UsuarioEditComponent,
    UsuarioNovoComponent,
    UsuarioShowComponent,
    ProjetoListComponent,
    ProjetoNovoComponent,
    ProjetoShowComponent,
    ProjetoEditComponent,
    PaginaNaoEncontradaComponent,
    RelatorioFinanceiroComponent
    // NgbdDatepickerPopup,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
    // NgbModule,
    // NgbModule.forRoot()
  ],
  providers: [
    ProjetoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

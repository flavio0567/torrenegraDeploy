import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID,  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { GlobalErrorComponent } from './global-error/global-error.component';

import { ProjetoService } from './projeto/projeto.service';
import { UsuarioService } from './usuario/usuario.service';
import { ClienteService } from './cliente/cliente.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';

import { NgbdDatepickerPopup } from './apontamento/datepicker-popup';
// import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteShowComponent } from './cliente/cliente-show/cliente-show.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';
import { UsuarioShowComponent } from './usuario/usuario-show/usuario-show.component';
import { LoginComponent } from './login/login.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ProjetoListComponent, DialogProjeto } from './projeto/projeto-list/projeto-list.component';
import { ProjetoNovoComponent } from './projeto/projeto-novo/projeto-novo.component';
import { ProjetoEditComponent } from './projeto/projeto-edit/projeto-edit.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { RelatorioFinanceiroComponent } from './relatorio/relatorio-financeiro/relatorio-financeiro.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ApontamentoNovoComponent } from './apontamento/apontamento-novo/apontamento-novo.component';
import { MaterialModule } from './material';
import { ApontamentoDashboardComponent } from './apontamento/apontamento-dashboard/apontamento-dashboard.component';
import { ApontamentoListaDespesaComponent } from './apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component';
import { ApontamentoListaHoraComponent, DialogApontamentoHora } from './apontamento/apontamento-lista-hora/apontamento-lista-hora.component';
import { RelatorioApontamentoProjetoComponent } from './relatorio/relatorio-apontamento-projeto/relatorio-apontamento-projeto.component';
import { RelatorioApontamentoHorasUsuarioComponent } from './relatorio/relatorio-apontamento-horas-usuario/relatorio-apontamento-horas-usuario.component';
import { RelatorioApontamentoDespesasUsuarioComponent } from './relatorio/relatorio-apontamento-despesas-usuario/relatorio-apontamento-despesas-usuario.component';
import { RelatorioCustoProjetoComponent } from './relatorio/relatorio-custo-projeto/relatorio-custo-projeto.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    ProjetoEditComponent,
    RelatorioFinanceiroComponent,
    PaginaNaoEncontradaComponent,
    GlobalErrorComponent,
    ApontamentoNovoComponent,
    DialogProjeto,
    DialogApontamentoHora,
    ApontamentoDashboardComponent,
    ApontamentoListaDespesaComponent,
    ApontamentoListaHoraComponent,
    NgbdDatepickerPopup,
    RelatorioApontamentoProjetoComponent,
    RelatorioApontamentoHorasUsuarioComponent,
    RelatorioApontamentoDespesasUsuarioComponent,
    RelatorioCustoProjetoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule
    // NgbModule,
    // NgbModule.forRoot()
  ],
  entryComponents:[
    DialogProjeto,
    DialogApontamentoHora
  ],
  providers: [
    ProjetoService,
    UsuarioService,
    ClienteService,
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

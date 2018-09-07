import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID,  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatButtonModule, MatSortModule, MatTableModule, MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { GlobalErrorComponent } from './global-error/global-error.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ExcelService } from './excel.service';
import { ProjetoService } from './projeto/projeto.service';
import { UsuarioService } from './usuario/usuario.service';
import { ClienteService } from './cliente/cliente.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';

import { NgbdDatepickerPopup } from './apontamento/datepicker-popup';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteShowComponent } from './cliente/cliente-show/cliente-show.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';
import { UsuarioShowComponent } from './usuario/usuario-show/usuario-show.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ProjetoListComponent, DialogProjeto } from './projeto/projeto-list/projeto-list.component';
import { ProjetoNovoComponent } from './projeto/projeto-novo/projeto-novo.component';
import { ProjetoEditComponent } from './projeto/projeto-edit/projeto-edit.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ApontamentoNovoComponent } from './apontamento/apontamento-novo/apontamento-novo.component';
import { ApontamentoDashboardComponent } from './apontamento/apontamento-dashboard/apontamento-dashboard.component';
import { ApontamentoListaDespesaComponent } from './apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component';
import { ApontamentoListaHoraComponent, DialogApontamentoHora } from './apontamento/apontamento-lista-hora/apontamento-lista-hora.component';
import { RelatorioFinanceiroComponent } from './relatorio/relatorio-financeiro/relatorio-financeiro.component';
import { RelatorioApontamentoProjetoComponent } from './relatorio/relatorio-apontamento-projeto/relatorio-apontamento-projeto.component';
import { RelatorioApontamentoHorasUsuarioComponent } from './relatorio/relatorio-apontamento-horas-usuario/relatorio-apontamento-horas-usuario.component';
import { RelatorioApontamentoDespesasUsuarioComponent } from './relatorio/relatorio-apontamento-despesas-usuario/relatorio-apontamento-despesas-usuario.component';
import { RelatorioProjetoComponent } from './relatorio/relatorio-projeto/relatorio-projeto.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { RegisterComponent } from './register/register.component';



registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
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
    RelatorioProjetoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatRippleModule, 
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    // NgbModule,
    // NgbModule.forRoot(),
    MatDatepickerModule, 
    MatNativeDateModule,
    CurrencyMaskModule
  ],
  entryComponents:[
    DialogProjeto,
    DialogApontamentoHora
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProjetoService,
    UsuarioService,
    ClienteService,
    ExcelService,
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
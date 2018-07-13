(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apontamento/apontamento-list/apontamento-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-list/apontamento-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/apontamento/apontamento-list/apontamento-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-list/apontamento-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"box\">\n  <nav class=\"level\">\n    <div class=\"level-left\">\n        <div class=\"title is-4\">Apontamentos</div> \n    </div>\n    <div class=\"level-right\">\n        <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/apontamento']\">Novo apontamento</button>\n    </div> \n  </nav>\n  <article class=\"media\">\n    <div class=\"media-content\">\n      <div class=\"content\">\n\n        <br>\n        <div id=\"scroll\">\n          <table class=\"table table-hover\" align=\"left\">\n            <thead>\n                <tr class=\"table-primary d-flex\">\n                  <th class=\"col-1\">Id projeto</th>\n                  <th class=\"col-3\">Descrição projeto</th>\n                  <th class=\"col-2\">Cliente</th>\n                  <th class=\"col-2\">Pedido</th>\n                  <th class=\"col-1\">Ação</th>\n                  <th class=\"col-1\"> </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let projeto of projetos\" class=\"d-flex\">\n                  <td class=\"col-1\">{{ projeto['_id'] }}</td>\n                  <td class=\"col-3\">{{ projeto['descricao'] }}</td>\n                  <td class=\"col-2\">{{ projeto['cliente'] }}</td>\n                  <td class=\"col-2\">{{ projeto['pedido'] }}</td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/edit/', projeto['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/', projeto['_id'] ]\"  class=\"button is-danger\">Detalhes</button></td>\n                </tr>\n              </tbody>\n            </table> \n          </div>    \n        </div>\n      </div>\n    </article>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-list/apontamento-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-list/apontamento-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApontamentoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoListComponent", function() { return ApontamentoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApontamentoListComponent = /** @class */ (function () {
    function ApontamentoListComponent(_projetoService, _usuarioService, _router) {
        this._projetoService = _projetoService;
        this._usuarioService = _usuarioService;
        this._router = _router;
    }
    ApontamentoListComponent.prototype.ngOnInit = function () {
        this.obterListaApontamentos();
    };
    ApontamentoListComponent.prototype.obterListaApontamentos = function () {
        var _this = this;
        this._projetoService.obterApontamentos(function (res) {
            _this.apontamentos = res;
        });
    };
    ApontamentoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apontamento-list',
            template: __webpack_require__(/*! ./apontamento-list.component.html */ "./src/app/apontamento/apontamento-list/apontamento-list.component.html"),
            styles: [__webpack_require__(/*! ./apontamento-list.component.css */ "./src/app/apontamento/apontamento-list/apontamento-list.component.css")]
        }),
        __metadata("design:paramtypes", [_projeto_projeto_service__WEBPACK_IMPORTED_MODULE_1__["ProjetoService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApontamentoListComponent);
    return ApontamentoListComponent;
}());



/***/ }),

/***/ "./src/app/apontamento/apontamento.component.css":
/*!*******************************************************!*\
  !*** ./src/app/apontamento/apontamento.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 10px;\n}\n.purple {\n    color: purple;\n}"

/***/ }),

/***/ "./src/app/apontamento/apontamento.component.html":
/*!********************************************************!*\
  !*** ./src/app/apontamento/apontamento.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n<h3>  {{today | date:'short' }} </h3>\n<form  #formData=\"ngForm\" id=\"newDespesaForm\">\n  <h3>Projeto</h3>\n  <div class=\"select is-multiple\">\n    <select name=\"projeto\" [(ngModel)]=\"apontamento.projeto\" required>\n        <option *ngFor=\"let p of projects\">\n          {{ p.id }} {{ p.descricao }}\n        </option>\n    </select>\n    <div *ngIf=\"!apontamento.projeto.valid\" class=\"purple\"> * Selecione um projeto!</div>\n  \n  </div>\n\n  <h3>Tipo de apontamento</h3>\n  <div class=\"select is-multiple\">\n      <select name=\"tipo\" [(ngModel)]=\"apontamento.tipo\">\n        <option>Hora </option>\n        <option>Despesa </option>\n      </select>\n      <div *ngIf=\"!apontamento.tipo.valid\" class=\"purple\"> * Selecione um tipo de apontamento!</div>\n  \n      <!-- Tipo de Apontamento: Despesa -->\n      <div class=\"control\" *ngIf=\"(apontamento.tipo=='Despesa')\">\n        <div class=\"field is-horizontal\" style=\"margin-top: 20px;\" >\n          <select name=\"opcaoDespesa\" [(ngModel)]=\"apontamento.opcaoDespesa\" > \n            <option>alimentação </option>\n            <option>hospedagem </option>\n            <option>pedágio </option>\n            <option>transporte </option>\n            <option>outros </option>\n          </select>\n          <div *ngIf=\"!apontamento.opcaoDespesa.valid\" class=\"purple\"> * Selecione uma opção de despesa!</div>\n\n        </div>\n            <div class=\"control\" *ngIf=\"apontamento.opcaoDespesa=='outros'\">\n            <div class=\"field is-horizontal\">\n              <p class=\"control\">\n                <textarea \n                class=\"textarea is-warning\" \n                type=\"text\" \n                rows=\"2\"\n                name=\"descricao\" \n                placeholder=\"Descrição da despesa\"\n                [(ngModel)]=\"apontamento.despesa.descricao\"\n                #descricao=\"ngModel\">\n                </textarea>\n              </p>\n            </div>\n        </div>\n        <div class=\"field is-horizontal\" >\n          <div class=\"field-body\">\n            <div class=\"field\">\n              <p class=\"control\">\n                <input \n                class=\"input\" \n                type=\"text\" \n                name=\"valor\" \n                [(ngModel)]=\"apontamento.despesa.valor\"\n                #valor=\"ngModel\"\n                />\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Tipo de Apontamento: Hora -->\n      <div *ngIf=\"(apontamento.tipo=='Hora')\">\n          <div style=\"border: solid 2px green; margin-top: 10px;  padding: 10px;\">\n            <select name=\"inicio\" [(ngModel)]=\"apontamento.hora.inicio\" > \n                <option>{{today | date:'short'}}</option>\n              </select>\n              \n          </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"setTipoApontamento()\" [disabled]=\"formData.invalid\">Confirma</button>\n\n      <!-- <div class=\"errors\">\n        <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n        <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n      </div> -->\n\n    </div>\n  </form>\n\n\n<!-- <div style=\"margin-top: 15px; width: 50%;\">\n        <ngbd-datepicker-popup></ngbd-datepicker-popup>\n    </div> -->\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento.component.ts":
/*!******************************************************!*\
  !*** ./src/app/apontamento/apontamento.component.ts ***!
  \******************************************************/
/*! exports provided: ApontamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoComponent", function() { return ApontamentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NgbdDatepickerPopup } from './datepicker-popup';


var ApontamentoComponent = /** @class */ (function () {
    function ApontamentoComponent(_projetoService, _usuarioService, _router) {
        this._projetoService = _projetoService;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this.today = Date.now();
        this.curProject = this.projects[0];
        this.apontamento = {
            projeto: "",
            tipo: "",
            opcaoDespesa: "",
            hora: {
                inicio: 0,
                fim: 0
            },
            despesa: {
                descricao: "",
                valor: 0
            }
        };
    }
    ApontamentoComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.login;
        console.log('apontamento:', this.apontamento);
    };
    // setProject(id: any): void {
    //   console.log('id projeto selecionado:',id);
    //   this.curProject = this.projects.filter(value => value.id === parseInt(id));
    //   console.log('curProject in setProject:',this.curProject[0]);
    // }
    ApontamentoComponent.prototype.setTipoApontamento = function () {
        console.log('apontaro:', this.apontamento);
        if (this.apontamento.tipo != 'Hora') {
            this.apontamento.hora.inicio = 0;
            this.apontamento.hora.fim = 0;
        }
        if (this.apontamento.opcaoDespesa != 'outros') {
            this.apontamento.despesa.descricao = this.apontamento.opcaoDespesa;
        }
    };
    // setInicioAtendimento() {
    //   this.apontamento.hora.inicio = this.today;
    //   console.log('INICIO:', this.apontamento.hora.inicio);
    // }
    // setTipoDespesa(id: any) {
    //   if (id === 'outros') {
    //     this.apontamento.tipo = 'Despesa';
    //   } else { 
    //     this.apontamento.tipo = id;
    //   }
    // }
    ApontamentoComponent.prototype.cancel = function () {
        this._router.navigate(['/projeto/list']);
    };
    ApontamentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apontamento',
            template: __webpack_require__(/*! ./apontamento.component.html */ "./src/app/apontamento/apontamento.component.html"),
            styles: [__webpack_require__(/*! ./apontamento.component.css */ "./src/app/apontamento/apontamento.component.css")]
        }),
        __metadata("design:paramtypes", [_projeto_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ApontamentoComponent);
    return ApontamentoComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "./src/app/financeiro/financeiro.component.ts");
/* harmony import */ var _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario/usuario-novo/usuario-novo.component */ "./src/app/usuario/usuario-novo/usuario-novo.component.ts");
/* harmony import */ var _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario/usuario-edit/usuario-edit.component */ "./src/app/usuario/usuario-edit/usuario-edit.component.ts");
/* harmony import */ var _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario/usuario-list/usuario-list.component */ "./src/app/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projeto/projeto-list/projeto-list.component */ "./src/app/projeto/projeto-list/projeto-list.component.ts");
/* harmony import */ var _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projeto/projeto-novo/projeto-novo.component */ "./src/app/projeto/projeto-novo/projeto-novo.component.ts");
/* harmony import */ var _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projeto/projeto-edit/projeto-edit.component */ "./src/app/projeto/projeto-edit/projeto-edit.component.ts");
/* harmony import */ var _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projeto/projeto-show/projeto-show.component */ "./src/app/projeto/projeto-show/projeto-show.component.ts");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cliente/cliente-list/cliente-list.component */ "./src/app/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cliente/cliente-novo/cliente-novo.component */ "./src/app/cliente/cliente-novo/cliente-novo.component.ts");
/* harmony import */ var _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cliente/cliente-edit/cliente-edit.component */ "./src/app/cliente/cliente-edit/cliente-edit.component.ts");
/* harmony import */ var _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cliente/cliente-show/cliente-show.component */ "./src/app/cliente/cliente-show/cliente-show.component.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./relatorio/relatorio-financeiro/relatorio-financeiro.component */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts");
/* harmony import */ var _apontamento_apontamento_list_apontamento_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./apontamento/apontamento-list/apontamento-list.component */ "./src/app/apontamento/apontamento-list/apontamento-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'apontamentos',
        component: _apontamento_apontamento_list_apontamento_list_component__WEBPACK_IMPORTED_MODULE_17__["ApontamentoListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'financeiro',
        component: _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_3__["FinanceiroComponent"],
        pathMatch: 'full'
    },
    {
        path: 'relatorio/financeiro',
        component: _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_16__["RelatorioFinanceiroComponent"],
        pathMatch: 'full'
    },
    {
        path: 'usuario/novo',
        component: _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioNovoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'usuario/edit/:id',
        component: _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioEditComponent"],
        pathMatch: 'full'
    },
    {
        path: 'usuario/list',
        component: _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/list',
        component: _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_11__["ClienteListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/novo',
        component: _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_12__["ClienteNovoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/edit/:id',
        component: _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_13__["ClienteEditComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/show/:id',
        component: _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_14__["ClienteShowComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projetos',
        component: _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjetoListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projeto/novo',
        component: _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_8__["ProjetoNovoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projeto/edit/:id',
        component: _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProjetoEditComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projeto/show/:id',
        component: _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_10__["ProjetoShowComponent"],
        pathMatch: 'full'
    },
    {
        path: 'reset',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_15__["PaginaNaoEncontradaComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'boilerplate';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _apontamento_apontamento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apontamento/apontamento.component */ "./src/app/apontamento/apontamento.component.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cliente/cliente-edit/cliente-edit.component */ "./src/app/cliente/cliente-edit/cliente-edit.component.ts");
/* harmony import */ var _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cliente/cliente-novo/cliente-novo.component */ "./src/app/cliente/cliente-novo/cliente-novo.component.ts");
/* harmony import */ var _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cliente/cliente-show/cliente-show.component */ "./src/app/cliente/cliente-show/cliente-show.component.ts");
/* harmony import */ var _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usuario/usuario-list/usuario-list.component */ "./src/app/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuario/usuario-edit/usuario-edit.component */ "./src/app/usuario/usuario-edit/usuario-edit.component.ts");
/* harmony import */ var _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usuario/usuario-novo/usuario-novo.component */ "./src/app/usuario/usuario-novo/usuario-novo.component.ts");
/* harmony import */ var _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usuario/usuario-show/usuario-show.component */ "./src/app/usuario/usuario-show/usuario-show.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "./src/app/financeiro/financeiro.component.ts");
/* harmony import */ var _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projeto/projeto-list/projeto-list.component */ "./src/app/projeto/projeto-list/projeto-list.component.ts");
/* harmony import */ var _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projeto/projeto-novo/projeto-novo.component */ "./src/app/projeto/projeto-novo/projeto-novo.component.ts");
/* harmony import */ var _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projeto/projeto-show/projeto-show.component */ "./src/app/projeto/projeto-show/projeto-show.component.ts");
/* harmony import */ var _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projeto/projeto-edit/projeto-edit.component */ "./src/app/projeto/projeto-edit/projeto-edit.component.ts");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cliente/cliente-list/cliente-list.component */ "./src/app/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./relatorio/relatorio-financeiro/relatorio-financeiro.component */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts");
/* harmony import */ var _apontamento_apontamento_list_apontamento_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./apontamento/apontamento-list/apontamento-list.component */ "./src/app/apontamento/apontamento-list/apontamento-list.component.ts");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { NgbdDatepickerPopup } from './apontamento/datepicker-popup';
// import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _apontamento_apontamento_component__WEBPACK_IMPORTED_MODULE_6__["ApontamentoComponent"],
                _apontamento_apontamento_list_apontamento_list_component__WEBPACK_IMPORTED_MODULE_23__["ApontamentoListComponent"],
                _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_16__["FinanceiroComponent"],
                _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_21__["ClienteListComponent"],
                _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_9__["ClienteNovoComponent"],
                _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_8__["ClienteEditComponent"],
                _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_10__["ClienteShowComponent"],
                _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioListComponent"],
                _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_12__["UsuarioEditComponent"],
                _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_13__["UsuarioNovoComponent"],
                _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_14__["UsuarioShowComponent"],
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_17__["ProjetoListComponent"],
                _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_18__["ProjetoNovoComponent"],
                _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_19__["ProjetoShowComponent"],
                _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProjetoEditComponent"],
                _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_7__["PaginaNaoEncontradaComponent"],
                _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_22__["RelatorioFinanceiroComponent"]
                // NgbdDatepickerPopup,
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                // NgbModule,
                // NgbModule.forRoot()
            ],
            providers: [
                _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_24__["ProjetoService"],
                _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_25__["UsuarioService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-edit/cliente-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cliente/cliente-edit/cliente-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cliente/cliente-edit/cliente-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-edit/cliente-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cliente-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/cliente/cliente-edit/cliente-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cliente/cliente-edit/cliente-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ClienteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteEditComponent", function() { return ClienteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClienteEditComponent = /** @class */ (function () {
    function ClienteEditComponent() {
    }
    ClienteEditComponent.prototype.ngOnInit = function () {
    };
    ClienteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-edit',
            template: __webpack_require__(/*! ./cliente-edit.component.html */ "./src/app/cliente/cliente-edit/cliente-edit.component.html"),
            styles: [__webpack_require__(/*! ./cliente-edit.component.css */ "./src/app/cliente/cliente-edit/cliente-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClienteEditComponent);
    return ClienteEditComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-list/cliente-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cliente/cliente-list/cliente-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cliente/cliente-list/cliente-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-list/cliente-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"projeto/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  \n  <div class=\"container\">\n      <nav class=\"level\">\n        <div class=\"level-left\">\n            <div class=\"title is-4\">Cliente</div> \n        </div>\n        <div class=\"level-right\">\n            <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/cliente/novo']\">Novo cliente</button>\n        </div> \n      </nav>\n    <article class=\"media\">\n      <div class=\"media-content\">\n        <div class=\"content\">\n  \n          <br>\n          <div id=\"scroll\">\n            <table class=\"table table-hover\" align=\"left\">\n              <thead>\n                  <tr class=\"table-primary d-flex\">\n                    <th class=\"col-1\">CNPJ</th>\n                    <th class=\"col-3\">Razão Social</th>\n                    <th class=\"col-3\">Primeiro Contato </th>\n                    <th class=\"col-2\">e-mail </th>\n                    <th class=\"col-1\">Fone </th>\n                    <th class=\"col-1\">Ação</th>\n                    <th class=\"col-1\"> </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let cliente of clientes\" class=\"d-flex\">\n                    <td class=\"col-1\">{{ cliente['cnpj'] }}</td>\n                    <td class=\"col-3\">{{ cliente['razaoSocial'] }}</td>\n                    <td class=\"col-2\">{{ cliente['contato1'] }}</td>\n                    <td class=\"col-2\">{{ cliente['emailContato1'] }}</td>\n                    <td class=\"col-2\">{{ cliente['telContato1'] | number : '1.2-2' }}</td>\n                    <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/cliente/edit/', cliente['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                    <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/cliente/show', cliente['_id'] ]\"  class=\"button is-danger\">Detalhes</button></td>\n                  </tr>\n                </tbody>\n              </table> \n            </div>    \n          </div>\n        </div>\n      </article>\n  </div>\n    \n  \n  "

/***/ }),

/***/ "./src/app/cliente/cliente-list/cliente-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cliente/cliente-list/cliente-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ClienteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListComponent", function() { return ClienteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClienteListComponent = /** @class */ (function () {
    function ClienteListComponent() {
    }
    ClienteListComponent.prototype.ngOnInit = function () {
    };
    ClienteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-list',
            template: __webpack_require__(/*! ./cliente-list.component.html */ "./src/app/cliente/cliente-list/cliente-list.component.html"),
            styles: [__webpack_require__(/*! ./cliente-list.component.css */ "./src/app/cliente/cliente-list/cliente-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClienteListComponent);
    return ClienteListComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente-novo.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente-novo.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente-novo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente-novo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"projeto/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container\">\n  \n    Dados básicos: \n  \n  <form (submit)=\"addClient()\" #formData=\"ngForm\" id=\"newClientForm\">\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">CNPJ</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input is-focused\" \n            type=\"text\" \n            name=\"cnpj\" \n            minlength=4\n            required\n            [(ngModel)]=\"cliente.cnpj\"\n            #cnpj=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!codigo.valid\" class=\"purple\">Código precisar ter no mínimo 4 caracteres!</div> -->\n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Razão Social</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"razaoSocial\" \n          minlength=8\n          required\n          [(ngModel)]=\"cliente.razaoSocial\"\n          #razaoSocial=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!razaoSocial.valid\" class=\"purple\">Razão Social do cliente precisar ter no mínimo 8 caracteres!</div>\n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Endereço</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"endereco\" \n          minlength=4\n          required\n          [(ngModel)]=\"cliente.endereco\"\n          #endereco=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!cliente.valid\" class=\"purple\">Cliente precisar ter no mínimo 4 caracteres!</div>\n  \n  Contatos: \n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Contato 1</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"nomeContato1\" \n          required\n          placeholder=\"nome\"\n          [(ngModel)]=\"cliente.nomeContato1\"\n          #nomeContato1=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"emailContato1\" \n          required\n          placeholder=\"e-mail\"\n          [(ngModel)]=\"cliente.emailContato1\"\n          #emailContato1=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"telContato1\" \n          required\n          placeholder=\"telefone\"\n          [(ngModel)]=\"cliente.telContato1\"\n          #telContato1=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Contato 2</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"nomeContato2\" \n          required\n          placeholder=\"nome\"\n          [(ngModel)]=\"cliente.nomeContato2\"\n          #nomeContato2=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"emailContato2\" \n          required\n          placeholder=\"e-mail\"\n          [(ngModel)]=\"cliente.emailContato2\"\n          #emailContato2=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"telContato2\" \n          required\n          placeholder=\"telefone\"\n          [(ngModel)]=\"cliente.telContato2\"\n          #telContato2=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Contato 3</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"nomeContato3\" \n          required\n          placeholder=\"nome\"\n          [(ngModel)]=\"cliente.nomeContato3\"\n          #nomeContato3=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"emailContato3\" \n          required\n          placeholder=\"e-mail\"\n          [(ngModel)]=\"cliente.emailContato3\"\n          #emailContato3=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"telContato3\" \n          required\n          placeholder=\"telefone\"\n          [(ngModel)]=\"cliente.telContato3\"\n          #telContato3=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Contato 4</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"nomeContato4\" \n          required\n          placeholder=\"nome\"\n          [(ngModel)]=\"cliente.nomeContato4\"\n          #nomeContato4=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"emailContato4\" \n          required\n          placeholder=\"e-mail\"\n          [(ngModel)]=\"cliente.emailContato4\"\n          #emailContato4=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"telContato4\" \n          required\n          placeholder=\"telefone\"\n          [(ngModel)]=\"cliente.telContato4\"\n          #telContato4=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Contato 5</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"nomeContato5\" \n          required\n          placeholder=\"nome\"\n          [(ngModel)]=\"cliente.nomeContato5\"\n          #nomeContato5=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"emailContato5\" \n          required\n          placeholder=\"e-mail\"\n          [(ngModel)]=\"cliente.emailContato5\"\n          #emailContato5=\"ngModel\"\n          />\n  \n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"telContato5\" \n          required\n          placeholder=\"telefone\"\n          [(ngModel)]=\"cliente.telContato5\"\n          #telContato5=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formData.invalid\">Confirma</button>\n  \n        <!-- <div class=\"errors\">\n          <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n          <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n        </div> -->\n  \n  </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente-novo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente-novo.component.ts ***!
  \****************************************************************/
/*! exports provided: ClienteNovoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteNovoComponent", function() { return ClienteNovoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClienteNovoComponent = /** @class */ (function () {
    function ClienteNovoComponent() {
    }
    ClienteNovoComponent.prototype.ngOnInit = function () {
    };
    ClienteNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-novo',
            template: __webpack_require__(/*! ./cliente-novo.component.html */ "./src/app/cliente/cliente-novo/cliente-novo.component.html"),
            styles: [__webpack_require__(/*! ./cliente-novo.component.css */ "./src/app/cliente/cliente-novo/cliente-novo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClienteNovoComponent);
    return ClienteNovoComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-show/cliente-show.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cliente/cliente-show/cliente-show.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cliente/cliente-show/cliente-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-show/cliente-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cliente-show works!\n</p>\n"

/***/ }),

/***/ "./src/app/cliente/cliente-show/cliente-show.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cliente/cliente-show/cliente-show.component.ts ***!
  \****************************************************************/
/*! exports provided: ClienteShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteShowComponent", function() { return ClienteShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClienteShowComponent = /** @class */ (function () {
    function ClienteShowComponent() {
    }
    ClienteShowComponent.prototype.ngOnInit = function () {
    };
    ClienteShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-show',
            template: __webpack_require__(/*! ./cliente-show.component.html */ "./src/app/cliente/cliente-show/cliente-show.component.html"),
            styles: [__webpack_require__(/*! ./cliente-show.component.css */ "./src/app/cliente/cliente-show/cliente-show.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClienteShowComponent);
    return ClienteShowComponent;
}());



/***/ }),

/***/ "./src/app/financeiro/financeiro.component.css":
/*!*****************************************************!*\
  !*** ./src/app/financeiro/financeiro.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/financeiro/financeiro.component.html":
/*!******************************************************!*\
  !*** ./src/app/financeiro/financeiro.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  financeiro works!\n</p>\n"

/***/ }),

/***/ "./src/app/financeiro/financeiro.component.ts":
/*!****************************************************!*\
  !*** ./src/app/financeiro/financeiro.component.ts ***!
  \****************************************************/
/*! exports provided: FinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroComponent", function() { return FinanceiroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinanceiroComponent = /** @class */ (function () {
    function FinanceiroComponent() {
    }
    FinanceiroComponent.prototype.ngOnInit = function () {
    };
    FinanceiroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financeiro',
            template: __webpack_require__(/*! ./financeiro.component.html */ "./src/app/financeiro/financeiro.component.html"),
            styles: [__webpack_require__(/*! ./financeiro.component.css */ "./src/app/financeiro/financeiro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceiroComponent);
    return FinanceiroComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight\">\n  <div class=\"hero-body\">\n      <div class=\"container has-text-centered\">\n          <div class=\"column is-4 is-offset-4\">\n              <h3 class=\"title has-text-grey\">Apontador!</h3>\n              <p class=\"subtitle has-text-grey\">Digite seus dados para entrar</p>\n              <div class=\"box\">\n                  <figure class=\"avatar\">\n                      <img src=\"../assets/images/torrenegra.png\">\n                  </figure>\n                  <div class=\"errors\">\n                    <p *ngIf=\"errors.email\" >  {{ errors.email.message }} </p>\n                    <p *ngIf=\"errors.senha\"> {{ errors.senha.message }} </p>        \n                  </div>\n                  <form name=\"form\" (submit)=\"login()\" #formData=\"ngForm\"> \n                      <div class=\"field\">\n                          <div class=\"control\">\n                              <input class=\"input is-large\"\n                               type=\"email\" \n                               placeholder=\"Seu Email\" \n                               autofocus=\"\"\n                               name=\"email\" \n                               required\n                               [(ngModel)]=\"usuario.email\" \n                               #email=\"ngModel\"  \n                              />\n                          </div>\n                      </div>\n\n                      <div class=\"field\">\n                          <div class=\"control\">\n                              <input class=\"input is-large\" \n                              type=\"password\" \n                              placeholder=\"Sua Senha\"\n                              name=\"senha\" \n                              required\n                              [(ngModel)]=\"usuario.senha\" \n                              #senha=\"ngModel\" \n                             />\n                          </div>\n                      </div>\n                      <div class=\"field\">\n                          <label class=\"checkbox\">\n                              <input type=\"checkbox\">\n                                  Lembrar a Senha\n                          </label>\n                      </div>\n                  <button type=\"submit\" class=\"button is-block is-info is-large is-fullwidth\" [disabled]=\"formData.invalid\">Entrar</button>\n                  </form>\n              </div>\n              <p class=\"has-text-grey\">\n                \n                  <a href=\"../\">Esqueci minha Senha</a> &nbsp;·&nbsp;\n                  <a href=\"../\">Ajuda?</a>\n              </p>\n          </div>\n      </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _usuarioService) {
        this.router = router;
        this._usuarioService = _usuarioService;
        this.usuario = {
            email: '',
            senha: ''
        };
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.usuario = { email: "", senha: "" };
        console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._usuarioService.login(this.usuario, function (res) {
            if (res.errors) {
                console.log('ERRO em login');
                _this.errors = res.errors;
                _this.router.navigate(['/']);
            }
            else {
                console.log('SUCESSO em login');
                if (_this.usuario.email == "admin@torrenegra.com.br") {
                    _this.router.navigate(['/projetos']);
                }
                else {
                    _this.router.navigate(['/apontamentos']);
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaginaNaoEncontradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function() { return PaginaNaoEncontradaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginaNaoEncontradaComponent = /** @class */ (function () {
    function PaginaNaoEncontradaComponent(location) {
        this.location = location;
    }
    PaginaNaoEncontradaComponent.prototype.goBack = function () {
        this.location.back();
    };
    PaginaNaoEncontradaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<h2>Pagagina n\u00E3o encontrada ;|</h2>\n             <div>\n                <button (click)=\"goBack()\">Retornar</button>\n\t     </div>\n        "
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PaginaNaoEncontradaComponent);
    return PaginaNaoEncontradaComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-edit/projeto-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/projeto/projeto-edit/projeto-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto/projeto-edit/projeto-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-edit/projeto-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projeto-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/projeto/projeto-edit/projeto-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projeto/projeto-edit/projeto-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjetoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoEditComponent", function() { return ProjetoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjetoEditComponent = /** @class */ (function () {
    function ProjetoEditComponent() {
    }
    ProjetoEditComponent.prototype.ngOnInit = function () {
    };
    ProjetoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-edit',
            template: __webpack_require__(/*! ./projeto-edit.component.html */ "./src/app/projeto/projeto-edit/projeto-edit.component.html"),
            styles: [__webpack_require__(/*! ./projeto-edit.component.css */ "./src/app/projeto/projeto-edit/projeto-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjetoEditComponent);
    return ProjetoEditComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-list/projeto-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/projeto/projeto-list/projeto-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n    text-align: right;\n}\np {\n    font-size: 0.9em;\n}\n.errors{\n    width: inherit;\n    height: 40px;\n    display: block;\n    margin: 0px auto;\n    color: red;\n}\nbutton {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/projeto/projeto-list/projeto-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-list/projeto-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Cadastro\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"usuario/list\">Usuário</a>\n          <a class=\"dropdown-item\" href=\"cliente/list\">Cliente</a>\n          <!-- <div class=\"dropdown-divider\"></div> -->\n          <!-- <a class=\"dropdown-item\" href=\"#\">Projeto</a> -->\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"apontamento\">Apontamento</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"financeiro\">Financeiro</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Relatório\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"relatorio/financeiro\">Financeiro</a>\n          <a class=\"dropdown-item\" href=\"#\">Total de horas por projeto</a>\n          <a class=\"dropdown-item\" href=\"#\">Total de horas por funcionário</a>\n          <a class=\"dropdown-item\" href=\"#\">Custo por pedido</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Projetos encerrados</a>\n        </div>\n      </li>\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n\n<div class=\"box\">\n  <nav class=\"level\">\n    <div class=\"level-left\">\n        <div class=\"title is-4\">Projetos</div> \n    </div>\n    <div class=\"level-right\">\n        <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/projeto/novo']\">Novo projeto</button>\n    </div> \n  </nav>\n  <article class=\"media\">\n    <div class=\"media-content\">\n      <div class=\"content\">\n\n        <br>\n        <div id=\"scroll\">\n          <table class=\"table table-hover\" align=\"left\">\n            <thead>\n                <tr class=\"table-primary d-flex\">\n                  <th class=\"col-1\">Código</th>\n                  <th class=\"col-3\">Descrição</th>\n                  <th class=\"col-2\">Cliente</th>\n                  <th class=\"col-2\">Pedido</th>\n                  <th class=\"col-1\">Ação</th>\n                  <th class=\"col-1\"> </th>\n                </tr>\n              </thead>\n              <tbody>\n\n                <tr *ngFor=\"let projeto of projetos\" class=\"d-flex\">\n                  <td class=\"col-1\">{{ projeto['codigo'] }}</td>\n                  <td class=\"col-3\">{{ projeto['descricao'] }}</td>\n                  <td class=\"col-2\">{{ projeto['cliente'] }}</td>\n                  <td class=\"col-2\">{{ projeto['pedido'] }}</td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/edit/', projeto['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                  <td class=\"col-1\"><button type=\"button\" (click)=\"encerrar()\"  class=\"button is-danger\">Encerrar</button></td>\n                </tr>\n              </tbody>\n            </table> \n          </div>    \n        </div>\n      </div>\n    </article>\n  </div>\n"

/***/ }),

/***/ "./src/app/projeto/projeto-list/projeto-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projeto/projeto-list/projeto-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjetoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoListComponent", function() { return ProjetoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetoListComponent = /** @class */ (function () {
    function ProjetoListComponent(_projetoService, _router) {
        this._projetoService = _projetoService;
        this._router = _router;
    }
    ProjetoListComponent.prototype.ngOnInit = function () {
        this.obterProjetoList();
    };
    ProjetoListComponent.prototype.obterProjetoList = function () {
        var _this = this;
        console.log('ProjetoListComponent > obterProjetoList()');
        var projetoObservable = this._projetoService.obterTodos();
        projetoObservable.subscribe(function (projetos) {
            _this.projetos = projetos.json();
        }, function (err) { }, function () { });
    };
    ProjetoListComponent.prototype.encerrar = function (id) {
        var _this = this;
        this._projetoService.encerrarProjeto(id, function (res) {
            // this.projetos = res;
            console.log('projetos:', _this.projetos);
        });
    };
    ProjetoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-list',
            template: __webpack_require__(/*! ./projeto-list.component.html */ "./src/app/projeto/projeto-list/projeto-list.component.html"),
            styles: [__webpack_require__(/*! ./projeto-list.component.css */ "./src/app/projeto/projeto-list/projeto-list.component.css")]
        }),
        __metadata("design:paramtypes", [_projeto_service__WEBPACK_IMPORTED_MODULE_1__["ProjetoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjetoListComponent);
    return ProjetoListComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-novo/projeto-novo.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/projeto/projeto-novo/projeto-novo.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 10px;\n}\n.purple {\n    color: purple;\n    margin: 0px 0px 30px 60px;\n}"

/***/ }),

/***/ "./src/app/projeto/projeto-novo/projeto-novo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-novo/projeto-novo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"projetos\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  \n  <div class=\"container\">\n    <form (submit)='criarProjeto(projCreateForm)' #projCreateForm='ngForm'>\n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Código</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input is-focused\" \n              type=\"text\" \n              name=\"codigo\" \n              minlength=4\n              required\n              [(ngModel)]=\"projeto.codigo\"\n              #codigo=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.codigo.valid\" class=\"purple\">* Código precisar ter 7 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Descrição</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"descricao\" \n            minlength=8\n            required\n            [(ngModel)]=\"projeto.descricao\"\n            #descricao=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.descricao.valid\" class=\"purple\">Descrição do projeto precisar ter no mínimo 8 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Cliente</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"cliente\" \n            minlength=4\n            required\n            [(ngModel)]=\"projeto.cliente\"\n            #cliente=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.cliente.valid\" class=\"purple\">Cliente precisar ter no mínimo 6 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Pedido</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input\" \n            type=\"text\" \n            name=\"pedido\" \n            required\n            [(ngModel)]=\"projeto.pedido\"\n            #pedido=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.pedido.valid\" class=\"purple\">Pedido do projeto precisar ter no mínimo 4 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Horas PLC</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"horasPLC\" \n            [(ngModel)]=\"projeto.horasPLC\"\n            #horasPLC=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!horasPLC.valid\" class=\"purple\">horasPLC precisar ter no mínimo 4 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Horas IHM</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"horasIHM\" \n            [(ngModel)]=\"projeto.horasIHM\"\n            #descricao=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!horasIHM.valid\" class=\"purple\">horasIHM do projeto precisar ter no mínimo 8 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Valor Terceiros</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"valorTerceiros\" \n            [(ngModel)]=\"projeto.valorTerceiros\"\n            #valorTerceiros=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!valorTerceiros.valid\" class=\"purple\">valorTerceiros precisar ter no mínimo 4 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n      <label class=\"label\">Valor Materiais</label>\n      </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"valorMateriais\" \n              [(ngModel)]=\"projeto.valorMateriais\"\n              #valorMateriais=\"ngModel\"\n              />\n            </p>\n          </div>\n      </div>\n    </div>\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n      <label class=\"label\">Valor Viagens</label>\n      </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"valorViagens\" \n              [(ngModel)]=\"projeto.valorViagens\"\n              #valorViagens=\"ngModel\"\n              />\n            </p>\n          </div>\n      </div>\n    </div>\n  \n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"projCreateForm.invalid\">Confirma</button>\n  \n          <!-- <div class=\"errors\">\n            <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n            <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n          </div> -->\n  \n    </form>\n  </div>  "

/***/ }),

/***/ "./src/app/projeto/projeto-novo/projeto-novo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projeto/projeto-novo/projeto-novo.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjetoNovoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoNovoComponent", function() { return ProjetoNovoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetoNovoComponent = /** @class */ (function () {
    function ProjetoNovoComponent(_usuarioService, _projetoService) {
        this._usuarioService = _usuarioService;
        this._projetoService = _projetoService;
        this.projeto = {
            codigo: "",
            descricao: "",
            cliente: "",
            pedido: 0,
            horasPLC: 0,
            horasIHM: 0,
            valorTerceiros: 0,
            valorMateriais: 0,
            valorViagens: 0
        };
    }
    ProjetoNovoComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.usuario;
        console.log('entrando em novo projeto: ', this.usuario);
    };
    ProjetoNovoComponent.prototype.criarProjeto = function (projForm) {
        var _this = this;
        console.log('ProjetoNovoComponent > novoProjeto(nProjForm)', projForm);
        var observable = this._projetoService.criarProjeto(projForm.value);
        observable.subscribe(function (res) {
            console.log('res', res)
                ,
                    function (error) {
                        error.callback = function () { return _this.projeto; };
                        throw error;
                    };
        });
        projForm.resetForm();
    };
    ProjetoNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-novo',
            template: __webpack_require__(/*! ./projeto-novo.component.html */ "./src/app/projeto/projeto-novo/projeto-novo.component.html"),
            styles: [__webpack_require__(/*! ./projeto-novo.component.css */ "./src/app/projeto/projeto-novo/projeto-novo.component.css")]
        }),
        __metadata("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"]])
    ], ProjetoNovoComponent);
    return ProjetoNovoComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-show/projeto-show.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/projeto/projeto-show/projeto-show.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto/projeto-show/projeto-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-show/projeto-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"projeto/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <article class=\"media\">\n    <div class=\"media-content\">\n      <div class=\"content\">\n\n        <br>\n        <div id=\"scroll\">\n          <table class=\"table table-hover\" align=\"left\">\n            <thead>\n                <tr class=\"table-primary d-flex\">\n                  <th class=\"col-1\">Código</th>\n                  <th class=\"col-3\">Descrição</th>\n                  <th class=\"col-2\">Cliente</th>\n                  <th class=\"col-2\">Pedido</th>\n                  <th class=\"col-1\">Ação</th>\n                  <th class=\"col-1\"> </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let projeto of projetos\" class=\"d-flex\">\n                  <td class=\"col-1\">{{ projeto['codigo'] }}</td>\n                  <td class=\"col-3\">{{ projeto['descricao'] }}</td>\n                  <td class=\"col-2\">{{ projeto['cliente'] }}</td>\n                  <td class=\"col-2\">{{ projeto['pedido'] }}</td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/edit/', projeto['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/show', projeto['_id'] ]\"  class=\"button is-danger\">Encerrar</button></td>\n                </tr>\n              </tbody>\n            </table> \n          </div>    \n        </div>\n      </div>\n    </article>\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n  <button type=\"button\" class=\"btn btn-primary\"(click)=\"encerrar()\">Confirma</button>\n\n        <!-- <div class=\"errors\">\n          <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n          <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n        </div> -->\n</div>  "

/***/ }),

/***/ "./src/app/projeto/projeto-show/projeto-show.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projeto/projeto-show/projeto-show.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjetoShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoShowComponent", function() { return ProjetoShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetoShowComponent = /** @class */ (function () {
    function ProjetoShowComponent(_router, _projetoService) {
        this._router = _router;
        this._projetoService = _projetoService;
    }
    ProjetoShowComponent.prototype.ngOnInit = function () {
    };
    ProjetoShowComponent.prototype.encerrar = function () {
        var _this = this;
        console.log('projeto em showProjeto: ', this.projeto);
        this._projetoService.encerrarProjeto(this.projeto, function (res) {
            _this._router.navigate(['projeto/list', res]);
        });
    };
    ProjetoShowComponent.prototype.cancel = function () {
        this._router.navigate(['/projeto/list']);
    };
    ProjetoShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-show',
            template: __webpack_require__(/*! ./projeto-show.component.html */ "./src/app/projeto/projeto-show/projeto-show.component.html"),
            styles: [__webpack_require__(/*! ./projeto-show.component.css */ "./src/app/projeto/projeto-show/projeto-show.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"]])
    ], ProjetoShowComponent);
    return ProjetoShowComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto.service.ts":
/*!********************************************!*\
  !*** ./src/app/projeto/projeto.service.ts ***!
  \********************************************/
/*! exports provided: ProjetoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoService", function() { return ProjetoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjetoService = /** @class */ (function () {
    function ProjetoService(_http) {
        this._http = _http;
    }
    ProjetoService.prototype.obterApontamentos = function (apontamentos) {
        this._http.get('/apontamento/list').subscribe(function (res) {
            console.log('SUCESSO lendo apontamento: ', res.json());
            apontamentos(res.json());
        }, function (err) {
            console.log('ERRO lendo apontamento: ', err);
        });
    };
    ProjetoService.prototype.obterTodos = function () {
        console.log('ProjetoService > obterTodos()');
        return this._http.get('/projetos');
    };
    ProjetoService.prototype.criarProjeto = function (projeto) {
        console.log('ProjetoService > criarProjeto(projeto)', projeto);
        return this._http.post('projeto/novo', projeto);
    };
    ProjetoService.prototype.encerrarProjeto = function (id, callback) {
        this._http.put('/projeto/encerrar,' + id, this.projeto).subscribe(function (res) {
            console.log('SUCESSO no encerramento do projeto: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERRO no encerramento do projeto: ', err);
        });
    };
    ProjetoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProjetoService);
    return ProjetoService;
}());



/***/ }),

/***/ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  relatorio-financeiro works!\n</p>\n"

/***/ }),

/***/ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RelatorioFinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioFinanceiroComponent", function() { return RelatorioFinanceiroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelatorioFinanceiroComponent = /** @class */ (function () {
    function RelatorioFinanceiroComponent() {
    }
    RelatorioFinanceiroComponent.prototype.ngOnInit = function () {
    };
    RelatorioFinanceiroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relatorio-financeiro',
            template: __webpack_require__(/*! ./relatorio-financeiro.component.html */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.html"),
            styles: [__webpack_require__(/*! ./relatorio-financeiro.component.css */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RelatorioFinanceiroComponent);
    return RelatorioFinanceiroComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-edit/usuario-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario/usuario-edit/usuario-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/usuario/usuario-edit/usuario-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-edit/usuario-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  usuario-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/usuario/usuario-edit/usuario-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario/usuario-edit/usuario-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioEditComponent", function() { return UsuarioEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioEditComponent = /** @class */ (function () {
    function UsuarioEditComponent() {
    }
    UsuarioEditComponent.prototype.ngOnInit = function () {
    };
    UsuarioEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-edit',
            template: __webpack_require__(/*! ./usuario-edit.component.html */ "./src/app/usuario/usuario-edit/usuario-edit.component.html"),
            styles: [__webpack_require__(/*! ./usuario-edit.component.css */ "./src/app/usuario/usuario-edit/usuario-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioEditComponent);
    return UsuarioEditComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-list/usuario-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario/usuario-list/usuario-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/usuario/usuario-list/usuario-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-list/usuario-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"projeto/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  \n  <div class=\"container\">\n      <nav class=\"level\">\n        <div class=\"level-left\">\n            <div class=\"title is-4\">Usuário</div> \n        </div>\n        <div class=\"level-right\">\n            <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/usuario/novo']\">Novo usuário</button>\n        </div> \n      </nav>\n    <article class=\"media\">\n      <div class=\"media-content\">\n        <div class=\"content\">\n  \n          <br>\n          <div id=\"scroll\">\n            <table class=\"table table-hover\" align=\"left\">\n              <thead>\n                  <tr class=\"table-primary d-flex\">\n                    <th class=\"col-3\">Nome</th>\n                    <th class=\"col-3\">Função</th>\n                    <th class=\"col-2\">Custo/hora</th>\n                    <th class=\"col-2\">Admin</th>\n                    <th class=\"col-1\">Ação</th>\n                    <th class=\"col-1\"> </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let usuario of usuarios\" class=\"d-flex\">\n                    <td class=\"col-3\">{{ usuario['nome'] }}</td>\n                    <td class=\"col-3\">{{ usuario['funcao'] }}</td>\n                    <td class=\"col-2\">{{ usuario['custo'] | number : '1.2-2' }}</td>\n                    <td class=\"col-2\">{{ usuario['admin'] }}</td>\n                    <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/usuario/edit/', usuario['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                    <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/usuario/show', usuario['_id'] ]\"  class=\"button is-danger\">Detalhes</button></td>\n                  </tr>\n                </tbody>\n              </table> \n            </div>    \n          </div>\n        </div>\n      </article>\n  </div>\n    \n  \n  "

/***/ }),

/***/ "./src/app/usuario/usuario-list/usuario-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario/usuario-list/usuario-list.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioListComponent", function() { return UsuarioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioListComponent = /** @class */ (function () {
    function UsuarioListComponent() {
    }
    UsuarioListComponent.prototype.ngOnInit = function () {
    };
    UsuarioListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-list',
            template: __webpack_require__(/*! ./usuario-list.component.html */ "./src/app/usuario/usuario-list/usuario-list.component.html"),
            styles: [__webpack_require__(/*! ./usuario-list.component.css */ "./src/app/usuario/usuario-list/usuario-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioListComponent);
    return UsuarioListComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-novo/usuario-novo.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario/usuario-novo/usuario-novo.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/usuario/usuario-novo/usuario-novo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-novo/usuario-novo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Torre Negra</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"usuario/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <div class=\"container\">\n  \n  <form (submit)=\"addUsuario()\" #formData=\"ngForm\" id=\"newUsuarioForm\">\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Nome</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input is-focused\" \n            type=\"text\" \n            name=\"nome\" \n            minlength=4\n            required\n            [(ngModel)]=\"usuario.nome\"\n            #nome=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!codigo.valid\" class=\"purple\">Código precisar ter no mínimo 4 caracteres!</div> -->\n   \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">e-mail</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input is-focused\" \n            type=\"text\" \n            name=\"email\" \n            minlength=6\n            required\n            pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n            [(ngModel)]=\"usuario.email\"\n            #email=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n<!-- <div *ngIf=\"!codigo.valid\" class=\"purple\">Código precisar ter no mínimo 4 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Função</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"funcao\" \n          minlength=4\n          required\n          [(ngModel)]=\"usuario.funcao\"\n          #funcao=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!cliente.valid\" class=\"purple\">Função precisar ter no mínimo 4 caracteres!</div> -->\n  \n  \n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Custo hora</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"custoHora\" \n          minlength=8\n          required\n          [(ngModel)]=\"usuario.custoHora\"\n          #custoHora=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"field is-horizontal\">\n    <label class=\"checkbox\">\n        <input type=\"checkbox\">\n       &nbsp; Adminstrador  \n    </label>\n  </div>\n  \n  \n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formData.invalid\">Confirma</button>\n  \n        <!-- <div class=\"errors\">\n          <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n          <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n        </div> -->\n  \n  </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/usuario/usuario-novo/usuario-novo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario/usuario-novo/usuario-novo.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioNovoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioNovoComponent", function() { return UsuarioNovoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioNovoComponent = /** @class */ (function () {
    function UsuarioNovoComponent() {
    }
    UsuarioNovoComponent.prototype.ngOnInit = function () {
    };
    UsuarioNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-novo',
            template: __webpack_require__(/*! ./usuario-novo.component.html */ "./src/app/usuario/usuario-novo/usuario-novo.component.html"),
            styles: [__webpack_require__(/*! ./usuario-novo.component.css */ "./src/app/usuario/usuario-novo/usuario-novo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioNovoComponent);
    return UsuarioNovoComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-show/usuario-show.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario/usuario-show/usuario-show.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/usuario/usuario-show/usuario-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-show/usuario-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  usuario-show works!\n</p>\n"

/***/ }),

/***/ "./src/app/usuario/usuario-show/usuario-show.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario/usuario-show/usuario-show.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioShowComponent", function() { return UsuarioShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioShowComponent = /** @class */ (function () {
    function UsuarioShowComponent() {
    }
    UsuarioShowComponent.prototype.ngOnInit = function () {
    };
    UsuarioShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-show',
            template: __webpack_require__(/*! ./usuario-show.component.html */ "./src/app/usuario/usuario-show/usuario-show.component.html"),
            styles: [__webpack_require__(/*! ./usuario-show.component.css */ "./src/app/usuario/usuario-show/usuario-show.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioShowComponent);
    return UsuarioShowComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.service.ts":
/*!********************************************!*\
  !*** ./src/app/usuario/usuario.service.ts ***!
  \********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioService = /** @class */ (function () {
    function UsuarioService(_http) {
        this._http = _http;
        this.isUserLoggedIn = false;
    }
    UsuarioService.prototype.login = function (usuario, callback) {
        this.usuario = usuario;
        console.log('LOGIN success: ', this.usuario);
        callback(this.usuario);
    };
    UsuarioService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UsuarioService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fmrocha/Dojo/MEAN/torrenegraDeploy/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
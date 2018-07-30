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

/***/ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\"> \n\n  <nav class=\"level\">\n      <div class=\"level-left\">\n          <div class=\"title is-4\">Apontamentos Projeto</div>\n      </div>\n      <div class=\"level-right\">\n          <button mat-stroked-button color=\"primary\" style=\"margin-top: 15px;\" [routerLink]=\"['/apontamento/novo']\">Novo apontamento</button>\n      </div> \n  </nav>\n  <p>Olá {{ usuarioLogado }}</p>\n\n  <mat-tab-group>\n    <div class=\"container\"> \n      <!-- <mat-tab label=\"Hora\" *ngIf=\"apontamentos.hora.inicio\"> -->\n      <mat-tab label=\"Hora\">\n        <apontamento-lista-hora></apontamento-lista-hora>\n      </mat-tab>\n      <mat-tab label=\"Despesa\">\n          <apontamento-lista-despesa></apontamento-lista-despesa>\n      </mat-tab>        \n    </div>\n  </mat-tab-group>\n</div>\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ApontamentoDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoDashboardComponent", function() { return ApontamentoDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApontamentoDashboardComponent = /** @class */ (function () {
    function ApontamentoDashboardComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
    }
    ApontamentoDashboardComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ApontamentoDashboardComponent > usuariologado ', this.usuarioLogado.email);
    };
    ApontamentoDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apontamento-dashboard',
            template: __webpack_require__(/*! ./apontamento-dashboard.component.html */ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./apontamento-dashboard.component.scss */ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], ApontamentoDashboardComponent);
    return ApontamentoDashboardComponent;
}());



/***/ }),

/***/ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      \n      <!-- Codigo Column -->\n      <ng-container matColumnDef=\"codigo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> código </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.codigo}} </td>\n      </ng-container> \n \n      <!-- Descricao Column -->\n      <ng-container matColumnDef=\"descricao\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> descricao </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.descricao}} </td>\n      </ng-container> \n \n      <!-- Despesa Descrição Column -->\n      <ng-container matColumnDef=\"descricaoDespesa\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> despesa </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.despesa.descricao}} </td>\n      </ng-container> \n \n      <!-- Despesa Valor Column -->\n      <ng-container matColumnDef=\"despesaValor\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> valor </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.despesa.valor}} </td>\n        </ng-container> \n \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApontamentoListaDespesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoListaDespesaComponent", function() { return ApontamentoListaDespesaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Router } from '@angular/router';



var ApontamentoListaDespesaComponent = /** @class */ (function () {
    function ApontamentoListaDespesaComponent(_projetoService, _usuarioService, dialog) {
        this._projetoService = _projetoService;
        this._usuarioService = _usuarioService;
        this.dialog = dialog;
        this.displayedColumns = ['codigo', 'descricao', 'descricaoDespesa', 'despesaValor'];
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.apontamentos = [{
                codigo: "",
                descricao: "",
                despesa: {
                    descricao: "",
                    valor: ""
                },
                _projeto: ""
            }];
    }
    ApontamentoListaDespesaComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ApontamentoListaDespesaComponent > usuariologado', this.usuarioLogado.email);
        this.obterListaApontamento();
    };
    ApontamentoListaDespesaComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ApontamentoListaDespesaComponent.prototype.obterListaApontamento = function () {
        var _this = this;
        console.log('ApontamentoListaDespesaComponent > obterListaApontamento()', this.usuarioLogado);
        var apontObservable = this._projetoService.obterApontamentosDespesa(this.usuarioLogado);
        apontObservable.subscribe(function (apontamentos) {
            _this.apontamentos = apontamentos.json();
            // console.log('ApontamentoListaDespesaComponent > obterListaApontamento() > apontamentos ', this.apontamentos)
            for (var i = 0; i < _this.apontamentos.length; i++) {
                _this.obterProjeto(_this.apontamentos[i]._projeto, i);
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.apontamentos);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () { });
    };
    ApontamentoListaDespesaComponent.prototype.obterProjeto = function (id, i) {
        var _this = this;
        console.log('ApontamentoListaDespesaComponent > obterProjeto()', id, i);
        var observable = this._projetoService.obterProjetoById(id);
        observable.subscribe(function (response) {
            _this.projeto = response.json();
            // console.log('ApontamentoListaDespesaComponent > obterProjeto() > this.projeto', this.projeto.apontamentos);
            _this.apontamentos[i].codigo = _this.projeto.codigo;
            _this.apontamentos[i].descricao = _this.projeto.descricao;
        }, function (err) { }, function () { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ApontamentoListaDespesaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ApontamentoListaDespesaComponent.prototype, "sort", void 0);
    ApontamentoListaDespesaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apontamento-lista-despesa',
            template: __webpack_require__(/*! ./apontamento-lista-despesa.component.html */ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.html"),
            styles: [__webpack_require__(/*! ./apontamento-lista-despesa.component.scss */ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.scss")]
        }),
        __metadata("design:paramtypes", [_projeto_projeto_service__WEBPACK_IMPORTED_MODULE_1__["ProjetoService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ApontamentoListaDespesaComponent);
    return ApontamentoListaDespesaComponent;
}());



/***/ }),

/***/ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <!-- {{ apontamentos[0] | json }} -->\n  <div class=\"mat-elevation-z8 linha\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Codigo Column -->\n      <ng-container matColumnDef=\"codigo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> código </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.codigo}} </td>\n      </ng-container>\n  \n      <!-- Descricao Column -->\n      <ng-container matColumnDef=\"descricao\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> descricao </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.descricao}} </td>\n      </ng-container>\n  \n      <!-- Inicio Column -->\n      <ng-container matColumnDef=\"inicio\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> início </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.hora.inicio | date:\"MMM d, y H:mm:ss\"}} </td>\n      </ng-container>\n  \n    <!-- Ação Column -->\n    <ng-container matColumnDef=\"acao\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ação </th>\n        <td mat-cell *matCellDef=\"let row\"> \n          <div class=\"button-row\">\n            <button mat-button color=\"warn\" style=\"margin-top: -15px\" (click)=\"openDialog(row)\">encerrar</button>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ApontamentoListaHoraComponent, DialogApontamentoHora */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoListaHoraComponent", function() { return ApontamentoListaHoraComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogApontamentoHora", function() { return DialogApontamentoHora; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ApontamentoListaHoraComponent = /** @class */ (function () {
    function ApontamentoListaHoraComponent(_projetoService, _usuarioService, dialog) {
        this._projetoService = _projetoService;
        this._usuarioService = _usuarioService;
        this.dialog = dialog;
        this.displayedColumns = ['codigo', 'descricao', 'inicio', 'acao'];
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.apontamentos = [{
                _id: "",
                _projeto: "",
                usuario: "",
                codigo: "",
                descricao: "",
                hora: {
                    inicio: ""
                },
                acao: ""
            }];
    }
    ApontamentoListaHoraComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ApontamentoListaHoraComponent > usuariologado ', this.usuarioLogado.email);
        this.obterListaApontamento();
    };
    ApontamentoListaHoraComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ApontamentoListaHoraComponent.prototype.obterListaApontamento = function () {
        var _this = this;
        console.log('ApontamentoListaHoraComponent > obterListaApontamento()', this.usuarioLogado);
        var apontObservable = this._projetoService.obterApontamentosHora(this.usuarioLogado);
        apontObservable.subscribe(function (apontamentos) {
            _this.apontamentos = apontamentos.json();
            // console.log('ApontamentoListaHoraComponent > obterListaApontamento() > apontamentos ', this.apontamentos)
            for (var i = 0; i < _this.apontamentos.length; i++) {
                _this.obterProjeto(_this.apontamentos[i]._projeto, i);
            }
            // console.log('D E P O I S >>>> >>>> >>>ApontamentoListaHoraComponent > obterListaApontamento() > apontamentos ', this.apontamentos)
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.apontamentos);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () { });
    };
    ApontamentoListaHoraComponent.prototype.obterProjeto = function (id, i) {
        var _this = this;
        console.log('ApontamentoListaHoraComponent > obterProjeto()');
        var observable = this._projetoService.obterProjetoById(id);
        observable.subscribe(function (response) {
            _this.projeto = response.json();
            // console.log('ApontamentoListaHoraComponent > obterProjeto() > this.projeto', this.projeto.apontamentos.length, this.projeto );
            _this.apontamentos[i].descricao = _this.projeto.descricao;
            _this.apontamentos[i].codigo = _this.projeto.codigo;
        }, function (err) { }, function () { });
    };
    ApontamentoListaHoraComponent.prototype.openDialog = function (projeto) {
        var _this = this;
        console.log('ApontamentoListaHoraComponent > openDialog(projeto)', projeto);
        var dialogRef = this.dialog.open(DialogApontamentoHora, {
            width: '350px',
            data: {
                id: projeto._id,
                codigo: projeto.codigo,
                descricao: projeto.descricao,
                inicio: projeto.hora.inicio,
                fim: new Date(),
                usuario: this.usuarioLogado
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            console.log('The dialog was closed');
            _this.obterListaApontamento();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ApontamentoListaHoraComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ApontamentoListaHoraComponent.prototype, "sort", void 0);
    ApontamentoListaHoraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apontamento-lista-hora',
            template: __webpack_require__(/*! ./apontamento-lista-hora.component.html */ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.html"),
            styles: [__webpack_require__(/*! ./apontamento-lista-hora.component.scss */ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.scss")]
        }),
        __metadata("design:paramtypes", [_projeto_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ApontamentoListaHoraComponent);
    return ApontamentoListaHoraComponent;
}());

var DialogApontamentoHora = /** @class */ (function () {
    function DialogApontamentoHora(_projetoService, _router, dialogRef, data) {
        this._projetoService = _projetoService;
        this._router = _router;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogApontamentoHora.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogApontamentoHora.prototype.encerrarApontamento = function (data) {
        var _this = this;
        console.log('DialogApontamentoHora >  encerrarApontamento(data) ', data);
        var dialogObservable = this._projetoService.encerrarApontamento(data);
        dialogObservable.subscribe(function (res) {
            console.log('The dialog called encerrar apontamento!', res);
            _this.dialogRef.close();
        }, function (err) { }, function () { });
    };
    DialogApontamentoHora = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ../popup/popup.component.html */ "./src/app/apontamento/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ../popup/popup.component.scss */ "./src/app/apontamento/popup/popup.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_projeto_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], DialogApontamentoHora);
    return DialogApontamentoHora;
}());



/***/ }),

/***/ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-novo/apontamento-novo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <!-- <a class=\"navbar-brand\" href=\"#\">Torre Negra</a> -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n<div class=\"level-left\">\n    <div style=\"margin: 20px, 0px, 20px, 0px;\" class=\"title is-4\">Apontamento</div> \n</div>\n\n\n<form  #formData=\"ngForm\" [formGroup]=\"options\">\n\n\n  <div class=\"example-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Selecione o projeto\" name=\"projeto\" formControlName=\"projeto\" required>\n          <mat-option value=\"option\" *ngFor=\"let p of projetos\" [value]=\"p._id\"> {{ p.codigo }} {{ p.descricao }}</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\"></mat-hint>\n      </mat-form-field>\n\n        <div>\n          <mat-radio-group formControlName=\"tipo\" [value]=\"tipo\">\n            <mat-radio-button value=\"hora\">hora</mat-radio-button>&nbsp;\n            <mat-radio-button value=\"despesa\">despesa</mat-radio-button>\n          </mat-radio-group>&nbsp;&nbsp;\n\n          <mat-form-field *ngIf=\"(options.get('tipo').value=='despesa')\">\n              <mat-select placeholder=\"Selecione o tipo\"  formControlName=\"opDespesa\">\n                <mat-option value=\"alimentacao\"> alimentação</mat-option>\n                <mat-option value=\"hospedagem\"> hospedagem</mat-option>\n                <mat-option value=\"pedagio\"> pedágio</mat-option>\n                <mat-option value=\"transporte\"> transporte</mat-option>\n                <mat-option value=\"outros\"> outros</mat-option>\n              </mat-select>\n              <mat-hint align=\"end\"></mat-hint>\n          </mat-form-field>&nbsp;&nbsp;\n\n          <mat-form-field *ngIf=\"options.get('opDespesa').value=='outros'\" hintLabel=\"Max 20 caracteres\">\n              <input matInput formControlName=\"descricao\" #input maxlength=\"20\">\n              <mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n            </mat-form-field>&nbsp;&nbsp;\n\n          <mat-form-field *ngIf=\"(options.get('tipo').value=='despesa')\">\n            <input \n            formControlName=\"valor\"\n            matInput \n            placeholder=\"Valor\" \n            type=\"number\" \n            class=\"example-right-align\">\n            <span matPrefix>$&nbsp;</span>\n            <span matSuffix>.00</span>\n          </mat-form-field>&nbsp;&nbsp;\n\n          <mat-form-field *ngIf=\"(options.get('tipo').value=='hora')\" >\n            <mat-select placeholder=\"início\" formControlName=\"inicio\" > \n                <mat-option value=\"{{ today }}\">{{today | date:\"MMM d, y H:mm:ss\"}}</mat-option>\n              <!-- <mat-option value=\"{{ today | date:'MMM d, y H:mm' }}\">{{today | date:\"MMM d, y H:mm\"}}</mat-option> -->\n            </mat-select>\n          </mat-form-field>\n\n        </div>\n\n\n          <!-- <mat-form-field *ngIf=\"(valueTipo=='despesa')\"\n            formControlName=\"despesaValor\">\n            <input \n              matInput \n              placeholder=\"Valor\" \n              required\n              >\n          </mat-form-field> -->\n          <!-- {{ valueDespesa }} -->\n\n\n      <!-- </form> -->\n\n    </div>\n  </form>\n\n\n\n\n<!-- <div style=\"margin-top: 15px; width: 50%;\">\n        <ngbd-datepicker-popup></ngbd-datepicker-popup>\n    </div> -->\n\n\n\n\n    <!-- <h3>Tipo de apontamento</h3> -->\n    <!-- <div class=\"select is-multiple\"> -->\n        <!-- <select name=\"tipo\" [(ngModel)]=\"tipo\">\n          <option>Hora </option>\n          <option>Despesa </option>\n        </select> -->\n       \n    \n        <!-- Tipo de Apontamento: Despesa -->\n        <!-- <div class=\"control\" *ngIf=\"(tipo=='Despesa')\">\n          <div class=\"field is-horizontal\" style=\"margin-top: 20px;\" > -->\n            <!-- <select name=\"opcaoDespesa\" [(ngModel)]=\"opcaoDespesa\" > \n              <option>alimentação </option>\n              <option>hospedagem </option>\n              <option>pedágio </option>\n              <option>transporte </option>\n              <option>outros </option>\n            </select> -->\n           \n  \n          <!-- </div> -->\n              <!-- <div class=\"control\" *ngIf=\"opcaoDespesa=='outros'\">\n              <div class=\"field is-horizontal\">\n                <p class=\"control\">\n                  <textarea \n                  class=\"textarea is-warning\" \n                  type=\"text\" \n                  rows=\"2\"\n                  name=\"descricao\" \n                  placeholder=\"Descrição da despesa\"\n                  [(ngModel)]=\"apontamento.despesa.descricao\"\n                  #descricao=\"ngModel\">\n                  </textarea>\n                </p>\n              </div>\n          </div> -->\n          <!-- <div class=\"field is-horizontal\" >\n            <div class=\"field-body\">\n              <div class=\"field\">\n                <p class=\"control\">\n                  <input \n                  class=\"input\" \n                  type=\"text\" \n                  name=\"valor\" \n                  [(ngModel)]=\"apontamento.despesa.valor\"\n                  #valor=\"ngModel\"\n                  />\n                </p>\n              </div>\n            </div>\n          </div> -->\n        <!-- </div> -->\n        <!-- Tipo de Apontamento: Hora -->\n        <!-- <div *ngIf=\"(tipo=='Hora')\"> -->\n            <!-- <div style=\"border: solid 2px green; margin-top: 10px;  padding: 10px;\"> -->\n              <!-- <select name=\"inicio\" [(ngModel)]=\"apontamento.hora.inicio\" > \n                  <option>{{today | date:\"MMM d, y H:mm\"}}</option>\n                </select> -->\n                \n            <!-- </div> -->\n        <!-- </div> -->\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"setApontamento()\" [disabled]=\"formData.invalid\">Confirma</button>\n  \n      </div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-novo/apontamento-novo.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\nbutton {\n  margin: 10px; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-novo/apontamento-novo.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApontamentoNovoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoNovoComponent", function() { return ApontamentoNovoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




// import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';
var ApontamentoNovoComponent = /** @class */ (function () {
    function ApontamentoNovoComponent(fb, _projetoService, _usuarioService, _router) {
        this.fb = fb;
        this._projetoService = _projetoService;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('green');
        this.tipo = 'hora';
        this.projeto = '';
        this.opDespesa = '';
        this.descricao = '';
        this.inicio = '';
        this.fim = '';
        this.valor = 0;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.today = new Date();
        this.apontamento = {
            tipo: "",
            usuario: "",
            hora: {
                inicio: "",
                fim: ""
            },
            despesa: {
                descricao: "",
                valor: 0
            }
        };
        this.options = fb.group({
            tipo: ['hora'],
            projeto: [null],
            opDespesa: [null],
            descricao: [null],
            inicio: [null],
            fim: [null],
            valor: [null]
        });
    }
    ApontamentoNovoComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log(' ApontamentoNovoComponent > usuarioLogado ', this.usuarioLogado.email);
        this.apontamento.usuario = this.usuarioLogado;
        this.obterListaProjeto();
    };
    ApontamentoNovoComponent.prototype.obterListaProjeto = function () {
        var _this = this;
        console.log('ApontamentoNovoComponent > obterListaProjeto()');
        var projetoObservable = this._projetoService.obterTodos();
        projetoObservable.subscribe(function (projetos) {
            _this.projetos = projetos.json();
            console.log('projetos in List apontamentos:', _this.projetos);
        }, function (err) { }, function () { });
    };
    ApontamentoNovoComponent.prototype.setApontamento = function () {
        var _this = this;
        console.log('debug: - tipo ', this.options.value, this.options.controls.tipo.value);
        this.apontamento.tipo = this.options.controls.tipo.value;
        if (this.options.controls.tipo.value != 'hora') {
            this.apontamento.hora.inicio = "";
            this.apontamento.hora.fim = "";
        }
        else {
            this.apontamento.hora.inicio = this.options.controls.inicio.value;
            this.apontamento.hora.fim = "";
        }
        if (this.options.controls.tipo.value == 'despesa' && this.options.controls.opDespesa.value != 'outros') {
            this.apontamento.despesa.descricao = this.options.controls.opDespesa.value;
            this.apontamento.despesa.valor = this.options.controls.valor.value;
        }
        if (this.options.controls.tipo.value == 'despesa' && this.options.controls.opDespesa.value == 'outros') {
            this.apontamento.despesa.descricao = this.options.controls.descricao.value;
            this.apontamento.despesa.valor = this.options.controls.valor.value;
        }
        console.log('ApontamentoNovoComponent > setApontamento() >  this.apontamento, this.options', this.apontamento);
        var Observable = this._projetoService.apontamentoNovo(this.options.controls.projeto.value, this.apontamento);
        Observable.subscribe(function (projetos) {
            _this.projetos = projetos.json();
            _this._router.navigate(['/apontamentos']);
        }, function (err) { }, function () { });
    };
    ApontamentoNovoComponent.prototype.cancel = function () {
        this._router.navigate(['/apontamentos']);
    };
    ApontamentoNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apontamento-novo',
            template: __webpack_require__(/*! ./apontamento-novo.component.html */ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.html"),
            styles: [__webpack_require__(/*! ./apontamento-novo.component.scss */ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_1__["ProjetoService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApontamentoNovoComponent);
    return ApontamentoNovoComponent;
}());



/***/ }),

/***/ "./src/app/apontamento/popup/popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/apontamento/popup/popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<h3 mat-dialog-title>Encerrar Apontamento </h3>\n<h5>{{ data.usuario }}</h5>\n<p>{{ data.codigo }} {{ data.descricao }}</p>\n<p>Inicio: {{ data.inicio | date:\"MMM d, y H:mm:ss\" }}</p>\n<p>Fim: {{ data.fim | date:\"MMM d, y H:mm:ss\" }}</p>\n<br><br>\n<div mat-dialog-content>\n  <p>Confirma? </p>\n</div>\n<br><br>\n<div mat-dialog-actions>\n    <div class=\"button-row\">\n      <button style=\"margin: 10px;\" mat-mini-fab color=\"primary\" (click)=\"onNoClick()\"> não </button>\n      <button style=\"margin: 10px;\" mat-mini-fab color=\"warn\" (click)=\"encerrarApontamento(data)\" cdkFocusInitial> sim </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/apontamento/popup/popup.component.scss":
/*!********************************************************!*\
  !*** ./src/app/apontamento/popup/popup.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 150px;\n  height: auto; }\n"

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
/* harmony import */ var _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario/usuario-show/usuario-show.component */ "./src/app/usuario/usuario-show/usuario-show.component.ts");
/* harmony import */ var _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usuario/usuario-list/usuario-list.component */ "./src/app/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projeto/projeto-list/projeto-list.component */ "./src/app/projeto/projeto-list/projeto-list.component.ts");
/* harmony import */ var _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projeto/projeto-novo/projeto-novo.component */ "./src/app/projeto/projeto-novo/projeto-novo.component.ts");
/* harmony import */ var _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projeto/projeto-edit/projeto-edit.component */ "./src/app/projeto/projeto-edit/projeto-edit.component.ts");
/* harmony import */ var _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projeto/projeto-show/projeto-show.component */ "./src/app/projeto/projeto-show/projeto-show.component.ts");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cliente/cliente-list/cliente-list.component */ "./src/app/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cliente/cliente-novo/cliente-novo.component */ "./src/app/cliente/cliente-novo/cliente-novo.component.ts");
/* harmony import */ var _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cliente/cliente-edit/cliente-edit.component */ "./src/app/cliente/cliente-edit/cliente-edit.component.ts");
/* harmony import */ var _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cliente/cliente-show/cliente-show.component */ "./src/app/cliente/cliente-show/cliente-show.component.ts");
/* harmony import */ var _apontamento_apontamento_novo_apontamento_novo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./apontamento/apontamento-novo/apontamento-novo.component */ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./relatorio/relatorio-financeiro/relatorio-financeiro.component */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts");
/* harmony import */ var _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./global-error/global-error.component */ "./src/app/global-error/global-error.component.ts");
/* harmony import */ var _apontamento_apontamento_dashboard_apontamento_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./apontamento/apontamento-dashboard/apontamento-dashboard.component */ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.ts");
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
        path: 'apontamento/novo',
        component: _apontamento_apontamento_novo_apontamento_novo_component__WEBPACK_IMPORTED_MODULE_16__["ApontamentoNovoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'apontamentos',
        component: _apontamento_apontamento_dashboard_apontamento_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["ApontamentoDashboardComponent"],
        pathMatch: 'full'
    },
    {
        path: 'financeiro',
        component: _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_3__["FinanceiroComponent"],
        pathMatch: 'full'
    },
    {
        path: 'relatorio/financeiro',
        component: _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_18__["RelatorioFinanceiroComponent"],
        pathMatch: 'full'
    },
    {
        path: 'usuario/show/:id',
        component: _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioShowComponent"],
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
        path: 'usuarios',
        component: _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_7__["UsuarioListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'clientes',
        component: _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_12__["ClienteListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/novo',
        component: _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_13__["ClienteNovoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/edit/:id',
        component: _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_14__["ClienteEditComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cliente/show/:id',
        component: _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_15__["ClienteShowComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projetos',
        component: _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjetoListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projeto/novo',
        component: _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_9__["ProjetoNovoComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projeto/edit/:id',
        component: _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProjetoEditComponent"],
        pathMatch: 'full'
    },
    {
        path: 'projeto/show/:id',
        component: _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_11__["ProjetoShowComponent"],
        pathMatch: 'full'
    },
    {
        path: 'error',
        component: _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_19__["GlobalErrorComponent"]
    },
    {
        path: 'reset',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_17__["PaginaNaoEncontradaComponent"]
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <figure class=\"image is-128x128\">\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</figure> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global-error/global-error.component */ "./src/app/global-error/global-error.component.ts");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cliente/cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _global_error_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global-error-handler.service */ "./src/app/global-error-handler.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cliente/cliente-edit/cliente-edit.component */ "./src/app/cliente/cliente-edit/cliente-edit.component.ts");
/* harmony import */ var _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cliente/cliente-novo/cliente-novo.component */ "./src/app/cliente/cliente-novo/cliente-novo.component.ts");
/* harmony import */ var _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cliente/cliente-show/cliente-show.component */ "./src/app/cliente/cliente-show/cliente-show.component.ts");
/* harmony import */ var _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./usuario/usuario-list/usuario-list.component */ "./src/app/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./usuario/usuario-edit/usuario-edit.component */ "./src/app/usuario/usuario-edit/usuario-edit.component.ts");
/* harmony import */ var _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./usuario/usuario-novo/usuario-novo.component */ "./src/app/usuario/usuario-novo/usuario-novo.component.ts");
/* harmony import */ var _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./usuario/usuario-show/usuario-show.component */ "./src/app/usuario/usuario-show/usuario-show.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "./src/app/financeiro/financeiro.component.ts");
/* harmony import */ var _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./projeto/projeto-list/projeto-list.component */ "./src/app/projeto/projeto-list/projeto-list.component.ts");
/* harmony import */ var _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./projeto/projeto-novo/projeto-novo.component */ "./src/app/projeto/projeto-novo/projeto-novo.component.ts");
/* harmony import */ var _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./projeto/projeto-show/projeto-show.component */ "./src/app/projeto/projeto-show/projeto-show.component.ts");
/* harmony import */ var _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./projeto/projeto-edit/projeto-edit.component */ "./src/app/projeto/projeto-edit/projeto-edit.component.ts");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cliente/cliente-list/cliente-list.component */ "./src/app/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./relatorio/relatorio-financeiro/relatorio-financeiro.component */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _apontamento_apontamento_novo_apontamento_novo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./apontamento/apontamento-novo/apontamento-novo.component */ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _apontamento_apontamento_dashboard_apontamento_dashboard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./apontamento/apontamento-dashboard/apontamento-dashboard.component */ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.ts");
/* harmony import */ var _apontamento_apontamento_lista_despesa_apontamento_lista_despesa_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component */ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.ts");
/* harmony import */ var _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./apontamento/apontamento-lista-hora/apontamento-lista-hora.component */ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_24__["FinanceiroComponent"],
                _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_29__["ClienteListComponent"],
                _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_17__["ClienteNovoComponent"],
                _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_16__["ClienteEditComponent"],
                _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_18__["ClienteShowComponent"],
                _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_19__["UsuarioListComponent"],
                _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_20__["UsuarioEditComponent"],
                _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_21__["UsuarioNovoComponent"],
                _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_22__["UsuarioShowComponent"],
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_25__["ProjetoListComponent"],
                _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_26__["ProjetoNovoComponent"],
                _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_27__["ProjetoShowComponent"],
                _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_28__["ProjetoEditComponent"],
                _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_30__["RelatorioFinanceiroComponent"],
                _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_31__["PaginaNaoEncontradaComponent"],
                _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_9__["GlobalErrorComponent"],
                _apontamento_apontamento_novo_apontamento_novo_component__WEBPACK_IMPORTED_MODULE_32__["ApontamentoNovoComponent"],
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_25__["DialogProjeto"],
                _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_36__["DialogApontamentoHora"],
                _apontamento_apontamento_dashboard_apontamento_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["ApontamentoDashboardComponent"],
                _apontamento_apontamento_lista_despesa_apontamento_lista_despesa_component__WEBPACK_IMPORTED_MODULE_35__["ApontamentoListaDespesaComponent"],
                _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_36__["ApontamentoListaHoraComponent"]
                // NgbdDatepickerPopup,
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _material__WEBPACK_IMPORTED_MODULE_33__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]
                // NgbModule,
                // NgbModule.forRoot()
            ],
            entryComponents: [
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_25__["DialogProjeto"],
                _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_36__["DialogApontamentoHora"]
            ],
            providers: [
                _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_10__["ProjetoService"],
                _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"],
                _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_12__["ClienteService"],
                _global_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["GlobalErrorHandlerService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _global_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["GlobalErrorHandlerService"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-edit/cliente-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-edit/cliente-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/clientes']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n \n<div class=\"container\">\n\n    Dados básicos: \n\n    <div class=\"errors\" *ngIf=\"errors\">\n      <p *ngIf=\"errors.cnpj\" >  {{ errors['cnpj'].message }} </p>\n      <p *ngIf=\"errors.razaoSocial\" >  {{ errors['razaoSocial'].message }} </p>\n      <p *ngIf=\"errors.nomeFantasia\" >  {{ errors['nomeFantasia'].message }} </p>\n      <p *ngIf=\"errors['endereco.logradouro']\" >  {{ errors['endereco.logradouro'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cidade']\" >  {{ errors['endereco.cidade'].message }} </p>  \n      <p *ngIf=\"errors['endereco.estado']\" >  {{ errors['endereco.estado'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cep']\" >  {{ errors['endereco.cep'].message }} </p>          \n    </div>\n\n    <form class=\"example-form\"  *ngIf=\"cliente\" [formGroup] = \"clienteForm\">\n\n        <p> \n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cnpj\"\n          type=\"text\"\n          formControlName=\"cnpj\" \n          name=\"cnpj\"\n          >\n          <mat-error *ngIf=\"cnpj.invalid && cnpj.touched\">\n            cnpj informado não é válido\n          </mat-error>\n        </mat-form-field></td>\n  \n        <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n\n            <td><mat-form-field class=\"example-full-width\">\n              <input \n              matInput \n              placeholder=\"razão social\"\n              type=\"text\"\n              maxlength=\"650\"\n              formControlName=\"razaoSocial\" \n              name=\"razaoSocial\"\n              />\n              <mat-error *ngIf=\"razaoSocial.invalid && razaoSocial.touched\">\n                  razão social informada não é válida\n              </mat-error>\n            </mat-form-field></td>\n          </tr></table>\n\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n          <td><mat-form-field class=\"example-full-width\">\n            <input \n            matInput \n            placeholder=\"nome fantasia\"\n            type=\"text\"\n            formControlName=\"nomeFantasia\"  \n            name=\"nomeFantasia\"\n            />\n            <mat-error *ngIf=\"nomeFantasia.invalid && nomeFantasia.touched\">\n                nome fantasia informado não é válido\n            </mat-error>\n          </mat-form-field></td>\n        </tr></table>\n  \n  \n      <form class=\"example-form\" [formGroup]=\"endereco\">\n        <p>\n        <mat-form-field class=\"example-full-width\">\n          <textarea \n          matInput\n          placeholder=\"endereço\"\n          type=\"text\"\n          formControlName=\"logradouro\" \n          name=\"logradouro\">   \n        </textarea>\n        <!-- <mat-error *ngIf=\"logradouro.invalid && logradouro.touched\">\n            endereço informado não é válido\n        </mat-error> -->\n        </mat-form-field>\n      </p>\n  \n\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"complemento\"\n          type=\"text\"\n          formControlName=\"complemento\" \n          name=\"complemento\"\n          /> \n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cidade\"\n          type=\"text\"\n          formControlName=\"cidade\" \n          name=\"cidade\"\n          >\n          <!-- <mat-error *ngIf=\"cidade.invalid && cidade.touched\">\n              cidade informada não é válida\n          </mat-error> -->\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"estado\"\n          type=\"text\"\n          formControlName=\"estado\"\n          name=\"estado\" \n          maxlength=\"2\"\n          >\n          <mat-hint align=\"end\" *ngIf=\"estado\">{{estado.value.length}} / 2</mat-hint>\n          <!-- <mat-error *ngIf=\"estado.invalid && estado.touched\">\n            estado informado não é válido\n          </mat-error> -->\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cep\"\n          type=\"number\"\n          #postalCode\n          formControlName=\"cep\" \n          maxlength=\"8\" \n          name=\"cep\" \n          >\n          <mat-hint align=\"end\" *ngIf=\"cep\">{{cep.value.length}} / 8</mat-hint>\n          <!-- <mat-error *ngIf=\"cep.invalid && cep.touched\">\n              cep informado não é válido\n          </mat-error> -->\n\n        </mat-form-field></td>\n      </tr></table>\n      </form>\n\n\n\n\n      Dados comerciais:\n  \n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput\n          placeholder=\"valor HH\"\n          type=\"number\"\n          formControlName=\"valorHH\" \n          name=\"valorHH\"  \n          />\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput\n          placeholder=\"prazo pagto\"\n          type=\"number\"\n          formControlName=\"prazoPgto\" \n          name=\"prazoPgto\"  \n          />\n        </mat-form-field></td>\n      </tr></table>\n  \n      Contatos: \n  \n      <div formArrayName=\"contatos\">\n\n\n        <div *ngFor=\"let contato of contatoForms.controls; let i = index;\" [formGroupName]=\"i\">\n  \n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n            <td><mat-form-field class=\"example-full-width\">\n              <input \n              matInput\n              placeholder=\"nome\"\n              type=\"text\"\n              formControlName=\"nome\" \n              name=\"nome\"  \n              />\n            </mat-form-field></td>\n  \n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"email\"\n                type=\"email\"\n                formControlName=\"email\" \n                name=\"email\"\n                />\n              </mat-form-field></td>\n  \n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"fone\"\n                type=\"number\"\n                formControlName=\"fone\" \n                name=\"fone\"  \n                />\n              </mat-form-field></td>\n  \n              <td><mat-form-field class=\"example-full-width\">\n                  <input \n                  matInput\n                  placeholder=\"skype\"\n                  type=\"text\"\n                  formControlName=\"skype\" \n                  name=\"skype\"  \n                  />\n                </mat-form-field></td>\n\n              <a  mat-mini-fab color=\"warn\" (click)=\"deleteContato(i)\">-</a>\n            \n            </tr></table>\n          </div>\n        \n        </div>  \n\n        <a mat-mini-fab color=\"primary\" (click)=\"addContato()\">+</a>\n\n      <button mat-raised-button color=\"basic\" (click)=\"cancel()\">Cancela</button>\n\n      <button mat-raised-button color=\"primary\"  (click)=\"editarCliente(clienteForm, endereco)\" [disabled]=\"clienteForm.invalid || endereco.invalid\">Confirma</button>\n        \n  \n    </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/cliente/cliente-edit/cliente-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-edit/cliente-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 175px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
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
    function ClienteEditComponent(_formBuilder, _usuarioService, _clienteService, _route, _router) {
        this._formBuilder = _formBuilder;
        this._usuarioService = _usuarioService;
        this._clienteService = _clienteService;
        this._route = _route;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
    }
    ClienteEditComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log(' ClienteEditComponent > ', this.usuarioLogado.email);
        this.obterCliente(this._route.snapshot.params['id']);
    };
    ClienteEditComponent.prototype.obterCliente = function (id) {
        var _this = this;
        console.log('ClienteEditComponent > obterCliente');
        var observable = this._clienteService.obterClienteById(id);
        observable.subscribe(function (response) {
            _this.cliente = response.json();
            console.log('in ClienteEditComponent >>>>:', _this.cliente);
            _this.clienteForm = _this._formBuilder.group({
                cnpj: [_this.cliente.cnpj, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                razaoSocial: [_this.cliente.razaoSocial, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                nomeFantasia: [_this.cliente.nomeFantasia, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                valorHH: [_this.cliente.valorHH],
                prazoPgto: [_this.cliente.prazoPgto],
                contatos: [_this._formBuilder.array([_this.cliente.contatos])]
            });
            _this.endereco = _this._formBuilder.group({
                logradouro: [_this.cliente.endereco.logradouro, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                complemento: [_this.cliente.endereco.complemento],
                cidade: [_this.cliente.endereco.cidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                estado: [_this.cliente.endereco.estado, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                cep: [_this.cliente.endereco.cep, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            _this.setContato();
        }, function (err) { }, function () { });
    };
    Object.defineProperty(ClienteEditComponent.prototype, "cnpj", {
        get: function () {
            return this.clienteForm.get('cnpj');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "razaoSocial", {
        get: function () {
            return this.clienteForm.get('razaoSocial');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "nomeFantasia", {
        get: function () {
            return this.clienteForm.get('nomeFantasia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "logradouro", {
        get: function () {
            return this.clienteForm.get('logradouro');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "cidade", {
        get: function () {
            return this.clienteForm.get('cidade');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "estado", {
        get: function () {
            return this.clienteForm.get('estado');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "cep", {
        get: function () {
            return this.clienteForm.get('cep');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteEditComponent.prototype, "contatoForms", {
        get: function () {
            return this.clienteForm.get('contatos');
        },
        enumerable: true,
        configurable: true
    });
    ClienteEditComponent.prototype.setContato = function () {
        var _this = this;
        var contatoForms = this.cliente.contatos.map(function (contato) { return _this._formBuilder.group(contato); });
        var contatoFormsArray = this._formBuilder.array(contatoForms);
        this.clienteForm.setControl('contatos', contatoFormsArray);
    };
    ClienteEditComponent.prototype.addContato = function () {
        var contato = this._formBuilder.group({
            nome: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
            fone: [''],
            skype: ['']
        });
        this.contatoForms.push(contato);
    };
    ClienteEditComponent.prototype.deleteContato = function (i) {
        this.contatoForms.removeAt(i);
    };
    ClienteEditComponent.prototype.editarCliente = function (clienteForm, endereco) {
        var _this = this;
        console.log('ClienteEditarComponent > editarCliente(clienteForm)', clienteForm.value, endereco.value);
        var cliente = clienteForm.value;
        cliente.endereco = endereco.value;
        this._clienteService.editarCliente(this.cliente['_id'], cliente)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu editando cliente ', _this.errors);
                _this._router.navigate(['/cliente/edit/' + _this.cliente['_id']]);
            }
            else {
                _this._router.navigate(['/clientes']);
            }
        }, function (err) {
            throw err;
        });
    };
    ClienteEditComponent.prototype.cancel = function () {
        this._router.navigate(['/clientes']);
    };
    ClienteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-edit',
            template: __webpack_require__(/*! ./cliente-edit.component.html */ "./src/app/cliente/cliente-edit/cliente-edit.component.html"),
            styles: [__webpack_require__(/*! ./cliente-edit.component.scss */ "./src/app/cliente/cliente-edit/cliente-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClienteEditComponent);
    return ClienteEditComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-list/cliente-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-list/cliente-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n</nav>\n\n<div class=\"container\">\n\n  <div class=\"level-left\">\n      <div style=\"margin-top: 20px;\" class=\"title is-4\">Clientes</div> \n  </div>\n  <div class=\"level-right\">\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"['/cliente/novo']\">Novo cliente</button>\n  </div> \n\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n    </mat-form-field>\n  \n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- nomeFantasia Column -->\n        <ng-container matColumnDef=\"nomeFantasia\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> nome fantasia </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.nomeFantasia}} </td>\n        </ng-container>\n  \n        <!-- valorHH Column -->\n        <ng-container matColumnDef=\"valorHH\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> valor HH </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.valorHH}} </td>\n        </ng-container>\n  \n        <!-- prazoPgto Column -->\n        <ng-container matColumnDef=\"prazoPgto\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> prazo pagto </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.prazoPgto}} </td>\n        </ng-container>\n  \n        <!-- contatos Column -->\n        <ng-container matColumnDef=\"nome\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> contato </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.nome}} </td>\n        </ng-container>\n  \n        <!-- email Column -->\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> email </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n        </ng-container>\n\n        <!-- fone Column -->\n        <ng-container matColumnDef=\"fone\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> fone </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.fone}} </td>\n        </ng-container>\n          \n       <!-- Acao 1 Column -->\n       <ng-container matColumnDef=\"acao1\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ação </th>\n          <td mat-cell *matCellDef=\"let row\" >\n            <div class=\"button-row\">\n              <!-- <button mat-button color=\"primary\" >editar</button> -->\n              <button mat-button color=\"primary\" [routerLink]=\"['/cliente/edit/', row['_id'] ]\">editar</button>\n            </div>\n          </td>\n        </ng-container>\n  \n       <!-- Acao 2 Column -->\n       <ng-container matColumnDef=\"acao2\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let row\" >\n            <div class=\"button-row\">\n              <button mat-button color=\"warn\" [routerLink]=\"['/cliente/show', row['_id'] ]\">detalhes</button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n  \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/cliente/cliente-list/cliente-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-list/cliente-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cliente_novo_cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cliente-novo/cliente */ "./src/app/cliente/cliente-novo/cliente.ts");
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
    function ClienteListComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.cliente = new _cliente_novo_cliente__WEBPACK_IMPORTED_MODULE_3__["Cliente"]();
        this.displayedColumns = ['nomeFantasia', 'valorHH', 'nome', 'email', 'fone', 'acao1', 'acao2'];
    }
    ClienteListComponent.prototype.ngOnInit = function () {
        this.obterClientes();
    };
    ClienteListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ClienteListComponent.prototype.obterClientes = function () {
        var _this = this;
        console.log('ClienteListComponent > obterClienteList()');
        var clienteObservable = this._clienteService.obterTodos();
        clienteObservable.subscribe(function (clientes) {
            console.log('clientes in obterClientes list:', clientes.json());
            _this.clientes = clientes.json();
            for (var i = 0; i < _this.clientes.length; i++) {
                _this.clientes[i].nome = _this.clientes[i].contatos[0].nome;
                _this.clientes[i].email = _this.clientes[i].contatos[0].email;
                _this.clientes[i].fone = _this.clientes[i].contatos[0].fone;
                _this.clientes[i].skype = _this.clientes[i].contatos[0].skype;
            }
            console.log('cliente >>>> >>>> >>>>', _this.clientes);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.clientes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ClienteListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ClienteListComponent.prototype, "sort", void 0);
    ClienteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-list',
            template: __webpack_require__(/*! ./cliente-list.component.html */ "./src/app/cliente/cliente-list/cliente-list.component.html"),
            styles: [__webpack_require__(/*! ./cliente-list.component.scss */ "./src/app/cliente/cliente-list/cliente-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"]])
    ], ClienteListComponent);
    return ClienteListComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente-novo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente-novo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/clientes']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n    Dados básicos: \n\n    <div class=\"errors\" *ngIf=\"errors\">\n      <p *ngIf=\"errors.cnpj\" >  {{ errors['cnpj'].message }} </p>\n      <p *ngIf=\"errors.razaoSocial\" >  {{ errors['razaoSocial'].message }} </p>\n      <p *ngIf=\"errors.nomeFantasia\" >  {{ errors['nomeFantasia'].message }} </p>\n      <p *ngIf=\"errors['endereco.logradouro']\" >  {{ errors['endereco.logradouro'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cidade']\" >  {{ errors['endereco.cidade'].message }} </p>  \n      <p *ngIf=\"errors['endereco.estado']\" >  {{ errors['endereco.estado'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cep']\" >  {{ errors['endereco.cep'].message }} </p>    \n      <!-- <p *ngIf=\"errors.contatos\" >  {{ errors['contatos'].message }} </p>        -->\n    </div>\n\n\n  <form class=\"example-form\" [formGroup] = \"clienteForm\">\n\n      <p> \n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cnpj\"\n          type=\"text\"\n          formControlName=\"cnpj\" \n          name=\"cnpj\"\n          >\n          <mat-error *ngIf=\"cnpj.invalid && cnpj.touched\">\n            cnpj informado não é válido\n          </mat-error>\n        </mat-form-field></td>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      \n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"razão social\"\n          type=\"text\"\n          formControlName=\"razaoSocial\" \n          name=\"razaoSocial\"\n          />\n          <mat-error *ngIf=\"razaoSocial.invalid && razaoSocial.touched\">\n              razão social informada não é válida\n          </mat-error>\n        </mat-form-field></td>\n      </tr></table>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"nome fantasia\"\n        type=\"text\"\n        formControlName=\"nomeFantasia\"  \n        name=\"nomeFantasia\"\n        />\n        <mat-error *ngIf=\"nomeFantasia.invalid && nomeFantasia.touched\">\n            nome fantasia informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n    <form class=\"example-form\" [formGroup]=\"endereco\">\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <textarea \n          matInput \n          placeholder=\"endereço\"\n          type=\"text\"\n          formControlName=\"logradouro\" \n          name=\"logradouro\"> \n          </textarea>\n          <!-- <mat-error *ngIf=\"logradouro.invalid && logradouro.touched\">\n            endereço informado não é válido\n          </mat-error> -->\n        </mat-form-field>\n      </p>\n    \n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"complemento\"\n          type=\"text\"\n          formControlName=\"complemento\" \n          name=\"complemento\"\n          /> \n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cidade\"\n          type=\"text\"\n          formControlName=\"cidade\" \n          name=\"cidade\"\n          >\n          <!-- <mat-error *ngIf=\"cidade.invalid && cidade.touched\">\n            cidade informada não é válida\n          </mat-error> -->\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"estado\"\n          type=\"text\"\n          formControlName=\"estado\"\n          name=\"estado\" \n          maxlength=\"2\"\n          >\n          <mat-hint align=\"end\" *ngIf=\"estado\">{{estado.value.length}} / 2</mat-hint>\n          <!-- <mat-error *ngIf=\"estado.invalid && estado.touched\">\n            estado informado não é válido\n          </mat-error> -->\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cep\"\n          type=\"number\"\n          #postalCode\n          formControlName=\"cep\" \n          maxlength=\"8\" \n          name=\"cep\" \n          >\n          <mat-hint align=\"end\" *ngIf=\"cep\">{{cep.value.length}} / 8</mat-hint>\n          <!-- <mat-error *ngIf=\"cep.invalid && cep.touched\">\n            cep informado não é válido\n          </mat-error>  -->\n\n        </mat-form-field></td>\n      </tr></table>\n    </form>\n\n    Dados comerciais:\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput\n        placeholder=\"valor HH\"\n        type=\"number\"\n        formControlName=\"valorHH\" \n        name=\"valorHH\"  \n        />\n      </mat-form-field></td>\n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput\n        placeholder=\"prazo pagto\"\n        type=\"number\"\n        formControlName=\"prazoPgto\" \n        name=\"prazoPgto\"  \n        />\n      </mat-form-field></td>\n    </tr></table>\n\n    Contatos: \n    <div class=\"container\">\n      <div formArrayName=\"contatos\">\n          \n        <div *ngFor=\"let contato of contatoForms.controls; let i = index;\" [formGroupName]=\"i\">\n\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n            <td><mat-form-field class=\"example-full-width\">\n              <input \n              matInput\n              placeholder=\"nome\"\n              type=\"text\"\n              formControlName=\"nome\" \n              name=\"nome\"  \n              />\n            </mat-form-field></td>\n\n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"email\"\n                type=\"email\"\n                formControlName=\"email\" \n                name=\"email\"\n                />\n              </mat-form-field></td>\n\n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"fone\"\n                type=\"number\"\n                formControlName=\"fone\" \n                name=\"fone\"  \n                />\n              </mat-form-field></td>\n\n              <td><mat-form-field class=\"example-full-width\">\n                  <input \n                  matInput\n                  placeholder=\"skype\"\n                  type=\"text\"\n                  formControlName=\"skype\" \n                  name=\"skype\"  \n                  />\n                </mat-form-field></td>\n                <a  mat-mini-fab color=\"warn\" (click)=\"deleteContato(i)\">-</a>\n            </tr></table>\n\n          </div>\n\n        \n        </div>\n\n\n        <a mat-mini-fab color=\"primary\" (click)=\"addContato()\">+</a>\n\n    </div>\n    <button mat-raised-button color=\"basic\" (click)=\"cancel()\">Cancelar</button>\n\n    <button mat-raised-button color=\"primary\"  (click)=\"criarCliente(clienteForm, endereco)\" [disabled]=\"clienteForm.invalid || endereco.invalid\">Confirma</button>\n      \n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente-novo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente-novo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\nimg {\n  width: 190px;\n  height: auto; }\n\n.errors {\n  color: purple; }\n\na, button {\n  margin: 10px; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
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
    function ClienteNovoComponent(_formBuilder, _usuarioService, _clienteService, _router) {
        this._formBuilder = _formBuilder;
        this._usuarioService = _usuarioService;
        this._clienteService = _clienteService;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
    }
    ClienteNovoComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log(' ClienteNovoComponent > ', this.usuarioLogado.email);
        this.clienteForm = this._formBuilder.group({
            cnpj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)]],
            razaoSocial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nomeFantasia: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            valorHH: [],
            prazoPgto: [],
            contatos: this._formBuilder.array([])
        });
        this.endereco = this._formBuilder.group({
            logradouro: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            complemento: [],
            cidade: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            estado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cep: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(ClienteNovoComponent.prototype, "cnpj", {
        get: function () {
            return this.clienteForm.get('cnpj');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "razaoSocial", {
        get: function () {
            return this.clienteForm.get('razaoSocial');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "nomeFantasia", {
        get: function () {
            return this.clienteForm.get('nomeFantasia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "logradouro", {
        get: function () {
            return this.clienteForm.get('logradouro');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "cidade", {
        get: function () {
            return this.clienteForm.get('cidade');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "estado", {
        get: function () {
            return this.clienteForm.get('estado');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "cep", {
        get: function () {
            return this.clienteForm.get('cep');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClienteNovoComponent.prototype, "contatoForms", {
        get: function () {
            return this.clienteForm.get('contatos');
        },
        enumerable: true,
        configurable: true
    });
    ClienteNovoComponent.prototype.addContato = function () {
        var contato = this._formBuilder.group({
            nome: [],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
            fone: [],
            skype: []
        });
        this.contatoForms.push(contato);
    };
    ClienteNovoComponent.prototype.deleteContato = function (i) {
        this.contatoForms.removeAt(i);
    };
    ClienteNovoComponent.prototype.criarCliente = function (clienteForm, endereco) {
        var _this = this;
        console.log('ClienteNovoComponent > criarCliente(clienteForm: NgForm)', clienteForm.value, endereco.value);
        var cliente = clienteForm.value;
        cliente.endereco = endereco.value;
        this._clienteService.criarCliente(cliente)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu salvando cliente ', _this.errors);
                _this._router.navigate(['/cliente/novo']);
            }
            else {
                _this._router.navigate(['/clientes']);
            }
        }, function (err) {
            throw err;
        });
    };
    ClienteNovoComponent.prototype.cancel = function () {
        this._router.navigate(['/clientes']);
    };
    ClienteNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-novo',
            template: __webpack_require__(/*! ./cliente-novo.component.html */ "./src/app/cliente/cliente-novo/cliente-novo.component.html"),
            styles: [__webpack_require__(/*! ./cliente-novo.component.scss */ "./src/app/cliente/cliente-novo/cliente-novo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClienteNovoComponent);
    return ClienteNovoComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente.ts":
/*!*************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente.ts ***!
  \*************************************************/
/*! exports provided: Cliente, Contato */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contato", function() { return Contato; });
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.cnpj = '';
        this.razaoSocial = '';
        this.nomeFantasia = '';
        this.endereco = '';
    }
    return Cliente;
}());

var Contato = /** @class */ (function () {
    function Contato() {
        this.nome = '';
        this.email = '';
        this.telefone = '';
        this.skype = '';
    }
    return Contato;
}());



/***/ }),

/***/ "./src/app/cliente/cliente-show/cliente-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-show/cliente-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/clientes']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n  \n  \n  <div class=\"container\">\n  \n      Dados básicos: \n  \n    <form [formGroup] = \"clienteForm\" (submit)=\"excluirCliente(clienteForm)\">\n  \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-one-third\">\n          <label class=\"label\">CNPJ</label>\n        </div>\n        <div class=\"field-body\">\n          {{ cliente.cnpj }}\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!cnpj?.valid\" class=\"purple\">CNPJ precisar ter no mínimo 11 caracteres!</div> -->\n  \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-one-third\">\n          <label class=\"label\">Razão Social</label>\n        </div>\n        <div class=\"field-body\">\n          {{ cliente.razaoSocial }}\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!razaoSocial?.valid\" class=\"purple\">Razão Social do cliente precisar ter no mínimo 8 caracteres!</div> -->\n  \n      <div class=\"field is-horizontal\">\n          <div class=\"field-label is-one-third\">\n            <label class=\"label\">Nome Fantasia</label>\n          </div>\n          <div class=\"field-body\">\n            {{ cliente.nomeFantasia }}\n          </div>\n        </div>\n        <!-- <div *ngIf=\"!nomeFantasia?.valid\" class=\"purple\">Nome fantasia do cliente precisar ter no mínimo 2 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-one-third\">\n          <label class=\"label\">Endereço</label>\n        </div>\n        <div class=\"field-body\">\n          {{ cliente.endereco }}\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!endereco?.valid\" class=\"purple\">Endereço do cliente precisar ter no mínimo 4 caracteres!</div> -->\n    \n  \n      Dados comerciais:\n  \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-one-third\">\n          <label class=\"label\">Valor h/h</label>\n        </div>\n        <div class=\"field-body\">\n          {{ cliente.valorHH }}\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!valorHH?.valid\" class=\"purple\">Valor HH do cliente precisar ter no mínimo 4 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-one-third\">\n          <label class=\"label\">Prazo Pagamento</label>\n        </div>\n        <div class=\"field-body\">\n          {{ cliente.prazoPgto }}\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!prazoPgto?.valid\" class=\"purple\">Prazo pgto do cliente precisar ter no mínimo 4 caracteres!</div> -->\n    \n      Contatos: \n      <div  class=\"tile is-ancestor\">\n        <div class=\"tile is-vertical is-content\">\n          <div class=\"tile\">\n            <div class=\"tile is-parent is-vertical\">\n              <article class=\"tile is-child notification is-primary\">\n  \n                <div  formArrayName=\"contatos\" *ngFor=\"let brand of clienteForm.controls.contatos.controls; let i = index;\">\n                  <div formGroupName =\"{{i}}\">\n                    <div class=\"field is-horizontal\">\n                      <div class=\"field-label is-normal\">\n                        {{brand.get('title').value}}\n                      </div>\n                      <div class=\"field-body\">\n                        <div class=\"field\">\n                          <p class=\"control\">\n\n\n                            <!-- <input\n                            type=\"text\"\n                            formControlName=\"value\" \n                            > -->\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n  \n                <!-- <a style=\"margin-left: 150px;\" class=\"button is-warning is-rounded is-small\" (click)=\"addContato()\">+</a> -->\n  \n              </article>\n            </div>\n  \n            <div class=\"tile is-parent\">\n                <article class=\"tile is-child notification is-info\">\n                  {{ contato.nome }}  {{ contato.email }}  {{ contato.telefone }}  {{ contato.skype }}\n                </article>\n            </div>\n          </div>\n        </div>\n      </div>\n   \n  \n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n      <button type=\"submit\" class=\"button is-danger\" [disabled]=\"clienteForm.valid\">Excluir</button>\n        \n  \n    </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/cliente/cliente-show/cliente-show.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-show/cliente-show.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\n.down-10 {\n  margin-top: 30px; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cliente_novo_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cliente-novo/cliente */ "./src/app/cliente/cliente-novo/cliente.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ClienteShowComponent(formBuilder, _usuarioService, _clienteService, _route, _router) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._clienteService = _clienteService;
        this._route = _route;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.cliente = {
            cnpj: 0,
            razaoSocial: "",
            nomeFantasia: "",
            endereco: "",
            valorHH: 0,
            prazoPgto: 0,
            contatos: [{
                    nome: "",
                    email: "",
                    telefone: 0,
                    skype: ""
                }]
        };
        this.contato = new _cliente_novo_cliente__WEBPACK_IMPORTED_MODULE_2__["Contato"];
        this.contatosArray = [];
        this.flContato = false;
        this.clienteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            razaoSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            nomeFantasia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            endereco: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            valorHH: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            prazoPgto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contatos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.contatosCliente = [
            {
                'brand': "nome"
            },
            {
                'brand': "email"
            },
            {
                'brand': "telefone"
            },
            {
                'brand': "skype"
            }
        ];
    }
    ClienteShowComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ClienteShowComponent > usuario ', this.usuarioLogado.email);
        this.obterCliente(this._route.snapshot.params['id']);
    };
    ClienteShowComponent.prototype.createForm = function (contatosCliente) {
        var arr = [];
        for (var i = 0; i < contatosCliente.length; i++) {
            arr.push(this.buildContato(contatosCliente[i]));
        }
        return this.clienteForm = this.formBuilder.group({
            cnpj: this.cliente.cnpj,
            razaoSocial: this.cliente.razaoSocial,
            nomeFantasia: this.cliente.nomeFantasia,
            endereco: this.cliente.endereco,
            valorHH: this.cliente.valorHH,
            prazoPgto: this.cliente.prazoPgto,
            contatos: this.formBuilder.array(arr)
        });
    };
    ClienteShowComponent.prototype.obterCliente = function (id) {
        var _this = this;
        console.log('ClienteEditComponent > obterCliente');
        var observable = this._clienteService.obterClienteById(id);
        observable.subscribe(function (response) {
            _this.cliente = response.json();
            _this.createForm(_this.contatosCliente);
        }, function (err) { }, function () { });
    };
    ClienteShowComponent.prototype.buildContato = function (product) {
        return this.formBuilder.group({
            title: [product.brand],
            value: ['']
        });
    };
    ClienteShowComponent.prototype.excluirCliente = function (clienteForm) {
        console.log('ClienteEditComponent > excluirCliente', clienteForm);
    };
    // editarCliente(clienteForm: NgForm) {
    //   if (!this.flContato) { this._router.navigate(['/cliente/edit']) };
    //   console.log('ClienteEditarComponent > editarCliente(clienteForm)', clienteForm); 
    //   this._clienteService.editarCliente(this.cliente['_id'], clienteForm.value)
    //     .subscribe(observable => {
    //       if(observable.json().errors) {
    //         this.errors = observable.json().errors;
    //         console.log('Algum erro ocorreu editando cliente ', this.errors);
    //         this._router.navigate(['/cliente/edit/' + this.cliente['_id'] ]);
    //       } else {
    //         this._router.navigate(['/clientes']);
    //       }
    //     },
    //     err => {
    //       throw err;
    //     }
    //   );
    //   this.createForm(this.contatosCliente);
    // }
    ClienteShowComponent.prototype.cancel = function () {
        this._router.navigate(['/clientes']);
    };
    ClienteShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-show',
            template: __webpack_require__(/*! ./cliente-show.component.html */ "./src/app/cliente/cliente-show/cliente-show.component.html"),
            styles: [__webpack_require__(/*! ./cliente-show.component.scss */ "./src/app/cliente/cliente-show/cliente-show.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ClienteShowComponent);
    return ClienteShowComponent;
}());



/***/ }),

/***/ "./src/app/cliente/cliente.service.ts":
/*!********************************************!*\
  !*** ./src/app/cliente/cliente.service.ts ***!
  \********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
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


var ClienteService = /** @class */ (function () {
    function ClienteService(_http) {
        this._http = _http;
    }
    ClienteService.prototype.obterTodos = function () {
        console.log('ClienteService > obterTodos()');
        return this._http.get('/clientes');
    };
    ClienteService.prototype.criarCliente = function (cliente) {
        console.log('ClienteService > criarCliente(cliente, endereco)', cliente);
        return this._http.post('cliente/novo', cliente);
    };
    ClienteService.prototype.obterClienteById = function (id) {
        console.log('ClienteService > obterClienteById', id);
        return this._http.get('/cliente/' + id);
    };
    ClienteService.prototype.editarCliente = function (id, cliente) {
        console.log('ClienteService > editarCliente(cliente)', id, cliente);
        return this._http.put('cliente/edit/' + id, cliente);
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/financeiro/financeiro.component.html":
/*!******************************************************!*\
  !*** ./src/app/financeiro/financeiro.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<p>\n  financeiro em construção!!!\n</p>\n"

/***/ }),

/***/ "./src/app/financeiro/financeiro.component.scss":
/*!******************************************************!*\
  !*** ./src/app/financeiro/financeiro.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n"

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
            styles: [__webpack_require__(/*! ./financeiro.component.scss */ "./src/app/financeiro/financeiro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceiroComponent);
    return FinanceiroComponent;
}());



/***/ }),

/***/ "./src/app/global-error-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/global-error-handler.service.ts ***!
  \*************************************************/
/*! exports provided: GlobalErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function() { return GlobalErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var GlobalErrorHandlerService = /** @class */ (function () {
    function GlobalErrorHandlerService(injector) {
        this.injector = injector;
    }
    GlobalErrorHandlerService.prototype.handleError = function (error) {
        var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        console.log('URL: ' + router.url);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				  
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);
        }
        else {
            //A client-side or network error occurred.	          
            console.error('Um erro ocorreu:', error.message);
        }
        router.navigate(['/error']);
    };
    GlobalErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], GlobalErrorHandlerService);
    return GlobalErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/global-error/global-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/global-error/global-error.component.ts ***!
  \********************************************************/
/*! exports provided: GlobalErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorComponent", function() { return GlobalErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalErrorComponent = /** @class */ (function () {
    function GlobalErrorComponent() {
    }
    GlobalErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <h2>Ocorreu um erro...</h2>\n    "
        })
    ], GlobalErrorComponent);
    return GlobalErrorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"row justify-content-center\">\n      <!-- <div class=\"media-container-column col-lg-8\"> -->\n\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>Torre Negra</mat-card-title>\n                <mat-card-subtitle>Sistemas</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                <form class=\"example-form\" [formGroup]=\"formLogin\" (submit)=\"login()\"> \n\n                    <mat-form-field>\n\n                        <input matInput type=\"email\" placeholder=\"email\" formControlName=\"email\" />\n\n                    </mat-form-field>\n\n                    <mat-form-field>\n\n                        <input matInput type=\"password\" placeholder=\"senha\" formControlName=\"senha\" />\n                    </mat-form-field>\n                    <mat-card-actions>\n                            <!-- <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\"> -->\n                            <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"formLogin.invalid\">Entrar</button>\n                        <!-- <button type=\"submit\" class=\"button is-block is-info is-large is-fullwidth\" [disabled]=\"formLogin.invalid\">Entrar</button> -->\n                    </mat-card-actions>\n                </form>\n\n                <div class=\"errors\">\n                    <p>{{ errors.message }} </p>      \n                </div>\n\n            </mat-card-content>\n         </mat-card>\n     <!-- </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errors {\n  color: red; }\n\n.example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"/assets/images/TorreNegra-elem-mono-pos.png\");\n  background-size: cover; }\n\n.box {\n  margin: 100px;\n  display: flex;\n  justify-content: center; }\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _router, _usuarioService
    // public dialog: MatDialog
    ) {
        this.fb = fb;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this.usuario = {
            email: '',
            senha: '',
            admin: ''
        };
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.usuario = { email: "", senha: "", admin: "" };
        console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
        this.formLogin = this.fb.group({
            email: '',
            senha: '',
            admin: ''
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('LoginComponent > login()', this.formLogin.controls.email.value);
        var userObservable = this._usuarioService.login(this.formLogin.controls.email.value);
        userObservable.subscribe(function (usuario) {
            _this.usuario = usuario.json();
            console.log('SUCESSO em login');
            if (_this.usuario.admin) {
                _this._router.navigate(['/projetos']);
            }
            else {
                _this._router.navigate(['/apontamentos']);
            }
        }, function (err) {
            _this.errors = err.json();
            console.log('ERRO em login', _this.errors);
            _this._router.navigate(['/']);
        });
        this._usuarioService.setUserLoggedIn(this.usuarioLogado);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
            // public dialog: MatDialog
        ])
    ], LoginComponent);
    return LoginComponent;
}());

// @Component({
//   selector: 'app-popup',
//   templateUrl: '../popup/popup.component.html'
// })
// export class DialogUsuario {
//   usuario = {
//     email: '',
//     senha: '',
//     admin: ''
//   };
//   public usuarioLogado = {
//     email: '',
//     admin: ''
//   }
//   errors: any = {}
//   constructor(private _usuarioService: UsuarioService, 
//     private _router: Router, 
//     public dialogRef: MatDialogRef<DialogUsuario>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   login(data) {
//     console.log('LoginComponent > login()',data)
//     const userObservable = this._usuarioService.login(data);
//     userObservable.subscribe(
//         (usuario) => {
//           this.usuario = usuario.json();
//           console.log('SUCESSO em login');
//           if (this.usuario.admin) {
//             this._router.navigate(['/projetos']);
//           } else {
//             this._router.navigate(['/apontamentos']);
//           }
//         },
//         (err) => { 
//           this.errors = err.json();
//           console.log('ERRO em login', this.errors);
//           this._router.navigate(['/']);
//         }
//       )
//       this._usuarioService.setUserLoggedIn(this.usuarioLogado);
//     }
// }


/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
            ],
            exports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
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
            template: "<h2>Pagina n\u00E3o encontrada!</h2>\n             <div>\n                <button [routerLink]=\"['/projetos']\">Retornar</button>\n\t     </div>\n        "
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PaginaNaoEncontradaComponent);
    return PaginaNaoEncontradaComponent;
}());



/***/ }),

/***/ "./src/app/projeto/popup/popup.component.html":
/*!****************************************************!*\
  !*** ./src/app/projeto/popup/popup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<h3 mat-dialog-title>Encerrar Projeto </h3>\n<h4>{{ data.codigo }} {{ data.descricao }}</h4>\n<br><br>\n<div mat-dialog-content>\n  <p>Confirma? </p>\n</div>\n<br><br>\n<div mat-dialog-actions>\n    <div class=\"button-row\">\n      <button style=\"margin: 10px;\" mat-mini-fab color=\"primary\" (click)=\"onNoClick()\"> não </button>\n      <button style=\"margin: 10px;\" mat-mini-fab color=\"warn\" (click)=\"encerrarProjeto(data.id)\" cdkFocusInitial> sim </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/projeto/popup/popup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/projeto/popup/popup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 150px;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/projeto/projeto-edit/projeto-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-edit/projeto-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n  \n  <div class=\"container\">\n\n    <div class=\"errors\" *ngIf=\"errors\">\n      <p *ngIf=\"errors.descricao\" >  {{ errors['descricao'].message }} </p>\n      <p *ngIf=\"errors.cliente\" >  {{ errors['cliente'].message }} </p>\n      <p *ngIf=\"errors.pedido\" >  {{ errors['pedido'].message }} </p>   \n      <p *ngIf=\"errors.horasPLC\" >  {{ errors['horasPLC'].message }} </p>       \n      <p *ngIf=\"errors.horasIHM\" >  {{ errors['horasIHM'].message }} </p>  \n      <p *ngIf=\"errors.valorTerceiros\" >  {{ errors['valorTerceiros'].message }} </p>            \n      <p *ngIf=\"errors.valorMateriais\" >  {{ errors['valorMateriais'].message }} </p>       \n      <p *ngIf=\"errors.valorViagens\" >  {{ errors['valorViagens'].message }} </p>       \n    </div>\n\n    <form (submit)='editarProjeto()' #projForm='ngForm'>\n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Código</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p style=\"margin-top: 7px;\" class=\"control\">\n              {{ projeto.codigo }}\n            </p>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Descrição</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"descricao\" \n              minlength=8\n              required\n              [(ngModel)]=\"projeto.descricao\"\n              #descricao=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.descricao.valid\" class=\"purple\">Descrição do projeto precisar ter no mínimo 8 caracteres!</div> -->\n      \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Cliente</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <!-- <p style=\"margin-top: 6px\" > -->\n              <!-- {{ projeto.nomeFantasiaCliente }} -->\n            <!-- </p> -->\n            <div class=\"select is-multiple control\">\n              <select name=\"_clienteId\" [(ngModel)]=\"clienteSelecionado\" required>\n                  <option *ngFor=\"let c of clientes\" [value]=\"c._id\">\n                    {{ c.nomeFantasia }}   \n                  </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.cliente.valid\" class=\"purple\">Cliente precisar ter no mínimo 6 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Pedido</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input\" \n              type=\"text\" \n              name=\"pedido\" \n              required\n              [(ngModel)]=\"projeto.pedido\"\n              #pedido=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.pedido.valid\" class=\"purple\">Pedido do projeto precisar ter no mínimo 4 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Horas PLC</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"horasPLC\" \n              [(ngModel)]=\"projeto.horasPLC\"\n              #horasPLC=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!horasPLC.valid\" class=\"purple\">horasPLC precisar ter no mínimo 4 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Horas IHM</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"horasIHM\" \n              [(ngModel)]=\"projeto.horasIHM\"\n              #descricao=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!horasIHM.valid\" class=\"purple\">horasIHM do projeto precisar ter no mínimo 8 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Valor Terceiros</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"valorTerceiros\" \n              [(ngModel)]=\"projeto.valorTerceiros\"\n              #valorTerceiros=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!valorTerceiros.valid\" class=\"purple\">valorTerceiros precisar ter no mínimo 4 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n        <label class=\"label\">Valor Materiais</label>\n        </div>\n          <div class=\"field-body\">\n            <div class=\"field\">\n              <p class=\"control\">\n                <input \n                class=\"input \" \n                type=\"text\" \n                name=\"valorMateriais\" \n                [(ngModel)]=\"projeto.valorMateriais\"\n                #valorMateriais=\"ngModel\"\n                />\n              </p>\n            </div>\n        </div>\n      </div>\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n        <label class=\"label\">Valor Viagens</label>\n        </div>\n          <div class=\"field-body\">\n            <div class=\"field\">\n              <p class=\"control\">\n                <input \n                class=\"input \" \n                type=\"text\" \n                name=\"valorViagens\" \n                [(ngModel)]=\"projeto.valorViagens\"\n                #valorViagens=\"ngModel\"\n                />\n              </p>\n            </div>\n        </div>\n      </div>\n    \n      <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/projetos']\">Cancela</button>\n      <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"projForm.invalid\">Confirma</button>\n    \n    </form>\n  </div>  "

/***/ }),

/***/ "./src/app/projeto/projeto-edit/projeto-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-edit/projeto-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cliente/cliente.service */ "./src/app/cliente/cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NgForm } from '@angular/forms';



var ProjetoEditComponent = /** @class */ (function () {
    function ProjetoEditComponent(_usuarioService, _projetoService, _clienteService, _route, _router) {
        this._usuarioService = _usuarioService;
        this._projetoService = _projetoService;
        this._clienteService = _clienteService;
        this._route = _route;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.projeto = {
            codigo: "",
            descricao: "",
            _clienteId: "",
            nomeFantasiaCliente: "",
            pedido: "",
            horasPLC: 0,
            horasIHM: 0,
            valorTerceiros: 0,
            valorMateriais: 0,
            valorViagens: 0
        };
        this.cliente = {
            _id: "",
            cnpj: 0,
            razaoSocial: "",
            nomeFantasia: "",
            endereco: "",
            valorHH: 0,
            prazoPgto: 0,
            contatos: [{
                    nome: "",
                    email: "",
                    telefone: 0,
                    skype: ""
                }]
        };
    }
    ProjetoEditComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ProjetoEditComponent > usuario: ', this.usuarioLogado.email);
        this.obterProjeto(this._route.snapshot.params['id']);
    };
    ProjetoEditComponent.prototype.obterProjeto = function (id) {
        var _this = this;
        console.log('ProjetoEditComponent > obterProjeto');
        var observable = this._projetoService.obterProjetoById(id);
        observable.subscribe(function (response) {
            _this.projeto = response.json();
            _this.obterClienteNomeFantasia(_this.projeto._clienteId);
            _this.obterClientes();
        }, function (err) { }, function () { });
    };
    ProjetoEditComponent.prototype.obterClienteNomeFantasia = function (id) {
        var _this = this;
        console.log('ProjetoEditComponent > obterCliente()');
        var clienteObservable = this._clienteService.obterClienteById(id);
        clienteObservable.subscribe(function (cliente) {
            _this.cliente = cliente.json();
            _this.projeto.nomeFantasiaCliente = _this.cliente.nomeFantasia;
            _this.clienteSelecionado = _this.cliente._id;
        }, function (err) { }, function () { });
    };
    ProjetoEditComponent.prototype.obterClientes = function () {
        var _this = this;
        console.log('ProjetoEditComponent  > obterClienteList()');
        var clienteObservable = this._clienteService.obterTodos();
        clienteObservable.subscribe(function (clientes) {
            // console.log('clientes in obterClientes ProjetoEditComponent:', clientes.json());
            _this.clientes = clientes.json();
        }, function (err) { }, function () { });
    };
    ProjetoEditComponent.prototype.editarProjeto = function () {
        var _this = this;
        console.log('ProjetoEditComponent > editarProjeto', this.projeto);
        this.projeto._clienteId = this.clienteSelecionado;
        this._projetoService.editarProjeto(this.projeto)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu editando projeto ', _this.errors);
                _this._router.navigate(['/projeto/edit/', _this.projeto['_id']]);
            }
            else {
                _this._router.navigate(['/projetos']);
            }
        }, function (err) {
            throw err;
        });
    };
    ProjetoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-edit',
            template: __webpack_require__(/*! ./projeto-edit.component.html */ "./src/app/projeto/projeto-edit/projeto-edit.component.html"),
            styles: [__webpack_require__(/*! ./projeto-edit.component.scss */ "./src/app/projeto/projeto-edit/projeto-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _projeto_service__WEBPACK_IMPORTED_MODULE_3__["ProjetoService"],
            _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjetoEditComponent);
    return ProjetoEditComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-list/projeto-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-list/projeto-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle  active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Cadastro\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/usuarios']\">Usuário</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/clientes']\">Cliente</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/apontamentos']\">Apontamento</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/financeiro']\">Financeiro</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Relatório\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"\">Financeiro</a>\n          <a class=\"dropdown-item\" href=\"#\">Total de horas por projeto</a>\n          <a class=\"dropdown-item\" href=\"#\">Total de horas por funcionário</a>\n          <a class=\"dropdown-item\" href=\"#\">Custo por pedido</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Projetos encerrados</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <div class=\"level-left\">\n      <div style=\"margin-top: 20px;\" class=\"title is-4\">Projetos</div> \n  </div>\n  <div class=\"level-right\">\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"['/projeto/novo']\">Novo projeto</button>\n  </div> \n\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"codigo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> código </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.codigo}} </td>\n      </ng-container>\n\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"descricao\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> descrição </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.descricao}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"cliente\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> cliente </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.cliente}} </td>\n      </ng-container>\n\n      <!-- Pedido Column -->\n      <ng-container matColumnDef=\"pedido\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> pedido </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.pedido}} </td>\n      </ng-container>\n\n     <!-- Acao 1 Column -->\n     <ng-container matColumnDef=\"acao1\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ação </th>\n        <td mat-cell *matCellDef=\"let row\" >\n          <div class=\"button-row\">\n            <button mat-button color=\"primary\" [routerLink]=\"['/projeto/edit/', row['_id'] ]\">editar</button>\n          </div>\n        </td>\n      </ng-container>\n\n     <!-- Acao 2 Column -->\n     <ng-container matColumnDef=\"acao2\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\" >\n          <div class=\"button-row\">\n            <button mat-button color=\"warn\" (click)=\"openDialog(row)\" [disabled]=\"row['encerrado']\">encerrar</button>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projeto/projeto-list/projeto-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-list/projeto-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd, th {\n  width: 25%; }\n\n.example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n\nbutton {\n  margin-top: -15px; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/projeto/projeto-list/projeto-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projeto/projeto-list/projeto-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjetoListComponent, DialogProjeto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoListComponent", function() { return ProjetoListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogProjeto", function() { return DialogProjeto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cliente/cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ProjetoListComponent = /** @class */ (function () {
    function ProjetoListComponent(_usuarioService, _projetoService, _clienteService, dialog) {
        this._usuarioService = _usuarioService;
        this._projetoService = _projetoService;
        this._clienteService = _clienteService;
        this.dialog = dialog;
        this.displayedColumns = ['codigo', 'descricao', 'cliente', 'pedido', 'acao1', 'acao2'];
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.projetos = [{
                _id: "",
                codigo: "",
                descricao: "",
                _clienteId: "",
                cliente: "",
                pedido: "",
                acao: "",
                encerrado: ""
            }];
        this.cliente = {
            _id: "",
            cnpj: 0,
            razaoSocial: "",
            nomeFantasia: "",
            endereco: "",
            valorHH: "",
            prazoPgto: "",
            contatos: [{
                    nome: "",
                    email: "",
                    telefone: 0,
                    skype: ""
                }]
        };
    }
    ProjetoListComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ProjetoListComponent > usuariologado ', this.usuarioLogado.email);
        this.obterListaProjeto();
    };
    ProjetoListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProjetoListComponent.prototype.obterListaProjeto = function () {
        var _this = this;
        console.log('ProjetoListComponent > obterListaProjeto()');
        var projetoObservable = this._projetoService.obterTodos();
        projetoObservable.subscribe(function (projetos) {
            _this.projetos = projetos.json();
            for (var i = 0; i < _this.projetos.length; i++) {
                _this.obterCliente(_this.projetos[i]._clienteId, i);
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.projetos);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () { });
    };
    ProjetoListComponent.prototype.obterCliente = function (id, i) {
        var _this = this;
        console.log('ProjetoListComponent > obterCliente()');
        var clienteObservable = this._clienteService.obterClienteById(id);
        clienteObservable.subscribe(function (cliente) {
            _this.cliente = cliente.json();
            _this.projetos[i].cliente = _this.cliente.nomeFantasia;
        }, function (err) { }, function () { });
    };
    ProjetoListComponent.prototype.openDialog = function (projeto) {
        var _this = this;
        console.log('ProjetoListComponent > openDialog(projeto) ');
        var dialogRef = this.dialog.open(DialogProjeto, {
            width: '450px',
            data: {
                id: projeto._id,
                codigo: projeto.codigo,
                descricao: projeto.descricao,
                usuario: this.usuarioLogado
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            console.log('The dialog was closed');
            _this.obterListaProjeto();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ProjetoListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ProjetoListComponent.prototype, "sort", void 0);
    ProjetoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-list',
            template: __webpack_require__(/*! ./projeto-list.component.html */ "./src/app/projeto/projeto-list/projeto-list.component.html"),
            styles: [__webpack_require__(/*! ./projeto-list.component.scss */ "./src/app/projeto/projeto-list/projeto-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"],
            _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ProjetoListComponent);
    return ProjetoListComponent;
}());

var DialogProjeto = /** @class */ (function () {
    function DialogProjeto(_projetoService, _router, dialogRef, data) {
        this._projetoService = _projetoService;
        this._router = _router;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogProjeto.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogProjeto.prototype.encerrarProjeto = function (id) {
        var _this = this;
        console.log('DialogProjeto >  encerrarProjeto(id) ', id);
        var dialogObservable = this._projetoService.encerrarProjeto(id);
        dialogObservable.subscribe(function (res) {
            console.log('The dialog called encerrar projeto!', res);
            _this.dialogRef.close();
        }, function (err) { }, function () { });
    };
    DialogProjeto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ../popup/popup.component.html */ "./src/app/projeto/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ../popup/popup.component.scss */ "./src/app/projeto/popup/popup.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], DialogProjeto);
    return DialogProjeto;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-novo/projeto-novo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-novo/projeto-novo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n\n  Dados básicos:\n\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors.codigo\" >  {{ errors['codigo'].message }} </p>\n    <p *ngIf=\"errors.descricao\" >  {{ errors['descricao'].message }} </p>\n    <p *ngIf=\"errors.cliente\" >  {{ errors['cliente'].message }} </p>\n    <p *ngIf=\"errors.pedido\" >  {{ errors['pedido'].message }} </p>   \n    <p *ngIf=\"errors.horasPLC\" >  {{ errors['horasPLC'].message }} </p>       \n  </div>\n\n  <form (submit)='criarProjeto(projCreateForm)' #projCreateForm='ngForm'>\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Código</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input is-focused\" \n            type=\"text\" \n            name=\"codigo\" \n            minlength=4\n            required\n            [(ngModel)]=\"projeto.codigo\"\n            #codigo=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.codigo.valid\" class=\"purple\">* Código precisar ter 7 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Descrição</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input \" \n          type=\"text\" \n          name=\"descricao\" \n          minlength=8\n          required\n          [(ngModel)]=\"projeto.descricao\"\n          #descricao=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!projeto.descricao.valid\" class=\"purple\">Descrição do projeto precisar ter no mínimo 8 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Cliente</label>\n    </div>\n\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <div class=\"select is-multiple control\">\n          <select name=\"_clienteId\" [(ngModel)]=\"clienteSelecionado\" required>\n              <option *ngFor=\"let c of clientes\" [value]=\"c._id\">\n                {{ c.nomeFantasia }}\n              </option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input \" \n          type=\"text\" \n          name=\"cliente\" \n          minlength=4\n          required\n          [(ngModel)]=\"projeto.cliente\"\n          #cliente=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div> -->\n  </div>\n  <!-- <div *ngIf=\"!projeto.cliente.valid\" class=\"purple\">Cliente precisar ter no mínimo 6 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Pedido</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"pedido\" \n          required\n          [(ngModel)]=\"projeto.pedido\"\n          #pedido=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!projeto.pedido.valid\" class=\"purple\">Pedido do projeto precisar ter no mínimo 4 caracteres!</div> -->\n\nDados financeiros:\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Horas PLC</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input \" \n          type=\"text\" \n          name=\"horasPLC\" \n          [(ngModel)]=\"projeto.horasPLC\"\n          #horasPLC=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!horasPLC.valid\" class=\"purple\">horasPLC precisar ter no mínimo 4 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Horas IHM</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input \" \n          type=\"text\" \n          name=\"horasIHM\" \n          [(ngModel)]=\"projeto.horasIHM\"\n          #descricao=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!horasIHM.valid\" class=\"purple\">horasIHM do projeto precisar ter no mínimo 8 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Valor Terceiros</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input \" \n          type=\"text\" \n          name=\"valorTerceiros\" \n          [(ngModel)]=\"projeto.valorTerceiros\"\n          #valorTerceiros=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!valorTerceiros.valid\" class=\"purple\">valorTerceiros precisar ter no mínimo 4 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n    <label class=\"label\">Valor Materiais</label>\n    </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"valorMateriais\" \n            [(ngModel)]=\"projeto.valorMateriais\"\n            #valorMateriais=\"ngModel\"\n            />\n          </p>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n    <label class=\"label\">Valor Viagens</label>\n    </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input \" \n            type=\"text\" \n            name=\"valorViagens\" \n            [(ngModel)]=\"projeto.valorViagens\"\n            #valorViagens=\"ngModel\"\n            />\n          </p>\n        </div>\n    </div>\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/projetos']\">Cancela</button>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"projCreateForm.invalid\">Confirma</button>\n\n  </form>\n</div>  "

/***/ }),

/***/ "./src/app/projeto/projeto-novo/projeto-novo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-novo/projeto-novo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\nselect {\n  margin-bottom: 15px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 60px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cliente/cliente.service */ "./src/app/cliente/cliente.service.ts");
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
    function ProjetoNovoComponent(_usuarioService, _projetoService, _clienteService, _router) {
        this._usuarioService = _usuarioService;
        this._projetoService = _projetoService;
        this._clienteService = _clienteService;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.projeto = {
            codigo: "",
            descricao: "",
            cliente: "",
            pedido: "",
            horasPLC: 0,
            horasIHM: 0,
            valorTerceiros: 0,
            valorMateriais: 0,
            valorViagens: 0
        };
    }
    ProjetoNovoComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ProjetoNovoComponent > usuarioLogado ', this.usuarioLogado.email);
        this.obterListaCliente();
    };
    ProjetoNovoComponent.prototype.obterListaCliente = function () {
        var _this = this;
        console.log('ProjetoNovoComponent > obterListaCliente()');
        var cliObservable = this._clienteService.obterTodos();
        cliObservable.subscribe(function (clientes) {
            _this.clientes = clientes.json();
        }, function (err) { }, function () { });
    };
    ProjetoNovoComponent.prototype.criarProjeto = function (projForm) {
        var _this = this;
        console.log('ProjetoNovoComponent > novoProjeto(nProjForm)', projForm);
        this._projetoService.criarProjeto(projForm.value)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu salvando projeto ', _this.errors);
                _this._router.navigate(['/projeto/novo']);
            }
            else {
                _this._router.navigate(['/projetos']);
            }
        }, function (err) {
            throw err;
        });
        projForm.resetForm();
    };
    ProjetoNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-novo',
            template: __webpack_require__(/*! ./projeto-novo.component.html */ "./src/app/projeto/projeto-novo/projeto-novo.component.html"),
            styles: [__webpack_require__(/*! ./projeto-novo.component.scss */ "./src/app/projeto/projeto-novo/projeto-novo.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _projeto_service__WEBPACK_IMPORTED_MODULE_3__["ProjetoService"],
            _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjetoNovoComponent);
    return ProjetoNovoComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto-show/projeto-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-show/projeto-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"projeto/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <article class=\"media\">\n    <div class=\"media-content\">\n      <div class=\"content\">\n\n        <br>\n        <div id=\"scroll\">\n          <table class=\"table table-hover\" align=\"left\">\n            <thead>\n                <tr class=\"table-primary d-flex\">\n                  <th class=\"col-1\">Código</th>\n                  <th class=\"col-3\">Descrição</th>\n                  <th class=\"col-2\">Cliente</th>\n                  <th class=\"col-2\">Pedido</th>\n                  <th class=\"col-1\">Ação</th>\n                  <th class=\"col-1\"> </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let projeto of projetos\" class=\"d-flex\">\n                  <td class=\"col-1\">{{ projeto['codigo'] }}</td>\n                  <td class=\"col-3\">{{ projeto['descricao'] }}</td>\n                  <td class=\"col-2\">{{ projeto['cliente'] }}</td>\n                  <td class=\"col-2\">{{ projeto['pedido'] }}</td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/edit/', projeto['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/show', projeto['_id'] ]\"  class=\"button is-danger\">Encerrar</button></td>\n                </tr>\n              </tbody>\n            </table> \n          </div>    \n        </div>\n      </div>\n    </article>\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n  <button type=\"button\" class=\"btn btn-primary\"(click)=\"encerrar()\">Confirma</button>\n\n        <!-- <div class=\"errors\">\n          <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n          <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n        </div> -->\n</div>  "

/***/ }),

/***/ "./src/app/projeto/projeto-show/projeto-show.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/projeto/projeto-show/projeto-show.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n"

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
    // encerrar() {
    //   console.log('projeto em showProjeto: ', this.projeto); 
    //   this._projetoService.encerrarProjeto(this.projeto, (res) => {
    //     this._router.navigate(['projeto/list', res]);
    //   });
    // }
    ProjetoShowComponent.prototype.cancel = function () {
        this._router.navigate(['/projeto/list']);
    };
    ProjetoShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-show',
            template: __webpack_require__(/*! ./projeto-show.component.html */ "./src/app/projeto/projeto-show/projeto-show.component.html"),
            styles: [__webpack_require__(/*! ./projeto-show.component.scss */ "./src/app/projeto/projeto-show/projeto-show.component.scss")]
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
    ProjetoService.prototype.obterApontamentosHora = function (usuario) {
        console.log('ProjetoService > obterApontamentosHora(usuario)', usuario);
        return this._http.get('/apontamentos/hora/', { params: { usuario: usuario } });
    };
    ProjetoService.prototype.obterApontamentosDespesa = function (usuario) {
        console.log('ProjetoService > obterApontamentosDespesa(usuario)', usuario);
        return this._http.get('/apontamentos/despesa/', { params: { usuario: usuario } });
    };
    ProjetoService.prototype.obterTodos = function () {
        console.log('ProjetoService > obterTodos()');
        return this._http.get('/projetos');
    };
    ProjetoService.prototype.criarProjeto = function (projeto) {
        console.log('ProjetoService > criarProjeto(projeto,cliente)', projeto.codigo, projeto.descricao, projeto._clienteId);
        return this._http.post('projeto/novo', projeto);
    };
    ProjetoService.prototype.editarProjeto = function (projeto) {
        console.log('ProjetoService > editarProjeto(projeto)', projeto);
        return this._http.put('projeto/edit/' + projeto['_id'], projeto);
    };
    ProjetoService.prototype.apontamentoNovo = function (id, apontamento) {
        console.log('ProjetoService > apontamentoNovo(id, apontamento)', id, apontamento);
        return this._http.put('apontamento/novo/' + id, apontamento);
    };
    ProjetoService.prototype.encerrarProjeto = function (id) {
        console.log('ProjetoService > encerrarProjeto(id)', id);
        return this._http.put('/projeto/encerrar/' + id, this.projeto);
    };
    ProjetoService.prototype.obterProjetoById = function (id) {
        console.log('ProjetoService > obterProjetoById', id);
        return this._http.get('/projeto/' + id);
    };
    ProjetoService.prototype.encerrarApontamento = function (projeto) {
        console.log('ProjetoService > encerrarApontamento(projeto)', projeto);
        return this._http.put('/apontamento/encerrar/' + projeto['id'], projeto);
    };
    ProjetoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProjetoService);
    return ProjetoService;
}());



/***/ }),

/***/ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<p>\n  relatorio-financeiro works!\n</p>\n"

/***/ }),

/***/ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n"

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
            styles: [__webpack_require__(/*! ./relatorio-financeiro.component.scss */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RelatorioFinanceiroComponent);
    return RelatorioFinanceiroComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-edit/usuario-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-edit/usuario-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n  \n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n  \n  <div class=\"container\">\n\n\n      Dados do usuário:\n\n      <div class=\"errors\" *ngIf=\"errors\">\n        <p *ngIf=\"errors.nome\" >  {{ errors['nome'].message }} </p>\n        <p *ngIf=\"errors.email\" >  {{ errors['email'].message }} </p>\n        <p *ngIf=\"errors.funcao\" >  {{ errors['funcao'].message }} </p>\n        <p *ngIf=\"errors.custoHora\" >  {{ errors['custoHora'].message }} </p>       \n      </div>\n\n    <form (submit)='editarUsuario()' #userForm='ngForm'>\n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Nome</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n              <p class=\"control\">\n                  <input \n                  class=\"input\" \n                  type=\"text\" \n                  name=\"nome\" \n                  minlength=4\n                  required\n                  [(ngModel)]=\"usuario.nome\"\n                  #nome=\"ngModel\"\n                  />\n                </p>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">E-mail</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input\" \n              type=\"text\" \n              name=\"email\" \n              required\n              [(ngModel)]=\"usuario.email\"\n              #email=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.descricao.valid\" class=\"purple\">Descrição do projeto precisar ter no mínimo 8 caracteres!</div> -->\n      \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Função</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input \" \n              type=\"text\" \n              name=\"funcao\" \n              minlength=4\n              required\n              [(ngModel)]=\"usuario.funcao\"\n              #funcao=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.cliente.valid\" class=\"purple\">Cliente precisar ter no mínimo 6 caracteres!</div> -->\n    \n      <div class=\"field is-horizontal\">\n        <div class=\"field-label is-normal\">\n          <label class=\"label\">Custo/hora</label>\n        </div>\n        <div class=\"field-body\">\n          <div class=\"field\">\n            <p class=\"control\">\n              <input \n              class=\"input\" \n              type=\"text\" \n              name=\"custoHora\" \n              required\n              [(ngModel)]=\"usuario.custoHora\"\n              #custoHora=\"ngModel\"\n              />\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"!projeto.pedido.valid\" class=\"purple\">Pedido do projeto precisar ter no mínimo 4 caracteres!</div> -->\n      \n      <div class=\"field is-horizontal\">\n          <label class=\"checkbox\">\n              <input \n              type=\"checkbox\"\n              name=\"admin\"\n              [(ngModel)]=\"usuario.admin\">\n            &nbsp; Adminstrador  \n          </label>\n        </div>\n\n    \n      <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/usuarios']\">Cancela</button>\n      <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"userForm.invalid\">Confirma</button>\n    \n    </form>\n  </div>  \n"

/***/ }),

/***/ "./src/app/usuario/usuario-edit/usuario-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-edit/usuario-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\nselect {\n  margin-bottom: 15px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 60px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario/usuario.service.ts");
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



var UsuarioEditComponent = /** @class */ (function () {
    function UsuarioEditComponent(_usuarioService, _router, _route) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._route = _route;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.usuario = {
            nome: "",
            email: "",
            funcao: "",
            custoHora: 0,
            admin: false
        };
    }
    UsuarioEditComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ProjetoEditComponent > usuarioLogado ', this.usuarioLogado.email);
        this.obterUsuario(this._route.snapshot.params['id']);
    };
    UsuarioEditComponent.prototype.obterUsuario = function (id) {
        var _this = this;
        console.log('UsuarioEditComponent > obterUsuario');
        var observable = this._usuarioService.obterUsuarioById(id);
        observable.subscribe(function (response) {
            _this.usuario = response.json();
        });
    };
    UsuarioEditComponent.prototype.editarUsuario = function () {
        var _this = this;
        console.log('UsuarioEditComponent > obterUsuario()', this.usuario);
        this._usuarioService.editarUsuario(this.usuario)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu editando usuario ', _this.errors);
                _this._router.navigate(['/usuario/edit/', _this.usuario['_id']]);
            }
            else {
                _this._router.navigate(['/usuarios']);
            }
        }, function (err) {
            throw err;
        });
    };
    UsuarioEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-edit',
            template: __webpack_require__(/*! ./usuario-edit.component.html */ "./src/app/usuario/usuario-edit/usuario-edit.component.html"),
            styles: [__webpack_require__(/*! ./usuario-edit.component.scss */ "./src/app/usuario/usuario-edit/usuario-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UsuarioEditComponent);
    return UsuarioEditComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-list/usuario-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-list/usuario-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\"> \n    <nav class=\"level\">\n      <div class=\"level-left\">\n          <div class=\"title is-4\">Usuário</div> \n      </div>\n      <div class=\"level-right\">\n          <button type=\"button\" class=\"button is-light\" [routerLink]=\"['/usuario/novo']\">Novo usuário</button>\n      </div> \n    </nav>\n  <article class=\"media\">\n    <div class=\"media-content\">\n      <div class=\"content\">\n\n        <br>\n        <div id=\"scroll\">\n          <table class=\"table table-hover\" align=\"left\">\n            <thead>\n                <tr class=\"table-primary d-flex\">\n                  <th class=\"col-2\">Nome</th>\n                  <th class=\"col-3\">E-mail</th>\n                  <th class=\"col-2\">Função</th>\n                  <th class=\"col-1\">Custo/hr</th>\n                  <th class=\"col-1\">Admin</th>\n                  <th class=\"col-1\">Ação</th>\n                  <th class=\"col-1\"> </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let u  of usuarios\" class=\"d-flex\">\n                  <td class=\"col-2\">{{ u['nome'] }}</td>\n                  <td class=\"col-3\">{{ u['email'] }}</td>\n                  <td class=\"col-2\">{{ u['funcao'] }}</td>\n                  <td class=\"col-1\">{{ u['custoHora'] | number : '1.2-2' }}</td>\n                  <td class=\"col-1\">\n                  <img [src]=\"u['admin'] ? frontPath : backPath\"></td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/usuario/edit/', u['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/usuario/show', u['_id'] ]\"  class=\"button is-danger\">Detalhes</button></td>\n                </tr>\n              </tbody>\n            </table> \n          </div>    \n        </div>\n      </div>\n    </article>\n</div>"

/***/ }),

/***/ "./src/app/usuario/usuario-list/usuario-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-list/usuario-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario/usuario.service.ts");
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



var UsuarioListComponent = /** @class */ (function () {
    function UsuarioListComponent(_usuarioService, _router) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.frontPath = "../../assets/images/check.png";
        this.backPath = "";
    }
    UsuarioListComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioListComponent > usuariologado', this.usuarioLogado.email);
        this.obterListaUsuario();
    };
    UsuarioListComponent.prototype.obterListaUsuario = function () {
        var _this = this;
        console.log('ProjetoListComponent > obterListaUsuario()');
        var usuarioObservable = this._usuarioService.obterTodos();
        usuarioObservable.subscribe(function (usuarios) {
            _this.usuarios = usuarios.json();
        }, function (err) { }, function () { });
    };
    UsuarioListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-list',
            template: __webpack_require__(/*! ./usuario-list.component.html */ "./src/app/usuario/usuario-list/usuario-list.component.html"),
            styles: [__webpack_require__(/*! ./usuario-list.component.scss */ "./src/app/usuario/usuario-list/usuario-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsuarioListComponent);
    return UsuarioListComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-novo/usuario-novo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-novo/usuario-novo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/usuarios']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  \n  Dados do usuário:\n\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors.nome\" >  {{ errors['nome'].message }} </p>\n    <p *ngIf=\"errors.email\" >  {{ errors['email'].message }} </p>\n    <p *ngIf=\"errors.funcao\" >  {{ errors['funcao'].message }} </p>\n    <p *ngIf=\"errors.custoHora\" >  {{ errors['custoHora'].message }} </p>       \n  </div>\n\n  <form (submit)=\"criarUsuario(userForm)\" #userForm='ngForm'>\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Nome</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input is-focused\" \n            type=\"text\" \n            name=\"nome\" \n            minlength=4\n            required\n            [(ngModel)]=\"usuario.nome\"\n            #nome=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!codigo.valid\" class=\"purple\">Código precisar ter no mínimo 4 caracteres!</div> -->\n    \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">e-mail</label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <p class=\"control\">\n            <input \n            class=\"input\" \n            type=\"text\" \n            name=\"email\" \n            required\n            pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n            [(ngModel)]=\"usuario.email\"\n            #email=\"ngModel\"\n            />\n          </p>\n        </div>\n      </div>\n    </div>\n  <!-- <div *ngIf=\"!codigo.valid\" class=\"purple\">Código precisar ter no mínimo 4 caracteres!</div> -->\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Função</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"funcao\" \n          minlength=4\n          required\n          [(ngModel)]=\"usuario.funcao\"\n          #funcao=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"!cliente.valid\" class=\"purple\">Função precisar ter no mínimo 4 caracteres!</div> -->\n\n\n  <div class=\"field is-horizontal\">\n    <div class=\"field-label is-normal\">\n      <label class=\"label\">Custo hora</label>\n    </div>\n    <div class=\"field-body\">\n      <div class=\"field\">\n        <p class=\"control\">\n          <input \n          class=\"input\" \n          type=\"text\" \n          name=\"custoHora\" \n          required\n          [(ngModel)]=\"usuario.custoHora\"\n          #custoHora=\"ngModel\"\n          />\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"field is-horizontal\">\n    <label class=\"checkbox\">\n        <input \n        type=\"checkbox\"\n        name=\"admin\"\n        [(ngModel)]=\"usuario.admin\">\n        &nbsp; Administrador  \n    </label>\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"userForm.invalid\">Confirma</button>\n\n  </form>\n  \n</div>"

/***/ }),

/***/ "./src/app/usuario/usuario-novo/usuario-novo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-novo/usuario-novo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\nselect {\n  margin-bottom: 15px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 60px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario/usuario.service.ts");
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



var UsuarioNovoComponent = /** @class */ (function () {
    function UsuarioNovoComponent(_usuarioService, _router) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.usuario = {
            nome: "",
            email: "",
            funcao: "",
            custoHora: 0,
            admin: false
        };
    }
    UsuarioNovoComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioNovoComponent > usuariologado ', this.usuarioLogado.email);
    };
    UsuarioNovoComponent.prototype.criarUsuario = function (userForm) {
        var _this = this;
        console.log('UsuarioNovoComponent > criarUsuario(userForm)', userForm);
        this._usuarioService.criarUsuario(userForm.value)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu salvando usuario ', _this.errors);
                _this._router.navigate(['/usuario/novo']);
            }
            else {
                _this._router.navigate(['/usuarios']);
            }
        }, function (err) {
            throw err;
        });
        userForm.resetForm();
    };
    UsuarioNovoComponent.prototype.cancel = function () {
        this._router.navigate(['/usuarios']);
    };
    UsuarioNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-novo',
            template: __webpack_require__(/*! ./usuario-novo.component.html */ "./src/app/usuario/usuario-novo/usuario-novo.component.html"),
            styles: [__webpack_require__(/*! ./usuario-novo.component.scss */ "./src/app/usuario/usuario-novo/usuario-novo.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsuarioNovoComponent);
    return UsuarioNovoComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario-show/usuario-show.component.html":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-show/usuario-show.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n\n    Dados do usuário:\n\n  <form (submit)='excluirUsuario()' #userForm='ngForm'>\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Nome</label>\n      </div>\n      <div class=\"field-body\">\n        {{ usuario.nome }}\n      </div>\n    </div>\n\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">E-mail</label>\n      </div>\n      <div class=\"field-body\">\n        {{ usuario.email }}\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.descricao.valid\" class=\"purple\">Descrição do projeto precisar ter no mínimo 8 caracteres!</div> -->\n    \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Função</label>\n      </div>\n      <div class=\"field-body\">\n        {{ usuario.funcao }}\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.cliente.valid\" class=\"purple\">Cliente precisar ter no mínimo 6 caracteres!</div> -->\n  \n    <div class=\"field is-horizontal\">\n      <div class=\"field-label is-normal\">\n        <label class=\"label\">Custo/hora</label>\n      </div>\n      <div class=\"field-body\">\n        {{ usuario.custoHora }}\n      </div>\n    </div>\n    <!-- <div *ngIf=\"!projeto.pedido.valid\" class=\"purple\">Pedido do projeto precisar ter no mínimo 4 caracteres!</div> -->\n    \n    <div class=\"field is-horizontal\">\n        <label class=\"checkbox\">\n          <figure class=\"image is-32x32\">\n            <img [src]=\"usuario['admin'] ? frontPath : backPath \">\n          </figure>\n          &nbsp; Adminstrador  \n        </label>\n      </div>\n\n  \n    <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/usuarios']\">Cancela</button>\n    <button type=\"submit\" class=\"button is-danger\"  [disabled]=\"userForm.invalid\">Excluir</button>\n  \n  </form>\n</div>  \n"

/***/ }),

/***/ "./src/app/usuario/usuario-show/usuario-show.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-show/usuario-show.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\nselect {\n  margin-bottom: 15px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 60px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario/usuario.service.ts");
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
    function UsuarioShowComponent(_usuarioService, _router, _route) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._route = _route;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.usuario = {
            nome: "",
            email: "",
            funcao: "",
            custoHora: 0,
            admin: ""
        };
        this.frontPath = "../../assets/images/check.png";
        this.backPath = "";
    }
    UsuarioShowComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioShowComponent > usuarioLogado ', this.usuarioLogado.email);
        this.obterUsuario(this._route.snapshot.params['id']);
    };
    UsuarioShowComponent.prototype.obterUsuario = function (id) {
        var _this = this;
        console.log('UsuarioEditComponent > obterUsuario');
        var observable = this._usuarioService.obterUsuarioById(id);
        observable.subscribe(function (response) {
            _this.usuario = response.json();
        });
    };
    UsuarioShowComponent.prototype.excluirUsuario = function (id) {
        console.log('excluir Usuario OK!!!');
    };
    UsuarioShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-show',
            template: __webpack_require__(/*! ./usuario-show.component.html */ "./src/app/usuario/usuario-show/usuario-show.component.html"),
            styles: [__webpack_require__(/*! ./usuario-show.component.scss */ "./src/app/usuario/usuario-show/usuario-show.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
    UsuarioService.prototype.login = function (usuario) {
        console.log('UsuarioService > login(usuario)', usuario);
        this.usuarioLogado = usuario;
        return this._http.get('/login/', { params: { usuario: usuario } });
    };
    UsuarioService.prototype.setUserLoggedIn = function (usuario) {
        this.isUserLoggedIn = true;
        usuario = this.usuarioLogado;
    };
    UsuarioService.prototype.getUserLoggedIn = function () {
        this.login(this.usuarioLogado);
        console.log('getUserLoggedIn() ', this.usuarioLogado);
        return this.usuarioLogado;
    };
    UsuarioService.prototype.obterTodos = function () {
        console.log('UsuarioService > obterTodos()');
        return this._http.get('/usuarios');
    };
    UsuarioService.prototype.obterUsuarioById = function (id) {
        console.log('UsuarioService > obterUsuarioById', id);
        return this._http.get('/usuario/' + id);
    };
    UsuarioService.prototype.criarUsuario = function (usuario) {
        console.log('UsuarioService > criarUsuario(usuario)', usuario);
        return this._http.post('usuario/novo', usuario);
    };
    UsuarioService.prototype.editarUsuario = function (usuario) {
        console.log('UsuarioService > editarUsuario(usuario)', usuario);
        return this._http.put('usuario/edit/' + usuario['_id'], usuario);
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\"> \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\"> \n\n  <nav class=\"level\">\n      <div class=\"level-left\">\n          <div class=\"title is-4\">Apontamentos Projeto</div>\n      </div>\n      <div class=\"level-right\">\n          <button mat-stroked-button color=\"primary\" style=\"margin-top: 15px;\" [routerLink]=\"['/apontamento/novo']\">Novo apontamento</button>\n      </div> \n  </nav>\n  <p>Olá {{ usuarioLogado }}</p>\n\n  <mat-tab-group>\n    <div class=\"container\"> \n      <!-- <mat-tab label=\"Hora\" *ngIf=\"apontamentos.hora.inicio\"> -->\n      <mat-tab label=\"Hora\">\n        <apontamento-lista-hora></apontamento-lista-hora>\n      </mat-tab>\n      <mat-tab label=\"Despesa\">\n          <apontamento-lista-despesa></apontamento-lista-despesa>\n      </mat-tab>        \n    </div>\n  </mat-tab-group>\n</div>\n\n"

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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\"> \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\">\n\n  <div class=\"level-left\">\n      <div style=\"margin: 20px, 0px, 20px, 0px;\" class=\"title is-4\">Apontamento</div> \n  </div>\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors['hora.inicio'].message\" >  {{ errors['hora.inicio'].message }} </p>   \n  </div> \n\n  <!-- <form  #formData=\"ngForm\" [formGroup]=\"options\"> -->\n  <form class=\"example-form\" [formGroup] = \"options\">\n\n    <div class=\"example-container\">\n        <mat-form-field>\n          <mat-select placeholder=\"Selecione o projeto\" name=\"projeto\" formControlName=\"projeto\" required>\n            <mat-option value=\"option\" *ngFor=\"let p of projetos\" [value]=\"p._id\"> {{ p.codigo }} {{ p.descricao }}</mat-option>\n          </mat-select>\n          <mat-hint align=\"end\">Projetos ativos</mat-hint>\n        </mat-form-field>\n\n          <div class=\"example-container\">\n            <mat-radio-group formControlName=\"tipo\" [value]=\"tipo\" >\n              <mat-radio-button (change)=\"radioChange($event)\" *ngFor=\"let a of array;\" [value]=\"a\"> {{ a }}&nbsp;&nbsp;</mat-radio-button>\n            </mat-radio-group>&nbsp;&nbsp;\n\n            <mat-form-field *ngIf=\"(options.get('tipo').value=='despesa')\">\n                <mat-select placeholder=\"Selecione o tipo\"  formControlName=\"opDespesa\">\n                  <mat-option value=\"alimentacao\"> alimentação</mat-option>\n                  <mat-option value=\"hospedagem\"> hospedagem</mat-option>\n                  <mat-option value=\"pedagio\"> pedágio</mat-option>\n                  <mat-option value=\"transporte\"> transporte</mat-option>\n                  <mat-option value=\"outros\"> outros</mat-option>\n                </mat-select>\n                <mat-hint align=\"end\"></mat-hint>\n            </mat-form-field>&nbsp;&nbsp;\n\n            <mat-form-field *ngIf=\"options.get('opDespesa').value=='outros' && options.get('tipo').value=='despesa'\" hintLabel=\"Max 20 caracteres\">\n                <input matInput formControlName=\"descricao\" #input maxlength=\"20\">\n                <mat-hint align=\"end\">{{input.value?.length || 0}}/20</mat-hint>\n              </mat-form-field>&nbsp;&nbsp;\n\n            <mat-form-field *ngIf=\"(options.get('tipo').value=='despesa')\">\n              <input \n              formControlName=\"valor\"\n              matInput \n              placeholder=\"Valor\" \n              type=\"number\" \n              class=\"example-right-align\">\n              <span matPrefix>$&nbsp;</span>\n              <span matSuffix>.00</span>\n            </mat-form-field>&nbsp;&nbsp;\n\n            <mat-form-field *ngIf=\"(options.get('tipo').value=='hora')\" >\n              <mat-select placeholder=\"início\" formControlName=\"inicio\" > \n                  <mat-option value=\"{{ today }}\">{{today | date:\"MMM d, y H:mm:ss\"}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </div>\n\n      </div>\n    </form>\n\n    <button mat-raised-button color=\"basic\"   (click)=\"cancel()\">cancela</button>\n    <button mat-raised-button color=\"primary\" (click)=\"setApontamento()\" [disabled]=\"options.invalid\">confirma</button>\n    \n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/apontamento/apontamento-novo/apontamento-novo.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\nbutton {\n  margin: 10px; }\n\nimg {\n  width: 190px;\n  height: auto; }\n\n.errors {\n  color: purple; }\n"

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




var ApontamentoNovoComponent = /** @class */ (function () {
    function ApontamentoNovoComponent(fb, _projetoService, _usuarioService, _router) {
        this.fb = fb;
        this._projetoService = _projetoService;
        this._usuarioService = _usuarioService;
        this._router = _router;
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
        this.array = ['hora', 'despesa'];
        this.options = fb.group({
            tipo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            projeto: [null],
            opDespesa: [null],
            descricao: [null],
            inicio: [null],
            fim: [null],
            valor: [null]
        });
        this.formControlValueChanged();
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
        }, function (err) { }, function () { });
    };
    ApontamentoNovoComponent.prototype.formControlValueChanged = function () {
        var _this = this;
        var inicio = this.options.get('inicio');
        var opDespesa = this.options.get('opDespesa');
        var descricao = this.options.get('descricao');
        var valor = this.options.get('valor');
        this.options.get('tipo').valueChanges.subscribe(function (tipo) {
            if (tipo === 'hora') {
                descricao.clearValidators();
                valor.clearValidators();
                inicio.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            }
            else if (tipo === 'despesa') {
                _this.options.get('opDespesa').valueChanges.subscribe(function (opdesp) {
                    opDespesa.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                    if (opdesp === 'outros') {
                        descricao.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                    }
                    else {
                        descricao.clearValidators();
                    }
                    valor.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                    inicio.clearValidators();
                });
            }
            inicio.updateValueAndValidity();
            opDespesa.updateValueAndValidity();
            descricao.updateValueAndValidity();
            valor.updateValueAndValidity();
        });
    };
    ApontamentoNovoComponent.prototype.radioChange = function (event, i) {
        if (event.value === 'despesa') {
            this.array = ['despesa'];
        }
        else {
            this.array = ['hora'];
        }
    };
    ApontamentoNovoComponent.prototype.setApontamento = function () {
        var _this = this;
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
        this._projetoService.apontamentoNovo(this.options.controls.projeto.value, this.apontamento)
            .subscribe(function (observable) {
            if (observable.json().errors) {
                _this.errors = observable.json().errors;
                console.log('Algum erro ocorreu salvando apontamento ', _this.errors);
                _this._router.navigate(['/apontamento/novo']);
            }
            else {
                _this._router.navigate(['/apontamentos']);
            }
        }, function (err) {
            throw err;
        });
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

module.exports = "\n    <router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global-error/global-error.component */ "./src/app/global-error/global-error.component.ts");
/* harmony import */ var _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projeto/projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cliente/cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _global_error_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./global-error-handler.service */ "./src/app/global-error-handler.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cliente/cliente-edit/cliente-edit.component */ "./src/app/cliente/cliente-edit/cliente-edit.component.ts");
/* harmony import */ var _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cliente/cliente-novo/cliente-novo.component */ "./src/app/cliente/cliente-novo/cliente-novo.component.ts");
/* harmony import */ var _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cliente/cliente-show/cliente-show.component */ "./src/app/cliente/cliente-show/cliente-show.component.ts");
/* harmony import */ var _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./usuario/usuario-list/usuario-list.component */ "./src/app/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./usuario/usuario-edit/usuario-edit.component */ "./src/app/usuario/usuario-edit/usuario-edit.component.ts");
/* harmony import */ var _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./usuario/usuario-novo/usuario-novo.component */ "./src/app/usuario/usuario-novo/usuario-novo.component.ts");
/* harmony import */ var _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./usuario/usuario-show/usuario-show.component */ "./src/app/usuario/usuario-show/usuario-show.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "./src/app/financeiro/financeiro.component.ts");
/* harmony import */ var _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./projeto/projeto-list/projeto-list.component */ "./src/app/projeto/projeto-list/projeto-list.component.ts");
/* harmony import */ var _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./projeto/projeto-novo/projeto-novo.component */ "./src/app/projeto/projeto-novo/projeto-novo.component.ts");
/* harmony import */ var _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./projeto/projeto-show/projeto-show.component */ "./src/app/projeto/projeto-show/projeto-show.component.ts");
/* harmony import */ var _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./projeto/projeto-edit/projeto-edit.component */ "./src/app/projeto/projeto-edit/projeto-edit.component.ts");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cliente/cliente-list/cliente-list.component */ "./src/app/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./relatorio/relatorio-financeiro/relatorio-financeiro.component */ "./src/app/relatorio/relatorio-financeiro/relatorio-financeiro.component.ts");
/* harmony import */ var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _apontamento_apontamento_novo_apontamento_novo_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./apontamento/apontamento-novo/apontamento-novo.component */ "./src/app/apontamento/apontamento-novo/apontamento-novo.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _apontamento_apontamento_dashboard_apontamento_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./apontamento/apontamento-dashboard/apontamento-dashboard.component */ "./src/app/apontamento/apontamento-dashboard/apontamento-dashboard.component.ts");
/* harmony import */ var _apontamento_apontamento_lista_despesa_apontamento_lista_despesa_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component */ "./src/app/apontamento/apontamento-lista-despesa/apontamento-lista-despesa.component.ts");
/* harmony import */ var _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./apontamento/apontamento-lista-hora/apontamento-lista-hora.component */ "./src/app/apontamento/apontamento-lista-hora/apontamento-lista-hora.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_25__["FinanceiroComponent"],
                _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_30__["ClienteListComponent"],
                _cliente_cliente_novo_cliente_novo_component__WEBPACK_IMPORTED_MODULE_18__["ClienteNovoComponent"],
                _cliente_cliente_edit_cliente_edit_component__WEBPACK_IMPORTED_MODULE_17__["ClienteEditComponent"],
                _cliente_cliente_show_cliente_show_component__WEBPACK_IMPORTED_MODULE_19__["ClienteShowComponent"],
                _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_20__["UsuarioListComponent"],
                _usuario_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_21__["UsuarioEditComponent"],
                _usuario_usuario_novo_usuario_novo_component__WEBPACK_IMPORTED_MODULE_22__["UsuarioNovoComponent"],
                _usuario_usuario_show_usuario_show_component__WEBPACK_IMPORTED_MODULE_23__["UsuarioShowComponent"],
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_26__["ProjetoListComponent"],
                _projeto_projeto_novo_projeto_novo_component__WEBPACK_IMPORTED_MODULE_27__["ProjetoNovoComponent"],
                _projeto_projeto_show_projeto_show_component__WEBPACK_IMPORTED_MODULE_28__["ProjetoShowComponent"],
                _projeto_projeto_edit_projeto_edit_component__WEBPACK_IMPORTED_MODULE_29__["ProjetoEditComponent"],
                _relatorio_relatorio_financeiro_relatorio_financeiro_component__WEBPACK_IMPORTED_MODULE_31__["RelatorioFinanceiroComponent"],
                _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_32__["PaginaNaoEncontradaComponent"],
                _global_error_global_error_component__WEBPACK_IMPORTED_MODULE_10__["GlobalErrorComponent"],
                _apontamento_apontamento_novo_apontamento_novo_component__WEBPACK_IMPORTED_MODULE_33__["ApontamentoNovoComponent"],
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_26__["DialogProjeto"],
                _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_37__["DialogApontamentoHora"],
                _apontamento_apontamento_dashboard_apontamento_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["ApontamentoDashboardComponent"],
                _apontamento_apontamento_lista_despesa_apontamento_lista_despesa_component__WEBPACK_IMPORTED_MODULE_36__["ApontamentoListaDespesaComponent"],
                _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_37__["ApontamentoListaHoraComponent"]
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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _material__WEBPACK_IMPORTED_MODULE_34__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]
                // NgbModule,
                // NgbModule.forRoot()
            ],
            entryComponents: [
                _projeto_projeto_list_projeto_list_component__WEBPACK_IMPORTED_MODULE_26__["DialogProjeto"],
                _apontamento_apontamento_lista_hora_apontamento_lista_hora_component__WEBPACK_IMPORTED_MODULE_37__["DialogApontamentoHora"]
            ],
            providers: [
                _projeto_projeto_service__WEBPACK_IMPORTED_MODULE_11__["ProjetoService"],
                _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioService"],
                _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_13__["ClienteService"],
                _global_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["GlobalErrorHandlerService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _global_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["GlobalErrorHandlerService"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/clientes']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\">\n    <div class=\"mat-body-2\"> \n      Dados básicos: \n    </div>\n    <div class=\"errors\" *ngIf=\"errors\">\n      <p *ngIf=\"errors.cnpj\" >  {{ errors['cnpj'].message }} </p>\n      <p *ngIf=\"errors.razaoSocial\" >  {{ errors['razaoSocial'].message }} </p>\n      <p *ngIf=\"errors.nomeFantasia\" >  {{ errors['nomeFantasia'].message }} </p>\n      <p *ngIf=\"errors['endereco.logradouro']\" >  {{ errors['endereco.logradouro'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cidade']\" >  {{ errors['endereco.cidade'].message }} </p>  \n      <p *ngIf=\"errors['endereco.estado']\" >  {{ errors['endereco.estado'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cep']\" >  {{ errors['endereco.cep'].message }} </p>          \n    </div>\n\n    <form class=\"example-form\"  *ngIf=\"cliente\" [formGroup] = \"clienteForm\">\n\n        <p> \n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cnpj\"\n          type=\"text\"\n          formControlName=\"cnpj\" \n          name=\"cnpj\"\n          >\n          <mat-error *ngIf=\"cnpj.invalid && cnpj.touched\">\n            cnpj informado não é válido\n          </mat-error>\n        </mat-form-field></td>\n  \n        <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n\n            <td><mat-form-field class=\"example-full-width\">\n              <input \n              matInput \n              placeholder=\"razão social\"\n              type=\"text\"\n              maxlength=\"650\"\n              formControlName=\"razaoSocial\" \n              name=\"razaoSocial\"\n              />\n              <mat-error *ngIf=\"razaoSocial.invalid && razaoSocial.touched\">\n                  razão social informada não é válida\n              </mat-error>\n            </mat-form-field></td>\n          </tr></table>\n\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n          <td><mat-form-field class=\"example-full-width\">\n            <input \n            matInput \n            placeholder=\"nome fantasia\"\n            type=\"text\"\n            formControlName=\"nomeFantasia\"  \n            name=\"nomeFantasia\"\n            />\n            <mat-error *ngIf=\"nomeFantasia.invalid && nomeFantasia.touched\">\n                nome fantasia informado não é válido\n            </mat-error>\n          </mat-form-field></td>\n        </tr></table>\n  \n  \n      <form class=\"example-form\" [formGroup]=\"endereco\">\n        <p>\n        <mat-form-field class=\"example-full-width\">\n          <input \n          matInput\n          placeholder=\"endereço\"\n          type=\"text\"\n          formControlName=\"logradouro\" \n          name=\"logradouro\"  \n          />\n        </mat-form-field>\n      </p>\n  \n\n      <p>\n        <mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"complemento\"\n          type=\"text\"\n          formControlName=\"complemento\" \n          name=\"complemento\"\n          /> \n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cidade\"\n          type=\"text\"\n          formControlName=\"cidade\" \n          name=\"cidade\"\n          >\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"estado\"\n          type=\"text\"\n          formControlName=\"estado\"\n          name=\"estado\" \n          maxlength=\"2\"\n          >\n          <mat-hint align=\"end\" *ngIf=\"estado\">{{estado.value.length}} / 2</mat-hint>\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cep\"\n          type=\"number\"\n          #postalCode\n          formControlName=\"cep\" \n          maxlength=\"8\" \n          name=\"cep\" \n          >\n          <mat-hint align=\"end\" *ngIf=\"cep\">{{cep.value.length}} / 8</mat-hint>\n\n        </mat-form-field></td>\n      </tr></table>\n      </form>\n      <div class=\"mat-body-2\"> \n        Dados comerciais:\n      </div>\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput\n          placeholder=\"valor HH\"\n          type=\"number\"\n          formControlName=\"valorHH\" \n          name=\"valorHH\"  \n          />\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput\n          placeholder=\"prazo pagto\"\n          type=\"number\"\n          formControlName=\"prazoPgto\" \n          name=\"prazoPgto\"  \n          />\n        </mat-form-field></td>\n      </tr></table>\n      <div class=\"mat-body-2\"> \n        Contatos: \n      </div>\n      <div formArrayName=\"contatos\">\n\n\n        <div *ngFor=\"let contato of contatoForms.controls; let i = index;\" [formGroupName]=\"i\">\n  \n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n            <td><mat-form-field class=\"example-full-width\">\n              <input \n              matInput\n              placeholder=\"nome\"\n              type=\"text\"\n              formControlName=\"nome\" \n              name=\"nome\"  \n              />\n            </mat-form-field></td>\n  \n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"email\"\n                type=\"email\"\n                formControlName=\"email\" \n                name=\"email\"\n                />\n              </mat-form-field></td>\n  \n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"fone\"\n                type=\"number\"\n                formControlName=\"fone\" \n                name=\"fone\"  \n                />\n              </mat-form-field></td>\n  \n              <td><mat-form-field class=\"example-full-width\">\n                  <input \n                  matInput\n                  placeholder=\"skype\"\n                  type=\"text\"\n                  formControlName=\"skype\" \n                  name=\"skype\"  \n                  />\n                </mat-form-field></td>\n\n              <a  mat-mini-fab color=\"warn\" (click)=\"deleteContato(i)\">-</a>\n              <br>\n            </tr></table>\n          </div>\n        \n        </div>  \n\n        <a mat-mini-fab color=\"primary\" (click)=\"addContato()\">+</a>\n     <div>\n      <button mat-raised-button color=\"basic\" (click)=\"cancel()\">Cancela</button>\n\n      <button mat-raised-button color=\"primary\"  (click)=\"editarCliente(clienteForm, endereco)\" [disabled]=\"clienteForm.invalid || endereco.invalid\">Confirma</button>\n    </div>\n  \n    </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/cliente/cliente-edit/cliente-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-edit/cliente-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 175px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n"

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

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n      </div>\n  </nav>\n</div>\n<div class=\"container\">\n\n  <div class=\"level-left\">\n      <div style=\"margin-top: 20px;\" class=\"title is-4\">Clientes</div> \n  </div>\n  <div class=\"level-right\">\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"['/cliente/novo']\">Novo cliente</button>\n  </div> \n\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n    </mat-form-field>\n  \n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n\n        <!-- nomeFantasia Column -->\n        <ng-container matColumnDef=\"nomeFantasia\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> nome fantasia </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.nomeFantasia}} </td>\n        </ng-container>\n  \n        <!-- valorHH Column -->\n        <ng-container matColumnDef=\"valorHH\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> valor HH </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.valorHH}} </td>\n        </ng-container>\n  \n        <!-- prazoPgto Column -->\n        <ng-container matColumnDef=\"prazoPgto\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> prazo pagto </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.prazoPgto}} </td>\n        </ng-container>\n  \n        <!-- contatos Column -->\n          <ng-container matColumnDef=\"nome\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> contato </th>\n            <td mat-cell *matCellDef=\"let row\">  {{row.nome}} </td>\n          </ng-container>\n\n        <!-- email Column -->\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> email </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n        </ng-container>\n\n        <!-- fone Column -->\n        <ng-container matColumnDef=\"fone\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> fone </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.fone}} </td>\n        </ng-container>\n\n        <!-- Acao 1 Column -->\n        <ng-container matColumnDef=\"acao1\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ação </th>\n          <td mat-cell *matCellDef=\"let row\" >\n            <div class=\"button-row\">\n              <!-- <button mat-button color=\"primary\" >editar</button> -->\n              <button mat-button color=\"primary\" [routerLink]=\"['/cliente/edit/', row['_id'] ]\">editar</button>\n            </div>\n          </td>\n        </ng-container>\n  \n       <!-- Acao 2 Column -->\n       <ng-container matColumnDef=\"acao2\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let row\" >\n            <div class=\"button-row\">\n              <button mat-button color=\"warn\" [routerLink]=\"['/cliente/show', row['_id'] ]\">detalhes</button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n  \n\n    </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/cliente/cliente-list/cliente-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-list/cliente-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 190px;\n  height: auto; }\n\n.mat-list .mat-list-item /deep/ .mat-list-item-content {\n  height: 20px; }\n"

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





var ClienteListComponent = /** @class */ (function () {
    function ClienteListComponent(_clienteService, _usuarioService) {
        this._clienteService = _clienteService;
        this._usuarioService = _usuarioService;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.cliente = new _cliente_novo_cliente__WEBPACK_IMPORTED_MODULE_3__["Cliente"]();
        this.displayedColumns = ['nomeFantasia', 'valorHH', 'nome', 'email', 'fone', 'acao1', 'acao2'];
    }
    ClienteListComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioListComponent > usuariologado', this.usuarioLogado.email);
        this.obterClientes();
    };
    ClienteListComponent.prototype.obterClientes = function () {
        var _this = this;
        console.log('ClienteListComponent > obterClienteList()');
        var clienteObservable = this._clienteService.obterTodos();
        clienteObservable.subscribe(function (clientes) {
            console.log('clientes in obterClientes list:', clientes.json());
            _this.clientes = clientes.json();
            for (var i = 0; i < _this.clientes.length; i++) {
                if (_this.clientes[i].contatos[0]) {
                    _this.clientes[i].nome = _this.clientes[i].contatos[0].nome;
                    _this.clientes[i].email = _this.clientes[i].contatos[0].email;
                    _this.clientes[i].fone = _this.clientes[i].contatos[0].fone;
                    _this.clientes[i].skype = _this.clientes[i].contatos[0].skype;
                }
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.clientes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () { });
    };
    ClienteListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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
        __metadata("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
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

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/clientes']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"mat-body-2\"> \n    Dados básicos: \n  </div>\n    <div class=\"errors\" *ngIf=\"errors\">\n      <p *ngIf=\"errors.cnpj\" >  {{ errors['cnpj'].message }} </p>\n      <p *ngIf=\"errors.razaoSocial\" >  {{ errors['razaoSocial'].message }} </p>\n      <p *ngIf=\"errors.nomeFantasia\" >  {{ errors['nomeFantasia'].message }} </p>\n      <p *ngIf=\"errors['endereco.logradouro']\" >  {{ errors['endereco.logradouro'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cidade']\" >  {{ errors['endereco.cidade'].message }} </p>  \n      <p *ngIf=\"errors['endereco.estado']\" >  {{ errors['endereco.estado'].message }} </p>   \n      <p *ngIf=\"errors['endereco.cep']\" >  {{ errors['endereco.cep'].message }} </p>    \n    </div>\n\n\n  <form class=\"example-form\" [formGroup] = \"clienteForm\">\n\n      <p> \n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cnpj\"\n          type=\"text\"\n          formControlName=\"cnpj\" \n          name=\"cnpj\"\n          />\n          <mat-error *ngIf=\"cnpj.invalid && cnpj.touched\">\n            cnpj informado não é válido\n          </mat-error>\n        </mat-form-field></td>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      \n        <td><mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"razão social\"\n          type=\"text\"\n          formControlName=\"razaoSocial\" \n          name=\"razaoSocial\"\n          />\n          <mat-error *ngIf=\"razaoSocial.invalid && razaoSocial.touched\">\n              razão social informada não é válida\n          </mat-error>\n        </mat-form-field></td>\n      </tr></table>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"nome fantasia\"\n        type=\"text\"\n        formControlName=\"nomeFantasia\"  \n        name=\"nomeFantasia\"\n        />\n        <mat-error *ngIf=\"nomeFantasia.invalid && nomeFantasia.touched\">\n            nome fantasia informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n    <form class=\"example-form\" [formGroup]=\"endereco\">\n      <p>\n        <mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"endereço\"\n          type=\"text\"\n          formControlName=\"logradouro\" \n          name=\"logradouro\"\n          />\n        </mat-form-field>\n      </p>\n    \n      <p>\n        <mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"complemento\"\n          type=\"text\"\n          formControlName=\"complemento\" \n          name=\"complemento\"\n          /> \n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cidade\"\n          type=\"text\"\n          formControlName=\"cidade\" \n          name=\"cidade\"\n          >\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"estado\"\n          type=\"text\"\n          formControlName=\"estado\"\n          name=\"estado\" \n          maxlength=\"2\"\n          >\n          <mat-hint align=\"end\" *ngIf=\"estado\">{{estado.value.length}} / 2</mat-hint>\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"cep\"\n          type=\"number\"\n          #postalCode\n          formControlName=\"cep\" \n          maxlength=\"8\" \n          name=\"cep\" \n          >\n          <mat-hint align=\"end\" *ngIf=\"cep\">{{cep.value.length}} / 8</mat-hint>\n\n        </mat-form-field></td>\n      </tr></table>\n    </form>\n    <div class=\"mat-body-2\"> \n      Dados comerciais:\n    </div>\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput\n        placeholder=\"valor HH\"\n        type=\"number\"\n        formControlName=\"valorHH\" \n        name=\"valorHH\"  \n        />\n      </mat-form-field></td>\n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput\n        placeholder=\"prazo pagto\"\n        type=\"number\"\n        formControlName=\"prazoPgto\" \n        name=\"prazoPgto\"  \n        />\n      </mat-form-field></td>\n    </tr></table>\n    <div class=\"mat-body-2\"> \n      Contatos:\n    </div> \n    <div class=\"container\">\n      <div formArrayName=\"contatos\">\n          \n        <div *ngFor=\"let contato of contatoForms.controls; let i = index;\" [formGroupName]=\"i\">\n\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n            <td><mat-form-field class=\"example-full-width\">\n              <input \n              matInput\n              placeholder=\"nome\"\n              type=\"text\"\n              formControlName=\"nome\" \n              name=\"nome\"  \n              />\n            </mat-form-field></td>\n\n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"email\"\n                type=\"email\"\n                formControlName=\"email\" \n                name=\"email\"\n                />\n              </mat-form-field></td>\n\n            <td><mat-form-field class=\"example-full-width\">\n                <input \n                matInput\n                placeholder=\"fone\"\n                type=\"number\"\n                formControlName=\"fone\" \n                name=\"fone\"  \n                />\n              </mat-form-field></td>\n\n              <td><mat-form-field class=\"example-full-width\">\n                  <input \n                  matInput\n                  placeholder=\"skype\"\n                  type=\"text\"\n                  formControlName=\"skype\" \n                  name=\"skype\"  \n                  />\n                </mat-form-field></td>\n                <a  mat-mini-fab color=\"warn\" (click)=\"deleteContato(i)\">-</a>\n            </tr></table>\n\n          </div>\n\n        </div>\n\n        <a mat-mini-fab color=\"primary\" (click)=\"addContato()\">+</a>\n\n    </div>\n    <button mat-raised-button color=\"basic\" (click)=\"cancel()\">cancela</button>\n\n    <button mat-raised-button color=\"primary\"  (click)=\"criarCliente(clienteForm, endereco)\" [disabled]=\"clienteForm.invalid || endereco.invalid\">confirma</button>\n      \n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/cliente/cliente-novo/cliente-novo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-novo/cliente-novo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\nimg {\n  width: 190px;\n  height: auto; }\n\n.errors {\n  color: purple; }\n\na, button {\n  margin: 10px; }\n\n/* class repeated for increased specificity */\n\n.mat-form-field.mat-form-field {\n  width: auto; }\n"

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
        console.log(' ClienteNovoComponent > usuariologado ', this.usuarioLogado.email);
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/clientes']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\" *ngIf=\"cliente\"> \n\n  <div class=\"mat-body-2\"> \n    Dados básicos: \n  </div>\n\n    <div layout=\"row\">\n      <mat-label class=\"mat-h2\">cnpj</mat-label>\n      {{ cliente.cnpj }}\n    </div>\n \n    <div layout=\"row\">\n      <mat-label class=\"mat-h2\">razão social</mat-label>\n      {{ cliente.razaoSocial }}\n    </div>\n \n    <div layout=\"row\">\n      <mat-label class=\"mat-h2\">nome fantasia</mat-label>\n      {{ cliente.nomeFantasia }}\n    </div>\n    <br> \n    <div class=\"mat-body-2\"> \n      Dados comerciais:\n    </div>\n    <div layout=\"row\">\n      <mat-label class=\"mat-h2\">endereço</mat-label>\n\n      {{ cliente.endereco.logradouro }}\n      <br> \n\n      <mat-label class=\"mat-h2\">complemento</mat-label>\n      {{ cliente.endereco.complemento }} \n      <br> \n\n      <mat-label class=\"mat-h2\">cidade</mat-label>\n      {{ cliente.endereco.cidade }}\n      <br> \n\n      <mat-label class=\"mat-h2\">estado</mat-label>\n      {{ cliente.endereco.estado }}\n      <br> \n\n      <mat-label class=\"mat-h2\">cep</mat-label>\n      {{ cliente.endereco.cep }}\n    </div>\n    <br> \n    <div layout=\"row\">\n      <mat-label class=\"mat-h2\">valor HH</mat-label>\n      {{ cliente.valorHH }}\n    </div>\n    <div layout=\"row\">\n      <mat-label class=\"mat-h2\">prazo pagto</mat-label>\n      {{ cliente.prazoPgto }}\n    </div>\n    <br> \n    <div class=\"mat-body-2\"> \n      Contatos: \n    </div>\n    <div  *ngFor=\"let contato of cliente.contatos;\">\n      <div layout=\"row\">\n        <mat-label class=\"mat-h2\">nome</mat-label>\n        {{ contato.nome }}&nbsp;&nbsp;\n\n        <mat-label class=\"mat-h2\">e-mail</mat-label>\n        {{ contato.email }}&nbsp;&nbsp;\n\n        <mat-label class=\"mat-h2\">fone</mat-label>\n        {{ contato.fone }}&nbsp;&nbsp;\n\n        <mat-label class=\"mat-h2\">skype</mat-label>\n        {{ contato.skype }}\n      </div>\n    </div>\n   <br>\n    <div class=\"errors\" *ngIf=\"errors\">\n      <p *ngIf=\"errors\" >  Cliente não pode ser excluído, pois está associado a um (ou mais) projetos: {{ errors[0].codigo }} </p>\n    </div>\n    \n    <button mat-raised-button color=\"basic\" (click)=\"cancel()\">Cancelar</button>\n\n    <button mat-raised-button color=\"warn\" (click)=\"excluirCliente()\">Excluir</button>\n\n</div>"

/***/ }),

/***/ "./src/app/cliente/cliente-show/cliente-show.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/cliente-show/cliente-show.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\n.down-10 {\n  margin-top: 30px; }\n\nimg {\n  width: 190px;\n  height: auto; }\n\n#deals {\n  display: flex;\n  flex-flow: row wrap; }\n\n.errors {\n  color: purple; }\n"

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
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cliente.service */ "./src/app/cliente/cliente.service.ts");
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




var ClienteShowComponent = /** @class */ (function () {
    function ClienteShowComponent(_usuarioService, _clienteService, _route, _router) {
        this._usuarioService = _usuarioService;
        this._clienteService = _clienteService;
        this._route = _route;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
    }
    ClienteShowComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ClienteShowComponent > usuario ', this.usuarioLogado.email);
        this.obterCliente(this._route.snapshot.params['id']);
    };
    ClienteShowComponent.prototype.obterCliente = function (id) {
        var _this = this;
        console.log('ClienteShowComponent > obterCliente', id);
        var observable = this._clienteService.obterClienteById(id);
        observable.subscribe(function (response) {
            _this.cliente = response.json();
            console.log('cliente in show >>>>', _this.cliente);
        }, function (err) { }, function () { });
    };
    ClienteShowComponent.prototype.excluirCliente = function () {
        var _this = this;
        console.log('ClienteShowComponent > excluirCliente');
        if (!this.cliente.clienteProjetos[0]) {
            console.log('Cliente E X C L U I D O', this.cliente.clienteProjetos);
            var observable = this._clienteService.excluirCliente(this.cliente._id);
            observable.subscribe(function (response) {
                _this.cliente = response.json();
                _this._router.navigate(['/clientes']);
            }, function (err) { }, function () { });
        }
        else {
            console.log('Cliente  N A O   EXCLUIDO', this.cliente.clienteProjetos);
            this.errors = this.cliente.clienteProjetos;
        }
    };
    ClienteShowComponent.prototype.cancel = function () {
        this._router.navigate(['/clientes']);
    };
    ClienteShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-show',
            template: __webpack_require__(/*! ./cliente-show.component.html */ "./src/app/cliente/cliente-show/cliente-show.component.html"),
            styles: [__webpack_require__(/*! ./cliente-show.component.scss */ "./src/app/cliente/cliente-show/cliente-show.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
    ClienteService.prototype.excluirCliente = function (id) {
        console.log('ClienteService > excluirCliente(id)', id);
        return this._http.delete('cliente/excluir/' + id);
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

module.exports = "\n<div class=\"bg-img\">\n  <div class=\"bg2-img\"></div>\n  <form class=\"example-form\" [formGroup] = \"formLogin\">\n      <div class=\"container\">\n        <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n        \n          <td><mat-form-field class=\"example-full-width\">\n            <input \n            matInput \n            placeholder=\"e-mail\"\n            type=\"email\"\n            formControlName=\"email\" \n            name=\"email\"\n            />\n            <div *ngIf=\"email\">\n              <mat-error *ngIf=\"email.invalid\">\n                  por favor, informe um endereço de e-mail válido\n              </mat-error>\n            </div>\n            </mat-form-field></td>\n          </tr></table>\n\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n          <td><mat-form-field class=\"mat-body-1\">\n            <input \n            matInput \n            placeholder=\"senha\"\n            type=\"password\"\n            formControlName=\"senha\"  \n            name=\"senha\"\n            />\n            <div *ngIf=\"senha\">\n            <mat-error *ngIf=\"senha.invalid && senha.touched\">\n                senha informada não é válida\n            </mat-error>\n            </div>\n          </mat-form-field></td>\n        </tr></table>\n        <button mat-raised-button color=\"primary\"  (click)=\"login(loginForm)\" >entrar</button>\n        <div class=\"errors\" *ngIf=\"errors\">\n            <p *ngIf=\"errors\" >  {{ errors.message }} </p>\n        </div>\n    </div>\n\n  </form>\n  \n</div>  \n<a href=\"https://www.linkedin.com/in/fernando-carvalho-6834bbb/\"  class=\"btn btn-linkedin btn-lg\">Torre Negra Sistemas <span class=\"mat-body-1\">- Av. Pedro Botesi, 2171 - Sala 113 - Mogi Mirim - São Paulo - Brazil</span> </a>   \n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\n.bg-img {\n  /* The image used */\n  background-image: url(\"/assets/images/simone-hutsch-669693-unsplash.jpg\");\n  min-height: 680px;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/* Add styles to the form container */\n\n.container {\n  position: absolute;\n  right: 0;\n  margin: 20px;\n  max-width: 260px;\n  padding: 16px;\n  background-color: white; }\n\n/* Full-width input fields */\n\ninput[type=email], input[type=password] {\n  width: 100%;\n  height: 50%;\n  padding: 15px;\n  margin: 5px 0 22px 10px;\n  border: none; }\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n\n.btn:hover {\n  opacity: 1; }\n\n.bg2-img {\n  /* The image used */\n  background-image: url(\"/assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\");\n  min-height: 140px;\n  /* Center and scale the image nicely */\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 25%; }\n\n.btn-linkedin {\n  background: #0E76A8;\n  border-radius: 0;\n  color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #084461; }\n\n.btn-linkedin:link, .btn-linkedin:visited {\n  color: #fff; }\n\n.btn-linkedin:active, .btn-linkedin:hover {\n  background: #084461;\n  color: #fff; }\n"

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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, _formBuilder, _router, _usuarioService) {
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
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
        this.formLogin = this._formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
            senha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.formLogin.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "senha", {
        get: function () {
            return this.formLogin.get('senha');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function (loginForm) {
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], LoginComponent);
    return LoginComponent;
}());

// @Component({
//   selector: 'app-popup',
//   templateUrl: '../login/popup/popup.component.html'
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\"> \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\">\n\n  <div class=\"mat-body-2\"> \n    Dados básicos:\n  </div>\n\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors.descricao\" >  {{ errors['descricao'].message }} </p>\n    <p *ngIf=\"errors._clienteId\" >  {{ errors['_clienteId'].message }} </p>\n    <p *ngIf=\"errors.pedido\" >  {{ errors['pedido'].message }} </p>   \n    <p *ngIf=\"errors.horasPLC\" >  {{ errors['horasPLC'].message }} </p>       \n    <p *ngIf=\"errors.horasIHM\" >  {{ errors['horasIHM'].message }} </p>     \n  </div>\n\n  <form class=\"example-form\" *ngIf=\"projeto\" [formGroup] = \"projetoForm\">\n\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field  style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput\n          placeholder=\"código\"\n          disabled\n          value=\"{{projeto.codigo}}\"\n          />\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"descrição\"\n        type=\"text\"\n        formControlName=\"descricao\" \n        name=\"descricao\"\n        />\n        <!-- <mat-error *ngIf=\"descricao.invalid && descricao.touched\">\n            descricao informada não é válida\n        </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n    \n    <mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n      <mat-select placeholder=\"Selecione o cliente\" name=\"_clienteId\" formControlName=\"_clienteId\">\n        <mat-option value=\"option\" *ngFor=\"let c of clientes\" [value]=\"c._id\">\n            {{ c.nomeFantasia }}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"end\">clientes ativos</mat-hint>\n    </mat-form-field>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field  style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"pedido\"\n          type=\"text\"\n          formControlName=\"pedido\" \n          name=\"pedido\"\n          />\n          <!-- <mat-error *ngIf=\"pedido.invalid && pedido.touched\">\n              descricao informada não é válida\n          </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n    <br>\n\n    <div class=\"mat-body-2\"> \n      Dados financeiros:\n    </div>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n        <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"horas PLC\"\n          type=\"text\"\n          formControlName=\"horasPLC\" \n          name=\"horasPLC\"\n          />\n          <!-- <mat-error *ngIf=\"horasPLC.invalid && horasPLC.touched\">\n              horas PLC informadas não são válidas\n          </mat-error> -->\n        </mat-form-field></td>\n      </tr></table>\n  \n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n        <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"horas IHM\"\n          type=\"text\"\n          formControlName=\"horasIHM\" \n          name=\"horasIHM\"\n          />\n          <!-- <mat-error *ngIf=\"horasIHM.invalid && horasIHM.touched\">\n            horas IHM informadas não são válidas\n          </mat-error> -->\n        </mat-form-field></td>\n      </tr></table>\n  \n  \n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n        <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"valor terceiros\"\n          type=\"text\"\n          formControlName=\"valorTerceiros\" \n          name=\"valorTerceiros\"\n          />\n          <!-- <mat-error *ngIf=\"valorTerceiros.invalid && valorTerceiros.touched\">\n            valor terceiros informado não é válido\n          </mat-error> -->\n        </mat-form-field></td>\n      </tr></table>\n  \n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n        <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"valor materiais\"\n          type=\"text\"\n          formControlName=\"valorMateriais\" \n          name=\"valorMateriais\"\n          />\n        </mat-form-field></td>\n      </tr></table>\n  \n  \n      <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n        <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"valor viagens\"\n          type=\"text\"\n          formControlName=\"valorViagens\" \n          name=\"valorViagens\"\n          />\n        </mat-form-field></td>\n      </tr></table> \n  \n      <button mat-raised-button color=\"basic\" (click)=\"cancel()\">cancela</button>\n  \n      <button mat-raised-button color=\"primary\"  (click)=\"editarProjeto(projetoForm)\" [disabled]=\"projetoForm.invalid\">confirma</button>\n  \n  </form>\n</div>  "

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function ProjetoEditComponent(_formBuilder, _usuarioService, _projetoService, _clienteService, _route, _router) {
        this._formBuilder = _formBuilder;
        this._usuarioService = _usuarioService;
        this._projetoService = _projetoService;
        this._clienteService = _clienteService;
        this._route = _route;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
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
            console.log('projeto in edit >>>> >>>>>>: ', _this.projeto);
            _this.projetoForm = _this._formBuilder.group({
                _id: [_this.projeto._id],
                codigo: [_this.projeto.codigo],
                descricao: [_this.projeto.descricao, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                _clienteId: [_this.projeto._clienteId, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                pedido: [_this.projeto.pedido, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                horasPLC: [_this.projeto.horasPLC, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                horasIHM: [_this.projeto.horasIHM, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                valorTerceiros: [_this.projeto.valorTerceiros || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                valorMateriais: [_this.projeto.valorMateriais || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                valorViagens: [_this.projeto.valorViagens || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
            _this.projeto.nomeFantasiaCliente = _this.cliente.nomeFantasia;
            _this.clienteSelecionado = _this.cliente._id;
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
    ProjetoEditComponent.prototype.editarProjeto = function (projetoForm) {
        var _this = this;
        console.log('ProjetoEditComponent > editarProjeto', projetoForm);
        this.projeto._clienteId = this.clienteSelecionado;
        this._projetoService.editarProjeto(projetoForm.value)
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
    ProjetoEditComponent.prototype.cancel = function () {
        this._router.navigate(['/projetos']);
    };
    ProjetoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-edit',
            template: __webpack_require__(/*! ./projeto-edit.component.html */ "./src/app/projeto/projeto-edit/projeto-edit.component.html"),
            styles: [__webpack_require__(/*! ./projeto-edit.component.scss */ "./src/app/projeto/projeto-edit/projeto-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle  active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cadastro\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/usuarios']\">Usuário</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/clientes']\">Cliente</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/apontamentos']\">Apontamento</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/financeiro']\">Financeiro</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Relatório\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"\">Financeiro</a>\n            <a class=\"dropdown-item\" href=\"#\">Total de horas por projeto</a>\n            <a class=\"dropdown-item\" href=\"#\">Total de horas por funcionário</a>\n            <a class=\"dropdown-item\" href=\"#\">Custo por pedido</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Projetos encerrados</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Sair <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container\">\n\n  <div class=\"level-left\">\n      <div style=\"margin-top: 20px;\" class=\"title is-4\">Projetos</div> \n  </div>\n  <div class=\"level-right\">\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"['/projeto/novo']\">Novo projeto</button>\n  </div> \n\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"codigo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> código </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.codigo}} </td>\n      </ng-container>\n\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"descricao\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> descrição </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.descricao}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"cliente\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> cliente </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.cliente}} </td>\n      </ng-container>\n\n      <!-- Pedido Column -->\n      <ng-container matColumnDef=\"pedido\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> pedido </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.pedido}} </td>\n      </ng-container>\n\n     <!-- Acao 1 Column -->\n     <ng-container matColumnDef=\"acao1\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ação </th>\n        <td mat-cell *matCellDef=\"let row\" >\n          <div class=\"button-row\">\n            <button mat-button color=\"primary\" [routerLink]=\"['/projeto/edit/', row['_id'] ]\">editar</button>\n          </div>\n        </td>\n      </ng-container>\n\n     <!-- Acao 2 Column -->\n     <ng-container matColumnDef=\"acao2\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\" >\n          <div class=\"button-row\">\n            <button mat-button color=\"warn\" (click)=\"openDialog(row)\" [disabled]=\"row['encerrado']\">encerrar</button>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>"

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

module.exports = "<mat-toolbar>\n  <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\" >\n\n  <div class=\"mat-body-2\"> \n    Dados básicos:\n  </div>\n\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors.codigo\" >  {{ errors['codigo'].message }} </p>\n    <p *ngIf=\"errors.descricao\" >  {{ errors['descricao'].message }} </p>\n    <p *ngIf=\"errors._clienteId\" >  {{ errors['_clienteId'].message }} </p>\n    <p *ngIf=\"errors.pedido\" >  {{ errors['pedido'].message }} </p>   \n    <p *ngIf=\"errors.horasPLC\" >  {{ errors['horasPLC'].message }} </p>\n    <p *ngIf=\"errors.horasIHM\" >  {{ errors['horasIHM'].message }} </p>          \n  </div>\n\n  <form class=\"example-form\" [formGroup] = \"projetoForm\">\n\n    <p> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"código\"\n        type=\"text\"\n        formControlName=\"codigo\" \n        name=\"codigo\"\n        ng-model='maskModel'\n        mask=\"XX-999-99\" clean=\"true\" \n        />\n        <!-- <mat-error *ngIf=\"projetoForm.codigo.invalid && projetoForm.codigo.touched\">\n          codigo informado não é válido\n        </mat-error> -->\n        <mat-hint align=\"end\">formato: OR-999-99</mat-hint>\n      </mat-form-field></td>\n    </p>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"descrição\"\n        type=\"text\"\n        formControlName=\"descricao\" \n        name=\"descricao\"\n        />\n        <!-- <mat-error *ngIf=\"descricao.invalid && descricao.touched\">\n            descricao informada não é válida\n        </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n\n\n    <mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n      <mat-select placeholder=\"Selecione o cliente\" name=\"_clienteId\" formControlName=\"_clienteId\">\n        <mat-option value=\"option\" *ngFor=\"let c of clientes\" [value]=\"c._id\">\n            {{ c.nomeFantasia }}\n        </mat-option>\n      </mat-select>\n      <mat-hint align=\"end\">clientes ativos</mat-hint>\n    </mat-form-field>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field  style=\"width:200px !important;\" class=\"example-full-width\">\n          <input \n          matInput \n          placeholder=\"pedido\"\n          type=\"text\"\n          formControlName=\"pedido\" \n          name=\"pedido\"\n          />\n          <!-- <mat-error *ngIf=\"pedido.invalid && pedido.touched\">\n              descricao informada não é válida\n          </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n    <br>\n\n    <div class=\"mat-body-2\"> \n      Dados financeiros:\n    </div>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"horas PLC\"\n        type=\"text\"\n        formControlName=\"horasPLC\" \n        name=\"horasPLC\"\n        />\n        <!-- <mat-error *ngIf=\"horasPLC.invalid && horasPLC.touched\">\n            horas PLC informadas não são válidas\n        </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"horas IHM\"\n        type=\"text\"\n        formControlName=\"horasIHM\" \n        name=\"horasIHM\"\n        />\n        <!-- <mat-error *ngIf=\"horasIHM.invalid && horasIHM.touched\">\n          horas IHM informadas não são válidas\n        </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"valor terceiros\"\n        type=\"text\"\n        formControlName=\"valorTerceiros\" \n        name=\"valorTerceiros\"\n        />\n        <!-- <mat-error *ngIf=\"valorTerceiros.invalid && valorTerceiros.touched\">\n          valor terceiros informado não é válido\n        </mat-error> -->\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"valor materiais\"\n        type=\"text\"\n        formControlName=\"valorMateriais\" \n        name=\"valorMateriais\"\n        />\n      </mat-form-field></td>\n    </tr></table>\n\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field style=\"width:200px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"valor viagens\"\n        type=\"text\"\n        formControlName=\"valorViagens\" \n        name=\"valorViagens\"\n        />\n      </mat-form-field></td>\n    </tr></table> \n\n    <button mat-raised-button color=\"basic\" (click)=\"cancel()\">cancela</button>\n\n    <button mat-raised-button color=\"primary\"  (click)=\"criarProjeto(projetoForm)\" [disabled]=\"projetoForm.invalid\">confirma</button>\n\n  </form>\n</div>  "

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../usuario/usuario.service */ "./src/app/usuario/usuario.service.ts");
/* harmony import */ var _projeto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projeto.service */ "./src/app/projeto/projeto.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cliente/cliente.service */ "./src/app/cliente/cliente.service.ts");
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
    function ProjetoNovoComponent(_formBuilder, _usuarioService, _projetoService, _clienteService, _router) {
        this._formBuilder = _formBuilder;
        this._usuarioService = _usuarioService;
        this._projetoService = _projetoService;
        this._clienteService = _clienteService;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
    }
    ProjetoNovoComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('ProjetoNovoComponent > usuarioLogado ', this.usuarioLogado.email);
        this.obterListaCliente();
        this.projetoForm = this._formBuilder.group({
            codigo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("OR-[0-9]{3}-[1-9]{2}")]],
            descricao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            _clienteId: [null],
            pedido: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            horasPLC: [null],
            horasIHM: [null],
            valorTerceiros: [null],
            valorMateriais: [null],
            valorViagens: [null]
        });
    };
    ProjetoNovoComponent.prototype.obterListaCliente = function () {
        var _this = this;
        console.log('ProjetoNovoComponent > obterListaCliente()');
        var cliObservable = this._clienteService.obterTodos();
        cliObservable.subscribe(function (clientes) {
            _this.clientes = clientes.json();
        }, function (err) { }, function () { });
    };
    Object.defineProperty(ProjetoNovoComponent.prototype, "codigo", {
        get: function () {
            return this.projetoForm.get('codigo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjetoNovoComponent.prototype, "descricao", {
        get: function () {
            return this.projetoForm.get('descricao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjetoNovoComponent.prototype, "pedido", {
        get: function () {
            return this.projetoForm.get('pedido');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjetoNovoComponent.prototype, "horasPLC", {
        get: function () {
            return this.projetoForm.get('horasPLC');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjetoNovoComponent.prototype, "horasIHM", {
        get: function () {
            return this.projetoForm.get('horasIHM');
        },
        enumerable: true,
        configurable: true
    });
    ProjetoNovoComponent.prototype.criarProjeto = function (projetoForm) {
        var _this = this;
        console.log('ProjetoNovoComponent > novoProjeto(nProjForm)', projetoForm);
        this._projetoService.criarProjeto(projetoForm.value)
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
    };
    ProjetoNovoComponent.prototype.cancel = function () {
        this._router.navigate(['/projetos']);
    };
    ProjetoNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projeto-novo',
            template: __webpack_require__(/*! ./projeto-novo.component.html */ "./src/app/projeto/projeto-novo/projeto-novo.component.html"),
            styles: [__webpack_require__(/*! ./projeto-novo.component.scss */ "./src/app/projeto/projeto-novo/projeto-novo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _projeto_service__WEBPACK_IMPORTED_MODULE_4__["ProjetoService"],
            _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"],
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\"> \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"projeto/list\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container\">\n\n  <article class=\"media\">\n    <div class=\"media-content\">\n      <div class=\"content\">\n\n        <br>\n        <div id=\"scroll\">\n          <table class=\"table table-hover\" align=\"left\">\n            <thead>\n                <tr class=\"table-primary d-flex\">\n                  <th class=\"col-1\">Código</th>\n                  <th class=\"col-3\">Descrição</th>\n                  <th class=\"col-2\">Cliente</th>\n                  <th class=\"col-2\">Pedido</th>\n                  <th class=\"col-1\">Ação</th>\n                  <th class=\"col-1\"> </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let projeto of projetos\" class=\"d-flex\">\n                  <td class=\"col-1\">{{ projeto['codigo'] }}</td>\n                  <td class=\"col-3\">{{ projeto['descricao'] }}</td>\n                  <td class=\"col-2\">{{ projeto['cliente'] }}</td>\n                  <td class=\"col-2\">{{ projeto['pedido'] }}</td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/edit/', projeto['_id'] ]\" class=\"button is-warning\">Editar</button></td>\n                  <td class=\"col-1\"><button type=\"button\" [routerLink]=\"['/projeto/show', projeto['_id'] ]\"  class=\"button is-danger\">Encerrar</button></td>\n                </tr>\n              </tbody>\n            </table> \n          </div>    \n        </div>\n      </div>\n    </article>\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancela</button>\n  <button type=\"button\" class=\"btn btn-primary\"(click)=\"encerrar()\">Confirma</button>\n\n        <!-- <div class=\"errors\">\n          <p *ngIf=\"errors.name\" >  {{ errors.name.message }} </p>\n          <p *ngIf=\"errors.cuisine\"> {{ errors.cuisine.message }} </p>        \n        </div> -->\n</div>  "

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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/usuarios']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\">\n\n  <div class=\"mat-body-2\"> \n    Dados do usuário:\n  </div>\n  <br>\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors.nome\" >  {{ errors['nome'].message }} </p>\n    <p *ngIf=\"errors.email\" >  {{ errors['email'].message }} </p>\n    <p *ngIf=\"errors.funcao\" >  {{ errors['funcao'].message }} </p>\n    <p *ngIf=\"errors.custoHora\" >  {{ errors['custoHora'].message }} </p>       \n  </div>\n\n  <form class=\"example-form\" *ngIf=\"usuario\" [formGroup] = \"userForm\">\n\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    \n      <td><mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"nome\"\n        type=\"text\"\n        formControlName=\"nome\" \n        name=\"nome\"\n        />\n        <mat-error *ngIf=\"nome.invalid && nome.touched\">\n            nome informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"email\"\n        type=\"email\"\n        formControlName=\"email\" \n        name=\"email\"\n        />\n        <mat-error *ngIf=\"email.invalid && email.touched\">\n            email informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"funcao\"\n        type=\"text\"\n        formControlName=\"funcao\" \n        name=\"funcao\"\n        />\n        <mat-error *ngIf=\"funcao.invalid && funcao.touched\">\n            funcao informada não é válida\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput\n        placeholder=\"custo hora\"\n        type=\"number\"\n        formControlName=\"custoHora\" \n        name=\"custoHora\"  \n        />\n        <mat-error *ngIf=\"custoHora.invalid && custoHora.touched\">\n            custo Hora informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n    <br>\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td>\n        <mat-checkbox color=\"warn\" formControlName=\"admin\">Administrador\n        </mat-checkbox>\n      </td>\n    </tr></table>\n    <br>\n    <button mat-raised-button color=\"basic\"  (click)=\"cancel()\">cancela</button>\n    <button mat-raised-button color=\"primary\" (click)=\"editarUsuario(userForm)\" [disabled]=\"userForm.invalid\">confirma</button>\n  \n  </form>\n    \n</div>"

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
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function UsuarioEditComponent(_formBuilder, _usuarioService, _router, _route) {
        this._formBuilder = _formBuilder;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._route = _route;
        this.usuarioLogado = {
            email: '',
            admin: ''
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
            console.log('in UsuarioEditComponent >>>>:', _this.usuario);
            _this.userForm = _this._formBuilder.group({
                _id: [_this.usuario._id],
                nome: [_this.usuario.nome, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                funcao: [_this.usuario.funcao, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                email: [_this.usuario.email, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                custoHora: [_this.usuario.custoHora, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                admin: [_this.usuario.admin, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
        });
    };
    Object.defineProperty(UsuarioEditComponent.prototype, "nome", {
        get: function () {
            return this.userForm.get('nome');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioEditComponent.prototype, "funcao", {
        get: function () {
            return this.userForm.get('funcao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioEditComponent.prototype, "email", {
        get: function () {
            return this.userForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioEditComponent.prototype, "custoHora", {
        get: function () {
            return this.userForm.get('custoHora');
        },
        enumerable: true,
        configurable: true
    });
    UsuarioEditComponent.prototype.editarUsuario = function (userForm) {
        var _this = this;
        console.log('UsuarioEditComponent > obterUsuario(userForm)', userForm.value);
        this._usuarioService.editarUsuario(userForm.value)
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
    UsuarioEditComponent.prototype.cancel = function () {
        this._router.navigate(['/usuarios']);
    };
    UsuarioEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-edit',
            template: __webpack_require__(/*! ./usuario-edit.component.html */ "./src/app/usuario/usuario-edit/usuario-edit.component.html"),
            styles: [__webpack_require__(/*! ./usuario-edit.component.scss */ "./src/app/usuario/usuario-edit/usuario-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
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

module.exports = "<mat-toolbar>\n  <img class=\"logo\" src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/projetos']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container\">\n\n  <div class=\"level-left\">\n      <div style=\"margin-top: 20px;\" class=\"title is-4\">Usuários</div>  \n  </div>\n  <div class=\"level-right\">\n      <button mat-stroked-button color=\"primary\" [routerLink]=\"['/usuario/novo']\">Novo usuário</button>\n  </div> \n\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- nome Column -->\n      <ng-container matColumnDef=\"nome\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> nome </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.nome}} </td>\n        </ng-container>\n  \n        <!-- email Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> e-mail </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n        </ng-container>\n  \n        <!-- funcao Column -->\n        <ng-container matColumnDef=\"funcao\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> função </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.funcao}} </td>\n        </ng-container>\n  \n        <!-- custoHora Column -->\n        <ng-container matColumnDef=\"custoHora\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> custo hr </th>\n          <td mat-cell *matCellDef=\"let row\">  {{row.custoHora}} </td>\n        </ng-container>\n\n        <!-- admin Column -->\n        <ng-container matColumnDef=\"admin\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> admin </th>\n          <td class=\"icon\" mat-cell *matCellDef=\"let row\"> \n              <img style=\"size: 20px;\" [src]=\"row['admin'] ? frontPath : backPath\"></td>\n        </ng-container>\n\n        <!-- Acao 1 Column -->\n        <ng-container matColumnDef=\"acao1\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ação </th>\n          <td mat-cell *matCellDef=\"let row\" >\n            <div class=\"button-row\">\n              <!-- <button mat-button color=\"primary\" >editar</button> -->\n              <button mat-button color=\"primary\" [routerLink]=\"['/usuario/edit/', row['_id'] ]\">editar</button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <!-- Acao 2 Column -->\n        <ng-container matColumnDef=\"acao2\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let row\" >\n            <div class=\"button-row\">\n              <button mat-button color=\"warn\" [routerLink]=\"['/usuario/show', row['_id'] ]\">detalhes</button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n  \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/usuario/usuario-list/usuario-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-list/usuario-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 190px;\n  height: auto; }\n\n.mat-list .mat-list-item /deep/ .mat-list-item-content {\n  height: 20px; }\n\n.icon {\n  width: 25px;\n  height: auto; }\n\nmat-paginator .mat-form-field.mat-form-field {\n  width: 56px; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function UsuarioListComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
        this.frontPath = "../../assets/svg/baseline-how.svg";
        this.backPath = "";
        this.displayedColumns = ['nome', 'email', 'funcao', 'custoHora', 'admin', 'acao1', 'acao2'];
    }
    UsuarioListComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioListComponent > usuariologado', this.usuarioLogado.email);
        this.obterListaUsuario();
    };
    UsuarioListComponent.prototype.obterListaUsuario = function () {
        var _this = this;
        console.log('UsuarioListComponent > obterListaUsuario()');
        var usuarioObservable = this._usuarioService.obterTodos();
        usuarioObservable.subscribe(function (usuarios) {
            console.log('usuario in obterUsuario list:', usuarios.json());
            _this.usuarios = usuarios.json();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.usuarios);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { }, function () { });
    };
    UsuarioListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UsuarioListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UsuarioListComponent.prototype, "sort", void 0);
    UsuarioListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-list',
            template: __webpack_require__(/*! ./usuario-list.component.html */ "./src/app/usuario/usuario-list/usuario-list.component.html"),
            styles: [__webpack_require__(/*! ./usuario-list.component.scss */ "./src/app/usuario/usuario-list/usuario-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/usuarios']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\">\n\n  <div class=\"mat-body-2\"> \n    Dados do usuário:\n  </div>\n\n  <div class=\"errors\" *ngIf=\"errors\">\n    <p *ngIf=\"errors.nome\" >  {{ errors['nome'].message }} </p>\n    <p *ngIf=\"errors.email\" >  {{ errors['email'].message }} </p>\n    <p *ngIf=\"errors.funcao\" >  {{ errors['funcao'].message }} </p>\n    <p *ngIf=\"errors.custoHora\" >  {{ errors['custoHora'].message }} </p>       \n  </div>\n\n  <form class=\"example-form\" [formGroup] = \"userForm\">\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    \n      <td><mat-form-field style=\"width:400px !important;\" class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"nome\"\n        type=\"text\"\n        formControlName=\"nome\" \n        name=\"nome\"\n        />\n        <mat-error *ngIf=\"nome.invalid && nome.touched\">\n            nome informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"email\"\n        type=\"email\"\n        formControlName=\"email\" \n        name=\"email\"\n        />\n        <mat-error *ngIf=\"email.invalid && email.touched\">\n            email informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput \n        placeholder=\"funcao\"\n        type=\"text\"\n        formControlName=\"funcao\" \n        name=\"funcao\"\n        />\n        <mat-error *ngIf=\"funcao.invalid && funcao.touched\">\n            funcao informada não é válida\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td><mat-form-field class=\"example-full-width\">\n        <input \n        matInput\n        placeholder=\"custo hora\"\n        type=\"number\"\n        formControlName=\"custoHora\" \n        name=\"custoHora\"  \n        />\n        <mat-error *ngIf=\"custoHora.invalid && custoHora.touched\">\n            custo Hora informado não é válido\n        </mat-error>\n      </mat-form-field></td>\n    </tr></table>\n    <br>\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n      <td>\n        <mat-checkbox color=\"warn\" formControlName=\"admin\">Administrador\n        </mat-checkbox>\n      </td>\n    </tr></table>\n    <br>\n    <button mat-raised-button color=\"basic\"  (click)=\"cancel()\">cancela</button>\n    <button mat-raised-button color=\"primary\" (click)=\"criarUsuario(userForm)\" [disabled]=\"userForm.invalid\">confirma</button>\n\n  </form>\n  \n</div>"

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




var UsuarioNovoComponent = /** @class */ (function () {
    function UsuarioNovoComponent(_formBuilder, _usuarioService, _router) {
        this._formBuilder = _formBuilder;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this.usuarioLogado = {
            email: '',
            admin: ''
        };
    }
    UsuarioNovoComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioNovoComponent > usuariologado ', this.usuarioLogado.email);
        this.userForm = this._formBuilder.group({
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
            funcao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            custoHora: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            admin: []
        });
    };
    Object.defineProperty(UsuarioNovoComponent.prototype, "nome", {
        get: function () {
            return this.userForm.get('nome');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioNovoComponent.prototype, "email", {
        get: function () {
            return this.userForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioNovoComponent.prototype, "funcao", {
        get: function () {
            return this.userForm.get('funcao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioNovoComponent.prototype, "custoHora", {
        get: function () {
            return this.userForm.get('custoHora');
        },
        enumerable: true,
        configurable: true
    });
    UsuarioNovoComponent.prototype.criarUsuario = function (userForm) {
        var _this = this;
        console.log('UsuarioNovoComponent > criarUsuario(userForm)', userForm.value);
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
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
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

module.exports = "<mat-toolbar>\n    <img src=\"../assets/images/TorreNegra-logo-comp-horz-cor-pos-bgB.png\">\n</mat-toolbar>\n<div class=\"mat-elevation-z8\"> \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/usuarios']\">Retornar <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<br>\n<div class=\"container\" *ngIf=\"usuario\"> \n\n  <div class=\"mat-body-2\"> \n    Dados do usuário:\n  </div>    \n\n  <br>\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    <td>\n      <div layout=\"row\">\n          <mat-label class=\"mat-h2\">nome</mat-label>\n          {{ usuario.nome }}\n        </div>\n    </td>\n  </tr></table>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    <td>\n      <div layout=\"row\">\n          <mat-label class=\"mat-h2\">email</mat-label>\n          {{ usuario.email }}\n        </div>\n    </td>\n  </tr></table>\n\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    <td>\n      <div layout=\"row\">\n          <mat-label class=\"mat-h2\">função</mat-label>\n          {{ usuario.funcao }}\n        </div>\n    </td>\n  </tr></table>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    <td>\n      <div layout=\"row\">\n          <mat-label class=\"mat-h2\">custo hora</mat-label>\n          {{ usuario.custoHora }}\n        </div>\n    </td>\n  </tr></table>\n  <br>\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr> \n    <td>\n      <mat-checkbox color=\"warn\" [disabled]=\"true\" [checked]=\"isChecked()\">Administrador\n      </mat-checkbox>\n    </td>\n  </tr></table>\n  <br>\n  <div class=\"align_button\"> \n    <button mat-raised-button color=\"basic\"  (click)=\"cancel()\">Cancela</button>\n    <div *ngIf=\"usuario.ativo\">\n      <button mat-raised-button color=\"warn\" (click)=\"mudarSituacao('false')\">desabilitar</button>\n    </div>\n    <div *ngIf=\"!usuario.ativo\">\n      <button mat-raised-button color=\"primary\" (click)=\"mudarSituacao('true')\">habilitar</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/usuario/usuario-show/usuario-show.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/usuario/usuario-show/usuario-show.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\nselect {\n  margin-bottom: 15px; }\n\n.purple {\n  color: purple;\n  margin: 0px 0px 30px 60px; }\n\n.errors {\n  color: brown; }\n\nimg {\n  width: 190px;\n  height: auto; }\n\n.align_button {\n  display: flex; }\n"

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
        this.frontPath = "../../assets/images/check.png";
        this.backPath = "";
    }
    UsuarioShowComponent.prototype.ngOnInit = function () {
        this.usuarioLogado = this._usuarioService.getUserLoggedIn();
        console.log('UsuarioShowComponent > usuarioLogado ', this.usuarioLogado.email);
        this.obterUsuario(this._route.snapshot.params['id']);
    };
    UsuarioShowComponent.prototype.isChecked = function () {
        return this.usuario.admin;
    };
    UsuarioShowComponent.prototype.isFalse = function () {
        return false;
    };
    UsuarioShowComponent.prototype.obterUsuario = function (id) {
        var _this = this;
        console.log('UsuarioShowComponent > obterUsuario', id);
        var observable = this._usuarioService.obterUsuarioById(id);
        observable.subscribe(function (response) {
            _this.usuario = response.json();
        });
    };
    UsuarioShowComponent.prototype.mudarSituacao = function (event) {
        var _this = this;
        console.log('UsuarioShowComponent > mudarSituacao');
        this.usuario.ativo = event;
        this._usuarioService.mudarSituacao(this.usuario)
            .subscribe(function (response) {
            _this.usuario = response.json();
            _this._router.navigate(['/usuarios']);
        });
    };
    UsuarioShowComponent.prototype.cancel = function () {
        this._router.navigate(['/usuarios']);
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
    UsuarioService.prototype.mudarSituacao = function (usuario) {
        console.log('UsuarioService > mudarSituacao(usuario)', usuario);
        return this._http.put('usuario/mudarSituacao/' + usuario['_id'], usuario);
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
import { Component, OnInit } from '@angular/core';
// import { NgbdDatepickerPopup } from './datepicker-popup';
import { ProjetoService } from '../../projeto/projeto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { getLocaleDateTimeFormat } from '../../../../node_modules/@angular/common';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-apontamento-novo',
  templateUrl: './apontamento-novo.component.html',
  styleUrls: ['./apontamento-novo.component.scss']
})
export class ApontamentoNovoComponent implements OnInit {

  errors: any;
  options: FormGroup;
  usuarioLogado = {
    email: '',
    admin: ''
  }
  today = new Date();
  projetos: any[];
  projetoSelecionado: Number;
  id: any;
  opcaoDespesa: any;
  apontamento: any = {
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
  }
  array = ['hora', 'despesa'];
  isSelected: Boolean = false; 

  constructor(
    private fb: FormBuilder,
    private _projetoService: ProjetoService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {  
    this.options = fb.group({
      tipo: [null, [Validators.required]],
      projeto: [null],
      opDespesa: [null],
      descricao: [null],
      inicio: [null],
      fim: [null],
      valor: [null]
    });

    this.formControlValueChanged();

  }

  ngOnInit() {
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    console.log(' ApontamentoNovoComponent > usuarioLogado ', this.usuarioLogado.email);
    this.apontamento.usuario = this.usuarioLogado;
    this.obterListaProjeto();
 
  }

  obterListaProjeto() {
    console.log('ApontamentoNovoComponent > obterListaProjeto()')
    const projetoObservable = this._projetoService.obterTodos();
    projetoObservable.subscribe(
      (projetos) => { 
        this.projetos = projetos.json();
      },
      (err) => { },
        () => { }
    )
  }

  formControlValueChanged() {
    const inicio = this.options.get('inicio');
    const opDespesa = this.options.get('opDespesa');
    const descricao = this.options.get('descricao');
    const valor = this.options.get('valor');
    // this.cdRef.detectChanges();  
    this.options.get('tipo').valueChanges.subscribe(
        (tipo: string) => {
            if (tipo === 'hora') {
                descricao.clearValidators();
                valor.clearValidators();
                inicio.setValidators([Validators.required]);
            }
            else if (tipo === 'despesa') {
                this.options.get('opDespesa').valueChanges.subscribe(
                  (opdesp: string) => {
                    opDespesa.setValidators([Validators.required]);
                    if (opdesp === 'outros') {
                      this.isSelected = true;
                    //   descricao.setValidators([Validators.required]);
                    // } else {
                    //   descricao.clearValidators();
                    }
                    valor.setValidators([Validators.required]);
                    inicio.clearValidators();
                })
            }
            inicio.updateValueAndValidity();
            opDespesa.updateValueAndValidity();
            descricao.updateValueAndValidity();
            valor.updateValueAndValidity();
        });

  }

  radioChange(event: MatRadioChange, i) {
    if (event.value === 'despesa') {
      this.array = ['despesa'];
    } else {
      this.array = ['hora'];
    }
  }

  setApontamento() {
    this.apontamento.tipo = this.options.controls.tipo.value;
    if (this.options.controls.tipo.value != 'hora') {
      this.apontamento.hora.inicio = "";
      this.apontamento.hora.fim = "";
    } else {
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
    console.log('ApontamentoNovoComponent > setApontamento() >  this.apontamento, this.options', this.apontamento );
    this._projetoService.apontamentoNovo(this.options.controls.projeto.value, this.apontamento)
      .subscribe(observable => {
        if(observable.json().errors) {
          this.errors = observable.json().errors;
          console.log('Algum erro ocorreu salvando apontamento ', this.errors);
          this._router.navigate(['/apontamento/novo']);
        } else {
          this._router.navigate(['/apontamentos']);
        }
      },
      err => {
        throw err;
      })
    }

  cancel() {
    this._router.navigate(['/apontamentos']);
  }

}
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    senha: '',
    admin: ''
  };
  public usuarioLogado = {
    email: '',
    admin: ''
  }
  errors: any = {}
  
  formLogin: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = { email: "", senha: "", admin: ""};
    console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
    this.formLogin = this._formBuilder.group({
      email: [null, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      senha: [null, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
    })
  }

  login() {
    console.log('LoginComponent > login()',this.formLogin.controls.email.value)
    const userObservable = this._usuarioService.login(this.formLogin.controls.email.value);
    userObservable.subscribe(
        (usuario) => {
          this.usuario = usuario.json();
          console.log('SUCESSO em login');
          if (this.usuario.admin) {
            this._router.navigate(['/projetos']);
          } else {
            this._router.navigate(['/apontamentos']);
          }
        },
        (err) => { 
          this.errors = err.json();
          console.log('ERRO em login', this.errors);
          this._router.navigate(['/']);
        }
      )
      this._usuarioService.setUserLoggedIn(this.usuarioLogado);
    }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUsuario, {
      width: '450px',
      data: this.formLogin.controls.email.value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.usuario = result;
    });
  }

}


@Component({
  selector: 'app-popup',
  templateUrl: '../login/popup/popup.component.html'
})

export class DialogUsuario {
  usuario = {
    email: '',
    senha: '',
    admin: ''
  };
  public usuarioLogado = {
    email: '',
    admin: ''
  }
  errors: any = {}
  constructor(private _usuarioService: UsuarioService, 
    private _router: Router, 
    public dialogRef: MatDialogRef<DialogUsuario>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login(data) {
    console.log('LoginComponent > login()',data)
    const userObservable = this._usuarioService.login(data);
    userObservable.subscribe(
        (usuario) => {
          this.usuario = usuario.json();
          console.log('SUCESSO em login');
          if (this.usuario.admin) {
            this._router.navigate(['/projetos']);
          } else {
            this._router.navigate(['/apontamentos']);
          }
        },
        (err) => { 
          this.errors = err.json();
          console.log('ERRO em login', this.errors);
          this._router.navigate(['/']);
        }
      )
      this._usuarioService.setUserLoggedIn(this.usuarioLogado);
    }

}
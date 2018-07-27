import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


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
    private fb: FormBuilder,
    private _router: Router,
    private _usuarioService: UsuarioService
    // public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.usuario = { email: "", senha: "", admin: ""};
    console.log('usuario logado? ', this._usuarioService.getUserLoggedIn());
    
    this.formLogin = this.fb.group({
      email: '',
      senha: '',
      admin: ''
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

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogUsuario, {
  //     width: '450px',
  //     data: this.formLogin.controls.email.value
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.usuario = result;
  //   });
  // }

}


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
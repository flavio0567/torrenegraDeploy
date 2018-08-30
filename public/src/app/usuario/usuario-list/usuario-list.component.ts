import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface UsuarioData {
  _id: string;
  nome: string;
  sobrenome: string;
  email: string;
  funcao: string;
  custoHora: string,
  admin: string
}

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuarioLogado = {
    email: '',
    admin: false
  }
  usuarios: any;
  frontPath:string = "../../assets/svg/baseline-how.svg";
  backPath:string =  "";

  displayedColumns: string[] = ['admin', 'nome', 'sobrenome', 'email', 'funcao', 'custoHora',  'acao1', 'acao2' ];
  dataSource: MatTableDataSource<UsuarioData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    console.log('UsuarioListComponent > ngOnInit()');
    this.usuarioLogado = this._usuarioService.getUserLoggedIn();
    this.obterListaUsuario();
  }

  obterListaUsuario() {
    console.log('UsuarioListComponent > obterListaUsuario()')
    const usuarioObservable = this._usuarioService.obterListaUsuario();
    usuarioObservable.subscribe(
      (usuarios) => { 
        this.usuarios = usuarios.json();
        this.dataSource = new MatTableDataSource(this.usuarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => { },
        () => { }
    )
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

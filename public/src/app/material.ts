import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatButtonModule, MatOptionModule, MatSelectModule, MatRadioModule  } from '@angular/material';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatRadioModule

    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatRadioModule
    ],
  })
  export class MaterialModule { }
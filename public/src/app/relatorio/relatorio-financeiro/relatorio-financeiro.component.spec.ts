import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFinanceiroComponent } from './relatorio-financeiro.component';

describe('RelatorioFinanceiroComponent', () => {
  let component: RelatorioFinanceiroComponent;
  let fixture: ComponentFixture<RelatorioFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

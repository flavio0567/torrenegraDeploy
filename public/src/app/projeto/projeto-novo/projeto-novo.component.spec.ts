import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoComponent } from './projeto-novo.component';

describe('ProjetoNovoComponent', () => {
  let component: ProjetoNovoComponent;
  let fixture: ComponentFixture<ProjetoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioShowComponent } from './usuario-show.component';

describe('UsuarioShowComponent', () => {
  let component: UsuarioShowComponent;
  let fixture: ComponentFixture<UsuarioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

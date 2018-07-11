import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoShowComponent } from './projeto-show.component';

describe('ProjetoShowComponent', () => {
  let component: ProjetoShowComponent;
  let fixture: ComponentFixture<ProjetoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

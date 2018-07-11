import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteShowComponent } from './cliente-show.component';

describe('ClienteShowComponent', () => {
  let component: ClienteShowComponent;
  let fixture: ComponentFixture<ClienteShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

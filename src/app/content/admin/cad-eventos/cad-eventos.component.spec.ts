import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEventosComponent } from './cad-eventos.component';

describe('CadEventosComponent', () => {
  let component: CadEventosComponent;
  let fixture: ComponentFixture<CadEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadEventosComponent]
    });
    fixture = TestBed.createComponent(CadEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

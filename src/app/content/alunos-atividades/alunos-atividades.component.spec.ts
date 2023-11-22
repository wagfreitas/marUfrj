import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosAtividadesComponent } from './alunos-atividades.component';

describe('AlunosAtividadesComponent', () => {
  let component: AlunosAtividadesComponent;
  let fixture: ComponentFixture<AlunosAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosAtividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunosAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

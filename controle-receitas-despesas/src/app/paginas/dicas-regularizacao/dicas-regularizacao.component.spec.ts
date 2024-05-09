import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasRegularizacaoComponent } from './dicas-regularizacao.component';

describe('DicasRegularizacaoComponent', () => {
  let component: DicasRegularizacaoComponent;
  let fixture: ComponentFixture<DicasRegularizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicasRegularizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DicasRegularizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

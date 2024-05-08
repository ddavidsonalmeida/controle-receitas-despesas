import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasInvestimentosComponent } from './dicas-investimentos.component';

describe('DicasInvestimentosComponent', () => {
  let component: DicasInvestimentosComponent;
  let fixture: ComponentFixture<DicasInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicasInvestimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DicasInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LancamentoReceitaDespesaService } from './lancamento-receita-despesa.service';

describe('LancamentoReceitaDespesaService', () => {
  let service: LancamentoReceitaDespesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancamentoReceitaDespesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

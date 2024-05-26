

import { Component, OnInit } from '@angular/core';
import { NgStyle, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TransacoesService } from '../../transacoes.service';
import { Transacao } from '../../model/transacoes';

import { CurrencyPipe } from '@angular/common';
import { DataPipe } from '../../data.pipe';
import { DicasInvestimentosComponent } from '../dicas-investimentos/dicas-investimentos.component';
import { DicasRegularizacaoComponent } from '../dicas-regularizacao/dicas-regularizacao.component';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [
    CurrencyPipe,
    DataPipe,
    NgStyle,
    NgIf,
    NgFor,
    RouterLink,
    DicasInvestimentosComponent,
    DicasRegularizacaoComponent
  ],
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  public date = new Date();
  salario: number = 12000;
  receitas: number = 6000;
  despesas: number = 3000;
  transacoes: Transacao[] = [];
  transacoesFiltradas: Transacao[] = [];
  tipoSelecionado: string = '';

  constructor(private transacoesService: TransacoesService) {}

  ngOnInit(): void {
    this.getTransacoes();
  }

  getTransacoes(): void {
    this.transacoesService.getTransacoes()
      .subscribe(transacoes => {
        this.transacoes = transacoes;
        this.transacoesFiltradas = transacoes;
      });
  }

  saldo(): number {
    return this.receitas - this.despesas;
  }

  carregarTransacoes(): void {
    this.transacoesService.getTransacoes().subscribe((data: Transacao[]) => {
      this.transacoes = data;
      this.transacoesFiltradas = data;
    });
  }

  selecionarTipo(tipo: string): void {
    if (this.tipoSelecionado === tipo) {
      this.tipoSelecionado = '';
      this.transacoesFiltradas = this.transacoes;
    } else {
      this.tipoSelecionado = tipo;
      this.transacoesFiltradas = this.transacoes.filter(transacao => transacao.tipo === tipo);
    }
  }
}
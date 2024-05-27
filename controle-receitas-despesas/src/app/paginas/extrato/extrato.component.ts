

import { Component, OnInit } from '@angular/core';
import { NgStyle, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TransacoesService } from '../../transacoes.service';
import { Transacao } from '../../model/transacoes';

import { CurrencyPipe } from '@angular/common';
import { DataPipe } from '../../data.pipe';
import { DicasInvestimentosComponent } from '../dicas-investimentos/dicas-investimentos.component';
import { DicasRegularizacaoComponent } from '../dicas-regularizacao/dicas-regularizacao.component';
import { ClienteService } from '../../cliente.service';

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
  salario: number = 0;
  receitas: number = 0;
  despesas: number = 0;
  transacoes: Transacao[] = [];
  transacoesFiltradas: Transacao[] = [];
  tipoSelecionado: string = '';

  constructor(private transacoesService: TransacoesService, private clienteService: ClienteService ) {}

  ngOnInit(): void {
    this.getTransacoes();
    this.getCliente();
  }

  getCliente(): void {
    this.clienteService.getCliente().subscribe((data: any) => {
      this.salario = data.salario;
    });
  }

  totalDespesas(): number {
    const despesas = this.transacoes.filter(transacao => transacao.tipo === 'despesa');
    return despesas.reduce((total, transacao) => total + transacao.valor, 0);
  }

  getTransacoes(): void {
    this.transacoesService.getTransacoes()
      .subscribe(transacoes => {
        this.transacoes = transacoes;
        this.transacoesFiltradas = transacoes;
      });
  }

  saldo(): number {
    return (this.salario + this.receitas) - this.despesas;
  }

  totalReceitas(): number {
    const receitas = this.transacoes.filter(transacao => transacao.tipo === 'receita');
    return receitas.reduce((total, transacao) => total + transacao.valor, 0) + this.salario;
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
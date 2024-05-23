
import { Component, OnInit } from '@angular/core';
import { NgStyle, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TransacoesService } from '../../transacoes.service';
import { Transacao } from './../../transacoes';

import { CurrencyPipe } from '@angular/common';
import { DataPipe } from '../../data.pipe';
import { DicasInvestimentosComponent } from '../dicas-investimentos/dicas-investimentos.component';
import { DicasRegularizacaoComponent } from '../dicas-regularizacao/dicas-regularizacao.component';



@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [CurrencyPipe, DataPipe, NgStyle, NgIf, NgFor, RouterLink, DicasInvestimentosComponent, DicasRegularizacaoComponent,],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss'
})
export class ExtratoComponent implements OnInit {
  public date = new Date();
  salario: number = 12000;
  receitas: number = 6000;
  despesas: number = 3000;
  transacoes: any[] = [];
  transacoesFiltradas: any[] = [];
  tipoSelecionado: string = '';

  // transacoes: Transacao[] = [];

  constructor(private TransacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.getTransacoes();

  }

  getTransacoes(): void {
    this.TransacoesService.getTransacoes()
      .subscribe(transacoes => this.transacoes = transacoes);


  }


  // constructor(){}

  saldo() {
    return this.receitas - this.despesas;
  }

  treceitas: number = 6000;

  tdespesas: number = 3500;

//Esta funcão deveria calcular o valor e devidir se levara para a tela de investimento ou para a tela de regularização, mas esta com erro que não identifiquei

  // ObterRotaComBaseNoSaldo(): { rota: string, texto: string } {
  //   if (this.saldo < this.salario * 0.5) {
  //     return { rota: '/dicas-regularizacao', texto: 'Regularização' };
  //   } else if (this.saldo >= this.salario * 3) {
  //     return { rota: '/dicas-investimentos', texto: 'Investimentos' };
  //   } else {
  //     return { rota: '', texto: 'Botão Desabilitado' };
  //   }
  // }


  carregarTransacoes(): void {

    this.TransacoesService.getTransacoes().subscribe((data: any[]) => {
      this.transacoes = data;
      this.transacoesFiltradas = this.transacoes;
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
  


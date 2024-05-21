
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
  imports: [CurrencyPipe, DataPipe, NgStyle, NgIf, NgFor, RouterLink, DicasInvestimentosComponent, DicasRegularizacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss'
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[] = [];

  constructor(private TransacoesService:TransacoesService) {}

  ngOnInit(): void {
    this.getTransacoes();
  }

  getTransacoes(): void {
    this.TransacoesService.getTransacoes()
    .subscribe(transacoes => this.transacoes = transacoes);

    
  }


  public date = new Date();

  public salario = 12000;



  public receitas = 6000;
  public despesas = 3000;

  public saldo() {
    return this.receitas - this.despesas
  }

  public treceitas = 6000;

  public tdespesas = 3500;

  


 

  selecionado: string='receita';
  
  selecionar(tipo: string){
    this.selecionado = tipo;
  }
  
}



  //aqui a regra é que para o botao ser ativado no caso de regularização o saldo devera ser 2 vezes menor que o salario
  // e para ativar para investimento o saldo devera ser 3 vezes mais que o salario
  // constructor(private router: Router) { }
 

  // verificarSaldoDicas() {
  //   if (this.saldo > = 3 * this.salario) {
  //     this.router.navigate(['/dicas-investimentos']);
  //   }else if ([this.saldo <= this.salario * (-2)]) {
  //     this.router.navigate(['/dicas-regularizacao']);
  //   }
  // }

  //aqui a regra é aquela questão de somar as receitas que irão aparecer abaixo do saldo, fiz um rascunho mas esta dando erros.

  // getSaldoAtual(): number {
  //   return this.transacoes.reduce((saldo, transacao) => {
  //     return transacao.tipo === 'receita' ? saldo + transacao.value : saldo - transacao.value;
  //   },0);
  // }


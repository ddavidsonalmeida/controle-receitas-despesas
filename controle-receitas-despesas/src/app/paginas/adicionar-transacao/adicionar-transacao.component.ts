import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adicionar-transacao',
  standalone: true,
  imports: [ NgxMaskDirective, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {

  public tipoTransacao = 'Despesa';
  public descricaoTransacao!: string;
  public valorTransacao!: number;
  public dataTransacao!: Date;

  constructor(private http: HttpClient) {}

  public adicionarTransacao(transacaoValue:any): void {
    const novaTransacao = {
      id: Date.now().toString(),
      tipo: transacaoValue.tipo,
      descricao: transacaoValue.descricao,
      valor: transacaoValue.valor,
      data: new Date().toISOString()
    };

    this.http.post('http://localhost:3000/extrato', novaTransacao)
    .subscribe((response) => {
      console.log(response);
    })
  }

}

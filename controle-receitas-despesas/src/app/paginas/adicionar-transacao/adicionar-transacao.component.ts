import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { TransacoesService } from '../../services/transacoes.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-adicionar-transacao',
  standalone: true,
  imports: [ NgxMaskDirective, FormsModule, RouterLink, CurrencyPipe, ReactiveFormsModule ],
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {

  public tipoTransacao = 'Despesa';
  public descricaoTransacao!: string;
  public valorTransacao!: number;
  public dataTransacao!: Date;

  cadastroForm = this.formBuilder.group({ tipo: '', descricao: '', valor: '', data: '', categoria: ''});
  constructor(private transacoesService: TransacoesService, private formBuilder: FormBuilder) {}

  public adicionarTransacao(transacaoValue:any): void {
    const novaTransacao = {
      id: Date.now().toString(),
      tipo: transacaoValue.tipo,
      descricao: transacaoValue.descricao,
      valor: transacaoValue.valor,
      data: new Date().toISOString(),
      categoria: transacaoValue.categoria
    };

    this.transacoesService.adicionarTransacao( novaTransacao )
    .subscribe((response) => {
      this.cadastroForm.reset();
    })
  }

}

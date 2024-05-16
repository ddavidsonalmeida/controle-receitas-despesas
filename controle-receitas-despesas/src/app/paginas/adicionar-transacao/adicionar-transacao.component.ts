import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-adicionar-transacao',
  standalone: true,
  imports: [ NgxMaskDirective ],
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {

}

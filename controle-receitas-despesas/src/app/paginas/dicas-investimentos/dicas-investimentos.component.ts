import { Component } from '@angular/core';

@Component({
  selector: 'app-dicas-investimentos',
  standalone: true,
  imports: [],
  templateUrl: './dicas-investimentos.component.html',
  styleUrl: './dicas-investimentos.component.scss'
})
export class DicasInvestimentosComponent {
listaDeCard = [
  {
    titulo: 'Glossário definitivo do mercado financeiro: entenda os termos.', imagem: './../../../assets/imagens/touro-merc-financeiro.png', texto:'aqui entra o texto'
  },
  {
    titulo: 'Como trabalhar na bolsa de valores? Quanto ganha?', imagem: './../../../assets/imagens/como-trabalhar-na-bolsa.png', texto:'aqui entra o texto'
  },
  {
    titulo: 'Aprenda a diferença entre assessor e consultor de inves...', imagem: './../../../assets/imagens/aprenda-a-diferenca.png', texto:'aqui entra o texto'
  },
  {
    titulo: 'O que é CPA 10? Tudo sobre essa certificação', imagem: './../../../assets/imagens/o-que-e-cpa-10.png', texto:'aqui entra o texto'
  },
  {
    titulo: 'Melhores formas de investir o seu 13º salário.', imagem: './../../../assets/imagens/melhor-forma-de-investir.png', texto:'aqui entra o texto'
  },
  {
    titulo: 'Como investir em CDB? Tudo o que você precisa saber sobre...', imagem: './../../../assets/imagens/como-investir-em-cdb.png', texto:'kjjhgfugawrhiofhjpowesththforufhbiouqwhefiohciweo'
  },
];
detalheModal:any;
  openmodal = false;
  abrirModal(item:any) {
    this.openmodal=true;
    this.detalheModal=item;
  }
  fecharModal() {
    this.openmodal=false;
      }
}



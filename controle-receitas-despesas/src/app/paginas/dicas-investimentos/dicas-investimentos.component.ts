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
    titulo: 'Glossário definitivo do mercado financeiro: entenda os termos.', imagem: './../../../assets/imagens/touro-merc-financeiro.png', texto:'Em economia, mercado financeiro é o ambiente onde ocorre a negociação de ativos — como títulos, moedas, ações, derivativos, mercadorias, commodities entre outros bens e ativos com algum valor financeiro.'
  },
  {
    titulo: 'Como trabalhar na bolsa de valores? Quanto ganha?', imagem: './../../../assets/imagens/como-trabalhar-na-bolsa.png', texto:'Para atuar como corretor financeiro na bolsa de valores, você precisa ser aprovado em um exame de qualificação. A prova é aplicada pela Ancord (Associação Nacional das Corretoras e Distribuidoras de Títulos e Valores Mobiliários, Câmbio e Mercadorias).'
  },
  {
    titulo: 'Aprenda a diferença entre assessor e consultor de investimentos.', imagem: './../../../assets/imagens/aprenda-a-diferenca.png', texto:'Investimentos: Qual a diferença entre assessor e consultor? Em poucas palavras, o consultor financeiro tem uma atuação mais ampla e profunda na vida do cliente, especialmente no manejo dos recursos por ele. Já o assessor é mais focado em soluções específicas, em produtos e serviços financeiros pontuais.'
  },
  {
    titulo: 'O que é CPA 10? Tudo sobre essa certificação', imagem: './../../../assets/imagens/o-que-e-cpa-10.png', texto:'A CPA-10 (Certificação Profissional ANBIMA Série 10) é destinada aos profissionais que atuam na distribuição de produtos de investimento para o varejo em agências bancárias ou plataformas de atendimento. A quem se destina: Profissionais que trabalham em instituições que seguem nosso Código de Certificação.'
  },
  {
    titulo: 'Melhores formas de investir o seu 13º salário.', imagem: './../../../assets/imagens/melhor-forma-de-investir.png', texto:'A professora de Ciências Contábeis da Ufrgs e Educadora Financeira, Wendy Carraro, explica que, independente da situação financeira, a recomendação mais importante é manter o seu "planejamento financeiro". Ou seja, acompanhar de perto os gastos ajuda a tomar decisões mais inteligentes com o dinheiro.'
  },
  {
    titulo: 'Como investir em CDB? Tudo o que você precisa saber sobre...', imagem: './../../../assets/imagens/como-investir-em-cdb.png', texto:'O investimento em CDB pode ser feito por meio de bancos ou corretora de valores, via internet. Corretoras como a XP oferecem opções de diversas instituições, o que facilita e amplia a pesquisa pelo título mais apropriado de acordo com os interesses do investidor.'
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



import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClienteComponent } from './paginas/cadastro-cliente/cadastro-cliente.component';
import { AdicionarTransacaoComponent } from './paginas/adicionar-transacao/adicionar-transacao.component';
import { ExtratoComponent } from './paginas/extrato/extrato.component';
import { DicasInvestimentosComponent} from './paginas/dicas-investimentos/dicas-investimentos.component';
import { DicasRegularizacaoComponent } from './paginas/dicas-regularizacao/dicas-regularizacao.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: "", component: CadastroClienteComponent },
    {path: "adicionar-transacao", component: AdicionarTransacaoComponent  },
    {path: "extrato", component: ExtratoComponent },
    {path: "dicas-investimentos", component: DicasInvestimentosComponent},
    {path: "dicas-regularizacao", component: DicasRegularizacaoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}

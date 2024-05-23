import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from './transacoes';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  private url = 'http://localhost:3000/transacoes';

  constructor(private http: HttpClient) { }

  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.url);
  }

  adicionarTransacao(transacao: any): Observable<any> {
    return this.http.post(this.url, transacao);
  }

  getReceitas(): Observable<any>{
    return this.http.get(`${this.url}/receitas`);
  }

  getDespesas(): Observable<any>{
    return this.http.get(`${this.url}/despesas`);
  }
}

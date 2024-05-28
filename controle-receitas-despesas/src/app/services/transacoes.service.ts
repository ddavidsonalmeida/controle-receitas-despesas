import { Transacao } from '../model/transacoes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TransacoesService {

  private url = 'http://localhost:3000/transacoes'
  constructor(private http: HttpClient) { }

  adicionarTransacao(transacao: any): Observable<any> {
    return this.http.post(this.url, transacao);
  }

  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.url);
  }


  getReceitas(): Observable<any>{
    return this.http.get(`${this.url}/receitas`);
  }

  getDespesas(): Observable<any>{
    return this.http.get(`${this.url}/despesas`);
  }
}

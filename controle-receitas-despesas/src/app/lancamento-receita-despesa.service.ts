import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from './transacoes';


@Injectable({
  providedIn: 'root'
})
export class LancamentoReceitaDespesaService {

  private baseUrl = 'http://localhost:3000/lista-transacoes';
  
  constructor(private http: HttpClient) { }

  getReceitas(): Observable<any>{
    return this.http.get(`${this.baseUrl}/receitas`);
  }

  getDespesas(): Observable<any>{
    return this.http.get(`${this.baseUrl}/despesas`);
  }

}

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
}

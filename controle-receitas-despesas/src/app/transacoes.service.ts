import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransacoesService {
  private baseUrl = 'http://localhost:3000/lista-transacoes';

  constructor(private http: HttpClient) { }
  getTransacoes(): Observable<transacao[]>{
    return this.http.get<Transacao[]>(this.baseUrl);
  }
}

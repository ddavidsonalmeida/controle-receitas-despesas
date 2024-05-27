import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost:3000/cliente'
  constructor(private http: HttpClient) { }


  cadastrar(cliente: any): Observable<any> {
    console.log(cliente)
    return this.http.put(this.url, cliente);
  }


  getCliente(): Observable<any> {
    return this.http.get(this.url);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './model/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoParaEdicao: Produto[] = [];
  enderecoApi = "http://localhost:8080/api/produtos";

  constructor(private http: HttpClient) { }

  setProdutoEdicao(prod: Produto){
    this.produtoParaEdicao.push(prod);
  }


  limparProdutoEdicao(){
    this.produtoParaEdicao = [];
  }

  listarTodosProdutos(): Observable<Produto[]> {
     return this.http.get<Produto[]>(this.enderecoApi);
  }

  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this.enderecoApi, produto);
 }

 deletarProduto(id: number): Observable<Produto[]> {
  return this.http.delete<Produto[]>(`${this.enderecoApi}/${id}`);
}

editarProduto(prod: Produto): Observable<Produto[]> {
  return this.http.put<Produto[]>(this.enderecoApi, prod);
}
}

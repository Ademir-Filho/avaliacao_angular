import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../model/produto.model';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ConfirmationService]
})
export class ProdutosComponent implements OnInit{

  produtos: Produto[] = [];

  constructor(private prodService: ProdutoService,
     private router: Router,
     private confirmationService: ConfirmationService){}

  ngOnInit(): void {
    this.prodService.listarTodosProdutos().subscribe(result => {
      this.produtos = result;
    });
  }

  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Você tem certeza que quer apagar?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          this.excluir(id);
        }
    });
  }

  editarProduto(prod: Produto){
    this.prodService.setProdutoEdicao(prod);
    this.router.navigate(['cadastro']);
  }

  excluir(id: number){
    this.prodService.deletarProduto(id).subscribe(res => {
      this.prodService.listarTodosProdutos().subscribe(result => {
        this.produtos = result;
      });
    });
  }

}

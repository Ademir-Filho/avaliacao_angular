import { Component } from '@angular/core';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../produto.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  produto: Produto = {
    nome: ''  };
  edicao: boolean = false;

  constructor(private prodService: ProdutoService, private router: Router){
      if (this.prodService.produtoParaEdicao.length > 0) {
        this.edicao = true;
        this.produto = this.prodService.produtoParaEdicao[0];
      }
  }

  editarProduto() {
    this.prodService.editarProduto(this.produto).subscribe(res => {
      this.prodService.limparProdutoEdicao();
      this.produto = {
        nome: ''  };
      this.router.navigate([''])
    });
  }

  cadastrarProduto(){
      if (this.produto.nome != "" || this.produto.codigoBarras || this.produto.preco ) {
        this.prodService.cadastrarProduto(this.produto).subscribe(res => this.router.navigate(['']));
      }
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ConfirmPopupModule,
    HttpClientModule,
    BrowserModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    InputNumberModule,
    RouterModule.forRoot([
      {path: '', component: ProdutosComponent},
      {path: 'cadastro', component: CadastrarComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

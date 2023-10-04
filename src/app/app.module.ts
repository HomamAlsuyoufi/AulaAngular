import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './component/menu-superior/menu-superior.component';
import { ListagemDePessoasComponent } from './component/listagem-de-pessoas/listagem-de-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListagemDePessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

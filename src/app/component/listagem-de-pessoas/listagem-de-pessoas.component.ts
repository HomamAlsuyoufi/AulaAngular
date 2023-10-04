import { Component ,OnInit} from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-listagem-de-pessoas',
  templateUrl: './listagem-de-pessoas.component.html',
  styleUrls: ['./listagem-de-pessoas.component.scss']
})
export class ListagemDePessoasComponent implements OnInit{
  ngOnInit():void{
    this.pessoas.filter((Pessoa)=> Pessoa.idade>30);
  }

  pessoas:Pessoa[] = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 35 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Lucas', idade: 22 },
    { nome: 'Carla', idade: 45 },
    { nome: 'José', idade: 32 },
    { nome: 'Mariana', idade: 29 },
    { nome: 'Ricardo', idade: 38 },
    { nome: 'Laura', idade: 21 }
  ];
  constructor(){}

   
}

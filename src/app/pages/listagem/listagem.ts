import { Component } from '@angular/core';
import { CardFilmeComponent } from '../../components/card-filme/card-filme';
import { Interesse } from '../../services/interesse';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CardFilmeComponent],
  templateUrl: './listagem.html',
  styleUrls: ['./listagem.css']
})
export class ListagemComponent {
  constructor(private interesseService: Interesse) {}

  filmes = [
  { 
    nome: 'ATAQUE BRUTAL', 
    genero: 'Ação', 
    duracao: '1h45m', 
    classificacao: '16 anos',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2FbDqWoq9-Vg5NxxgblR0hcbN6PCrbrkRQ&s'
  },
  { 
    nome: 'PÂNICO 7', 
    genero: 'Terror', 
    duracao: '2h00m', 
    classificacao: '18 anos',
    imagem: 'https://ingresso-a.akamaihd.net/prd/img/movie/panico-7/30da3b1d-7b38-492c-85c3-790fcb5dbb7f.webp'
  },
  { 
    nome: 'MÁQUINA DE GUERRA', 
    genero: 'Guerra', 
    duracao: '2h10m', 
    classificacao: '14 anos',
    imagem: 'https://br.web.img3.acsta.net/c_310_420/img/37/58/37581b70871099a7b679a7fa12f33150.jpg'
  },
  { 
    nome: 'JOGADOR N1', 
    genero: 'Ficção Científica', 
    duracao: '2h20m', 
    classificacao: '12 anos',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zg_feOrtmGWkZAsJ-UyCQbbDbglBeEj-wg&s'
  },
  { 
    nome: 'REBEL MOON', 
    genero: 'Fantasia', 
    duracao: '2h30m', 
    classificacao: '14 anos',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrRu0iiX-dQNr-Y2450OJ-GGzgGxCZYjgMA&s'
  },
  { 
  nome: 'Devorador de Estrelas', 
  genero: 'Ficção Científica / Fantasia', 
  duracao: '2h15m', 
  classificacao: '14 anos',
  imagem: 'https://br.web.img2.acsta.net/img/00/51/0051bc7965f851f46f856d4119741487.jpg'
  },
  { 
    nome: 'Duna: Parte Dois', 
    genero: 'Ficção Científica', 
    duracao: '2h46m', 
    classificacao: '14 anos',
    imagem: 'https://midias.correiobraziliense.com.br/_midias/jpg/2024/04/20/640x853/1_duna_parte_2_poster_divulgacao-36349824.jpg?20240420100212?20240420100212'
  },
  { 
    nome: 'Avatar', 
    genero: 'Ficção Científica / Fantasia', 
    duracao: '2h42m', 
    classificacao: '12 anos',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg'
  },
];

  adicionarFavorito(filme: any) {
    this.interesseService.adicionar(filme); // salva o objeto inteiro
  }
}

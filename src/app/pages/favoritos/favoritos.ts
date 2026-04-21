import { Component, OnInit } from '@angular/core';
import { Interesse } from '../../services/interesse';
import { CardFilmeComponent } from '../../components/card-filme/card-filme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, CardFilmeComponent],
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private interesseService: Interesse) {}

  ngOnInit() {
    this.favoritos = this.interesseService.getLista();
  }

  remover(filme: any) {
    this.interesseService.remover(filme);
    this.favoritos = this.interesseService.getLista();
  }

  limparLista() {
    this.interesseService.limpar();
    this.favoritos = this.interesseService.getLista();
  }
}

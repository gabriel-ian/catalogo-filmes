import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  standalone: true,
  templateUrl: './card-filme.html',
  styleUrls: ['./card-filme.css']
})
export class CardFilmeComponent {
  @Input() nome!: string;
  @Input() genero!: string;
  @Input() duracao!: string;
  @Input() classificacao!: string;
  @Input() imagem!: string;

  @Output() favoritar = new EventEmitter<any>();

  onFavoritar() {
    this.favoritar.emit({
      nome: this.nome,
      genero: this.genero,
      duracao: this.duracao,
      classificacao: this.classificacao
    });
  }
}

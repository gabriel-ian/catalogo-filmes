import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Interesse {
  private lista: any[] = [];

  // Retorna a lista atual
  getLista() {
    return this.lista;
  }

  // Adiciona um filme à lista
  adicionar(filme: any) {
    this.lista.push(filme);
  }

  // Remove um filme específico da lista
  remover(filme: any) {
    this.lista = this.lista.filter(item => item !== filme);
  }

  // Limpa toda a lista
  limpar() {
    this.lista = [];
  }
}

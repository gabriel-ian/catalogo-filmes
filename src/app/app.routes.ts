import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ListagemComponent } from './pages/listagem/listagem';
import { FavoritosComponent } from './pages/favoritos/favoritos';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'itens', component: ListagemComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'sobre', component: Sobre },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


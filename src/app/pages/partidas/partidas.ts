import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CriarPartida } from '../criar-partida/criar-partida';

@Component({
  selector: 'app-partidas',
  imports: [RouterLink, CriarPartida],
  templateUrl: './partidas.html',
  styleUrl: './partidas.css'
})
export class Partidas {
  modalAberto = false;

abrirModal(): void {
  this.modalAberto = true;
}

fecharModal(): void {
  this.modalAberto = false;
}
}
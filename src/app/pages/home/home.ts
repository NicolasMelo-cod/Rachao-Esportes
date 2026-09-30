import { Component } from '@angular/core';
import { Header } from '../../compartilhado/header/header';
import { Footer } from '../../compartilhado/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
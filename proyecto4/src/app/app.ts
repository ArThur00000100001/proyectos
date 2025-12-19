import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  variable: string = 'HOla mundo'

  cambio(){
    this.variable = 'El texto se cambió'
  }

}

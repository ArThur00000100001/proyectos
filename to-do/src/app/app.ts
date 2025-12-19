import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  elementos = signal([
    {
      tarea: "Almorzar",
      hora: "3:30pm",
      id: 1,
      check: false,
    },
    {
      tarea: "Jugar",
      hora: "4:30pm",
      id: 2,
      check: false,
    },
    {
      tarea: "Cenar",
      hora: "6:30pm",
      id: 3,
      check: false,
    },
    {
      tarea: "Estudiar",
      hora: "7:30pm",
      id: 4,
      check: false,
    },
  ])

  //Elimina una tare de la lista
  Eliminar(boton: any) {
    this.elementos().splice(
      this.elementos().findIndex((x) => x.id == boton.id),
      1,
    );
  }

  //Comprueba si la tarea esta marcada o no y la cambia
  Comprobar(check: any) {
    console.log(check)
    
    /*const index = this.elementos().findIndex((x) => x.id == check.name);

    if (this.elementos()[index].check) {
      this.elementos()[index].check = false;
    } else {
      this.elementos()[index].check = true;
    }*/
  }

}

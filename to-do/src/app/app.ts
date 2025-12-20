import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './Task/task';

export type Tarea = {
  tarea: string;
  hora: string;
  id: number;
  check: boolean
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  elementos = signal<Tarea[]>([
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
  Eliminar(elementoId: number) {

    const tareas = this.elementos().filter((x) => x.id !== elementoId)
    this.elementos.set([...tareas])

  }

  //Comprueba si la tarea esta marcada o no y la cambia
  Comprobar(elemento: Tarea) {
    console.log(elemento)
    
    this.elementos.update(lista =>
    lista.map(item =>
      item.id === elemento.id
        ? { ...item, check: !item.check }
        : item
      )
    )
    
  }


 /* Añadir() {
  const tarea = document.getElementById("tarea");
  const hora = document.getElementById("hora");

  if (
    tarea.value != null &&
    tarea.value != "" &&
    hora.value != null &&
    hora.value != ""
  ) {
    this.elementos().push({
      tarea: `${tarea.value}`,
      hora: `${hora.value}`,
      id: elementos.length + 1,
      check: false,
    });

    tarea.value = "";
    hora.value = "";
    Renderizar();
  }
}*/

}

import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './Task/task';

export type Tarea = {
  tarea: string;
  hora: string;
  check: boolean;
  id: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  

  datos:string =  localStorage.getItem('tareas') || '[]'
  
  elementos = signal<Tarea[]>(JSON.parse(this.datos))

  completadas = computed<number>(() => this.elementos().filter((x) => x.check).length)
  pendientes = computed(() => this.elementos().filter(x => !x.check).length)
  

  Borrar(id:number){
    const tarea = this.elementos().filter(x => x.id !== id)
    this.elementos.set([...tarea])
    localStorage.setItem('tareas', JSON.stringify(this.elementos()))
  }

  Check(elemento: Tarea){
    this.elementos.update(lista => 
      lista.map(item => item.id == elemento.id ? {...item, check: !item.check}: item)
    )
    localStorage.setItem('tareas', JSON.stringify(this.elementos()))
    
    /*this.elementos.update(lista =>
    lista.map(item =>
      item.id === elemento.id
        ? { ...item, check: !item.check }
        : item
      )
    ) */
  }

  Guardar(tarea:string, hora:string){

    this.elementos.update(elementos => [...elementos,{tarea: tarea, hora: hora, check: false, id: this.elementos().length+1}])

    /*this.elementos().push({
      tarea: tarea,
      hora: hora,
      check: false,
      id: this.elementos().length +1
    })*/
    localStorage.setItem('tareas', JSON.stringify(this.elementos()))
  }


}

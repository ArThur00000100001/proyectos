import { Component, input, output, signal } from "@angular/core";
import { Tarea } from "../app";


@Component({
    selector: 't-task',
    templateUrl: './task.html',
    styleUrl: './task.scss'
})
export class Task{

    readonly eliminar = output<number>()
    readonly completar = output<Tarea>()

    item = input.required<Tarea>() 

    Comprobar(elemento: Tarea){
        console.log(elemento)
        this.completar.emit(elemento)
    }
    Eliminar(id: number){
        console.log(id)
        this.eliminar.emit(id)
    }

    
}
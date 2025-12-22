import { Component, input, output, signal } from "@angular/core";
import { Tarea } from "../app";

@Component({
    selector: 'task-view',
    templateUrl: './task.html',
    styleUrl: './task.scss'
})

export class Task{
    item = input.required<Tarea>()
    borrar = output<number>()
    check = output<Tarea>()

    Borrar(id:number){
        this.borrar.emit(id)
    }

    Check(elemento:Tarea){
        this.check.emit(elemento)
    }
}
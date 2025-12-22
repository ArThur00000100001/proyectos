import { Component, input, output, computed} from "@angular/core";
import { Gastos } from "../app";

@Component({
    selector: 'gastos-view',
    templateUrl: './gastos.html',
    styleUrl: './gastos.scss'
})

export class Gasto{

    item = input.required<Gastos>()
    eliminar = output<number>()

    Eliminar(id:number){
        this.eliminar.emit(id)
    }

}
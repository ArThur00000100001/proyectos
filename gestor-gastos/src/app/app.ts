import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gasto } from './gastos/gastos';

export type Gastos = {
  nombre: string;
  monto: number;
  categoria: string;
  id: number
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gasto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  gastos = signal<Gastos[]>([
    {
      nombre: 'Caramelos',
      monto: 5,
      categoria: 'gustos',
      id: 1
    },
    {
      nombre: 'Taxi a la alameda',
      monto: 6,
      categoria: 'taxi',
      id: 2
    },
    {
      nombre: 'Arroz con pollo',
      monto: 15,
      categoria: 'comida',
      id: 3
    },
    {
      nombre: 'Polo',
      monto: 40,
      categoria: 'compras',
      id: 4
    },
  ])

  total = computed<number>(() => {
    let t = 0
    this.gastos().forEach(x => {
      t += x.monto
    })
    return t
  })

  comida = computed<number>(() => {
    let c = 0
    this.gastos().filter(x => x.categoria == 'comida').forEach(x => {
      c += x.monto
    })
    return c
  })

  taxi = computed<number>(() => {
    let t = 0
    this.gastos().filter(x => x.categoria == 'taxi').forEach(x => {
      t += x.monto
    })
    return t
  })

  compras = computed<number>(() => {
    let c = 0
    this.gastos().filter(x => x.categoria == 'compras').forEach(x => {
      c += x.monto
    })
    return c
  })

  gustos = computed<number>(() => {
    let g = 0
    this.gastos().filter(x => x.categoria == 'gustos').forEach(x => {
      g += x.monto
    })
    return g
  })

  Eliminar(id:number){
    const items = this.gastos().filter(x => x.id !== id)
    this.gastos.set([...items])
  }

  Incluir(categoria: string, nombre:string, monto:string){

    if(
      categoria != '' &&
      (nombre != '' && nombre != null) &&
      (monto != '' && monto != null && +monto === +monto)
    ){

      this.gastos.update(elementos => [
        ...elementos,
        {
          nombre: nombre,
          monto: +monto,
          categoria: categoria,
          id: this.gastos().length + 1
        }
      ])

    }

    
  }

}

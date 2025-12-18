let elementos = [];

const contenedor = document.getElementById("container");
const contenedor2 = document.getElementById("container2");

//Renderiza la lista json
function Renderizar() {
  contenedor.innerHTML = "";
  elementos.forEach((elemento) => {
    
    if(!elemento.check){

            contenedor.innerHTML += `
        
            ${elemento.tarea} ${elemento.hora} 
            <input type="checkbox" name="${elemento.id}" onchange="Completar(this)"> <button type="button" id="${elemento.id}" onclick="Eliminar(this)">🗑️</button> <br><br>
            <hr>
        `;

        }

  });
  console.log(elementos)
  
}

Renderizar();

//Añade una tarea a la lista
function Añadir() {
  const tarea = document.getElementById("tarea");
  const hora = document.getElementById("hora");

  if (
    tarea.value != null &&
    tarea.value != "" &&
    hora.value != null &&
    hora.value != ""
  ) {
    elementos.push({
      tarea: `${tarea.value}`,
      hora: `${hora.value}`,
      id: elementos.length+1,
      check: false
    });

    tarea.value = "";
    hora.value = "";
    Renderizar();
  }
}

//Elimina una tare de la lista
function Eliminar(boton) {
  elementos.splice(
    elementos.findIndex((x) => x.id == boton.id),
    1,
  );
  Renderizar();
  
}

function Completar(check){

    const index = elementos.findIndex((x) => x.id == check.name)
    console.log(index)

    elementos[index].check = true

    contenedor2.innerHTML += ''
    elementos.forEach((elemento) => {

        if(elemento.check){

            contenedor2.innerHTML += `
        
            ${elemento.tarea} ${elemento.hora} 
            <input type="checkbox" name="${elemento.id}" onchange="Completar(this)"> <button type="button" id="${elemento.id}" onclick="Eliminar(this)">🗑️</button> <br><br>
            <hr>
        `;

        }
    
  });

  Renderizar()

}
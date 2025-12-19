let elementos = [
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
];

const contenedor = document.getElementById("container");
const contenedor2 = document.getElementById("container2");
let edi = '✏️'

//Renderiza la lista json
function Renderizar() {
  contenedor.innerHTML = "";
  contenedor2.innerHTML = "";
  elementos.forEach((elemento) => {
    if (!elemento.check) {
      contenedor.innerHTML += `
        
            ${elemento.tarea} ${elemento.hora} 
            <input type="checkbox" name="${elemento.id}" onchange="Comprobar(this)"> <button type="button" id="${elemento.id}" onclick="Eliminar(this)">🗑️</button> 
            <button type="button" id="${elemento.id}" onclick="Editar(this)">${edi}</button>
            <br><br>
            <hr>
        `;
    }
  });

  const complete = elementos.filter((m) => m.check == true);
  console.log(complete);
  complete.forEach((element) => {
    contenedor2.innerHTML += `
      
        ${element.tarea} ${element.hora} 
            <input type="checkbox" name="${element.id}" onchange="Comprobar(this)" checked> <button type="button" id="${element.id}" onclick="Eliminar(this)">🗑️</button> <br><br>
            <hr>

      `;
  });

  console.log(elementos);
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
      id: elementos.length + 1,
      check: false,
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

//Comprueba si la tarea esta marcada o no y la cambia
function Comprobar(check) {
  const index = elementos.findIndex((x) => x.id == check.name);

  if (elementos[index].check) {
    elementos[index].check = false;
  } else {
    elementos[index].check = true;
  }

  contenedor2.innerHTML = "";

  Renderizar();
}


let tareas = [];
const contenedor = document.getElementById('container')

function Añadir(boton){
    switch (boton.name){
        case 'añadir':

            tareas.push(document.getElementById('tarea').value)
            console.log(tareas)

            contenedor.innerHTML += `
                ${document.getElementById('tarea').value} <input type="checkbox" name="" id="">
                <br>
            `

            break;

        case 'borrar':


    }
}
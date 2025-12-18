let tareas = [];
let elementos = 0
const contenedor = document.getElementById('container')

function Añadir(){
    
    tareas.push(document.getElementById('tarea').value)
    console.log(tareas)
    
    contenedor.innerHTML += `
        <div id="${elementos}">
        ${document.getElementById('tarea').value} <input type="checkbox" name="" id="">
        <button id="${elementos}" onclick="Eliminar(this)">Eliminiar</button>
        <br>
        </div>
        
    `
    elementos++
}

function Eliminar(boton){

    document.getElementById(`${boton.id}`).remove()
    elementos--
}
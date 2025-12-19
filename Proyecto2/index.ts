import express from "express";
import send from "send";
import http from "http";

const servidor = http.createServer((req, res) => {
  
})

const app = express();

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
};

const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    email: "carlos.mendoza@email.com",
    edad: 28,
    activo: true,
  },
  {
    id: 2,
    nombre: "María García",
    email: "maria.garcia@email.com",
    edad: 34,
    activo: true,
  },
  {
    id: 3,
    nombre: "Juan Pérez",
    email: "juan.perez@email.com",
    edad: 45,
    activo: false,
  },
  {
    id: 4,
    nombre: "Ana Torres",
    email: "ana.torres@email.com",
    edad: 29,
    activo: true,
  },
  {
    id: 5,
    nombre: "Luis Ramírez",
    email: "luis.ramirez@email.com",
    edad: 52,
    activo: true,
  },
  {
    id: 6,
    nombre: "Elena Flores",
    email: "elena.flores@email.com",
    edad: 41,
    activo: false,
  },
  {
    id: 7,
    nombre: "Roberto Silva",
    email: "roberto.silva@email.com",
    edad: 36,
    activo: true,
  },
  {
    id: 8,
    nombre: "Patricia Rojas",
    email: "patricia.rojas@email.com",
    edad: 27,
    activo: true,
  },
  {
    id: 9,
    nombre: "Diego Castro",
    email: "diego.castro@email.com",
    edad: 31,
    activo: true,
  },
  {
    id: 10,
    nombre: "Sofía Vargas",
    email: "sofia.vargas@email.com",
    edad: 39,
    activo: false,
  },
  {
    id: 11,
    nombre: "Miguel Ángel Ruiz",
    email: "miguel.ruiz@email.com",
    edad: 44,
    activo: true,
  },
  {
    id: 12,
    nombre: "Laura Jiménez",
    email: "laura.jimenez@email.com",
    edad: 26,
    activo: true,
  },
  {
    id: 13,
    nombre: "Fernando López",
    email: "fernando.lopez@email.com",
    edad: 48,
    activo: true,
  },
  {
    id: 14,
    nombre: "Gabriela Morales",
    email: "gabriela.morales@email.com",
    edad: 33,
    activo: false,
  },
  {
    id: 15,
    nombre: "Andrés Herrera",
    email: "andres.herrera@email.com",
    edad: 30,
    activo: true,
  },
  {
    id: 16,
    nombre: "Valentina Cruz",
    email: "valentina.cruz@email.com",
    edad: 25,
    activo: true,
  },
  {
    id: 17,
    nombre: "Ricardo Ortiz",
    email: "ricardo.ortiz@email.com",
    edad: 55,
    activo: false,
  },
  {
    id: 18,
    nombre: "Camila Medina",
    email: "camila.medina@email.com",
    edad: 38,
    activo: true,
  },
  {
    id: 19,
    nombre: "Javier Soto",
    email: "javier.soto@email.com",
    edad: 42,
    activo: true,
  },
  {
    id: 20,
    nombre: "Isabella Navarro",
    email: "isabella.navarro@email.com",
    edad: 29,
    activo: true,
  },
];

app.get("/", (req, res) => {
  //const url = new URL("http://localhost:3000");
  res.send(`<pre>${JSON.stringify(usuarios, null, 4)}</pre>`);
});

//Crea un endpoint que retorne los usuarios activos
app.get("/activos", (req, res) => {
  const Uactivos = usuarios.filter((x) => x.activo == true);
  
  res.send(`<pre> ${JSON.stringify(Uactivos, null, 4)} </pre>`);
});

//Usando minEdad, retorna los usuarios cuya edad sea mayor o igual al valor enviado.
app.get("/minEdad", (req, res) => {
  const edad = Number(req.query.edad);

  const Uselec = usuarios.filter((x) => x.edad >= edad);

  res.send(`<pre> ${JSON.stringify(Uselec, null, 4)} </pre>`);
});

//Usando minEdad y maxEdad, retorna los usuarios dentro del rango
app.get('/rangoEdad', (req, res) => {

    const minEdad = Number(req.query.min)
    const maxEdad = Number(req.query.max)

    if(minEdad && maxEdad){

      const Uselec = usuarios.filter((x) => (x.edad >= minEdad) && (x.edad <= maxEdad))
      res.send(`<pre> ${JSON.stringify(Uselec, null, 4)}</pre>`)

    }else{
      res.status(500).send()
    }

})

//Usando nombre, retorna los usuarios cuyo nombre incluya el texto enviado
app.get('/nombre', (req, res) => {
    const nombre = req.query.name?.toString().toLowerCase()
    const Uselec = usuarios.filter((x) =>(x.nombre).toLowerCase() == nombre)
    res.send(`<pre> ${JSON.stringify(Uselec, null, 4)}</pre>`)
})

//Usando edad, retorna solo los usuarios activos mayores a ese valor.
app.get('/edad', (req, res) => {
    const edad = Number(req.query.edad)
    const Uselec = usuarios.filter((x) => (x.edad > edad) && (x.activo))
    res.send(`<pre> ${JSON.stringify(Uselec, null, 4)}</pre>`)
})

//Usando map, retorna un arreglo solo con los nombres de los usuarios.
app.get('/map', (req, res) => {

    const names = usuarios.map((x) => x.nombre)

    res.send(`<pre>${JSON.stringify(names, null, 4)}</pre>`)
})

//Calcula el promedio y retorna { promedioEdad: number }.
app.get('/promedio', (req, res) => {

    let total = 0
    usuarios.forEach((x) => {
        total += x.edad
    })
    
    let promedio = [{promedioEdad: total/usuarios.length}]
    res.send(`<pre> ${JSON.stringify(promedio, null, 4)}</pre>`)
})
//Retorna un arreglo de IDs de usuarios activos.
app.get('/idActivos', (req, res) =>{
    
    const ids = usuarios.map(x => x.id)

    res.send((JSON.stringify(ids)))

})

app.listen(3000, () => {
  console.log("Correcto");
});

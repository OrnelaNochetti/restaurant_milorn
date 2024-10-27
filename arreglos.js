const comidas = [
     {nombre: "pechuga con pure de papas",
        precio: 5700
     },
     {nombre: "milanesa de pollo napolitana",
        precio: 7000
     },
     {nombre: "bife de chorizo con papas fritas",
        precio: 16000
     },
     {nombre: "ñoquis a la crema",
        precio: 8000
     },
     {nombre: "ravioles con tuco",
        precio: 8000
     },
     {nombre: "milanesa de cerdo con pure de papa",
        precio: 11000
     },
     {nombre: "sorrentinos con crema y tuco",
        precio: 8000
     },
     {nombre: "arrollado de pollo con papas al horno",
        precio: 13000
     },
]

const bebidas = [
    {nombre: "agua con gas",
        precio: 1000
    },
    {nombre: "agua sin gas",
        precio: 1000
    },
    {nombre: "coca cola",
        precio: 2000
    },
    {nombre: "sprite",
        precio: 2000
    },
    {nombre: "fanta",
        precio: 2000
    },
    {nombre: "cerveza",
        precio: 5700
    },
    {nombre: "vino tinto",
        precio: 10000
    },
]
const mesas = [
    {    id: 1,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 2,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 3,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 4,
        disponibilidad: false,
        capacidad: 3
    },
    {
        id: 5,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 6,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 7,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 8,
        disponibilidad: false,
        capacidad: 2
    },
    {
        id: 9,
        disponibilidad: false,
        capacidad: 3
    },
    {
        id: 10,
        disponibilidad: false,
        capacidad: 3
    },
    {
        id: 11,
        disponibilidad: true
    },
    {
        id: 12,
        disponibilidad: true
    },
]

const reservas = [
    {nombre: "julieta",
        fecha: "12/10/2024",
        mesa: 1
    },
    {nombre: "maria",
        fecha: "13/10/2024",
        mesa: 2
    },
    {nombre: "ines",
        fecha: "28/10/2024",
        mesa: 3
    },
    {nombre: "juan",
        fecha: "25/10/2024",
        mesa: 4
    },
    {nombre: "agustin",
        fecha: "12/10/2024",
        mesa: 5
    },
    {nombre: "federico",
        fecha: "27/10/2024",
        mesa: 6
    },
    {nombre: "lucia",
        fecha: "18/10/2024",
        mesa: 7
    },
    {nombre: "leandro",
        fecha: "26/10/2024",
        mesa: 8
    },
    {nombre: "milagros",
        fecha: "31/10/2024",
        mesa: 9
    },
    {nombre: "jazmin",
        fecha: "18/10/2024",
        mesa: 10
    },
]

export {comidas, bebidas, mesas, reservas}
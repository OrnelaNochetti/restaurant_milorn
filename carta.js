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
];

function mostrarComidas(){
    console.table(comidas)
}

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
];

function mostrarBebidas(){
    console.table(bebidas)
}

export {comidas, bebidas, mostrarBebidas, mostrarComidas}
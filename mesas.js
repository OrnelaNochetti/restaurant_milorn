const mesas = [
    {
        mesa: 1,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 2,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 3,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 4,
        disponibilidad: false,
        capacidad: 3
    },
    {
        mesa: 5,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 6,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 7,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 8,
        disponibilidad: false,
        capacidad: 2
    },
    {
        mesa: 9,
        disponibilidad: false,
        capacidad: 3
    },
    {
        mesa: 10,
        disponibilidad: false,
        capacidad: 3
    },
    {
        mesa: 11,
        disponibilidad: true,
        capacidad: 3
    },
    {
        mesa: 12,
        disponibilidad: true,
        capacidad: 3
    },
]

function mesaDisponible(numeroDeMesa) {
    console.table(mesas);
    
    const found = mesas.find((element) => element.mesa == numeroDeMesa);
    console.log(found.disponibilidad)
}

export { mesas, mesaDisponible }
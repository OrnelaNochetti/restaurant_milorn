import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();

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

function cancelarReservas(opcion) {
    switch (opcion) {
        case 'cancelar_especifica':
            console.log(reservas)
            let mesaCancelada = Number(prompt("Ingrese la mesa que cancela la reserva"));
            let index = reservas.findIndex(reserva => reserva.mesa === mesaCancelada );
            if (index !== -1) {
                reservas[index].nombre = null;
                reservas[index].fecha = null;
            console.log(`Reserva de la mesa ${mesaCancelada} ha sido cancelada.`);
            console.log(reservas[index]);
            } else {
               console.log("Reserva no encontrada.");
            }
            break;
       case `cancelar_todas`:
       case cancelar_todas:
            console.log("Todas las reservas han sido canceladas.");
            break;
         default:
            console.log("Opcion no valida.");
            break;
    }
}

function buscarReservasPorNombre(reservas, nombre) {
        const nombreBuscado = nombre.toLowerCase();
        const reservasEncontradas = [];
    
        for (let reserva of reservas) {
            if (reserva.nombre.toLowerCase() === nombreBuscado) {
                reservasEncontradas.push(reserva);
            }
        }
    
        return reservasEncontradas;
    }

    
export {reservas, cancelarReservas, buscarReservasPorNombre}
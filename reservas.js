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
        case `cancelar_especifica`:
            let nombre = prompt("Ingrese el nombre del cliente que cancela:");
            let fecha = prompt("Ingrese la fecha del dia reservado:");
            let index = reservas.findIndex(reserva => reserva.nombre === nombre && reserva.fecha === fecha);
            if (index !== -1) {
                reservas.splice(index, 1);
                console.log(`Reserva de ${nombre} para el ${fecha} ha sido cancelada.`);
            } else {
               console.log("Reserva no encontrada.");
            }
            break;
       case `cancelar_todas`:
            reservas = [];
            console.log("Todas las reservas han sido canceladas.");
            break;
         default:
            console.log("Opcion no valida.");
            break;
    }
}
cancelarReservas(`cancelar_especifica`, "Federico", "2024-10-27");
cancelarReservas(`cancelar_todas`);

function buscarReservasPorNombre(nombre) {
    return reservas.filtrer(reserva => reserva.nombre.toLowerCase().trim() === nombre.toLowerCase().trim());
    
    }
export {reservas, cancelarReservas, buscarReservasPorNombre}
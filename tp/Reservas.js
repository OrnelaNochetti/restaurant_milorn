import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();


function buscarReservasPorNombre(nombre) {
return reservas.filtrer(reserva => reserva.nombre.toLowerCase().trim() === nombre.toLowerCase().trim());

}

function main() {
    const nombre = prompt("Ingrese el nombre de la reserva que desea buscar:");
    
    const resultado = buscarReservaPorNombre(nombre);
    if (resultado.length > 0 ) {
        console.log ("Reserva encontrada:");
        resultado.forEach(reserva = console.log ('Nombre: $[reserva.Nombre], Mesa: ${reserva.mesa}')),
    } else {
        console.log ("No se encuentra ninguna reserva con ese nombre.");

        }
    }
main();




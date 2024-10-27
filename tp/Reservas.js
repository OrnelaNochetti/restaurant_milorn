import prompt_sync from 'prompt-sync';
import {reservas} from "./arreglos.js"
const prompt = prompt_sync();

const reservas = [  
{nombre: "Julieta", mesa: 1, fecha: "12/10/2024"}
{nombre: "Maria", mesa: 2, fecha: "13/10/2024"}
{nombre: "Ines", mesa: 3, fecha: "28/10/2024"}
{nombre: "Juan", mesa: 4, fecha: "25/10/2024"}
{nombre: "Agustin", mesa: 5, fecha: "12/10/2024"}
{nombre: "Federico", mesa: 6, fecha: "27/10/2024"}
{nombre: "Lucia", mesa: 7, fecha : "18/10/2024"}
{nombre: "Leandro", mesa : 8, fecha : "26/10/2024"}
{nombre: "Milagros", mesa: 9, fecha: "31/10/2024"}
{nombre: "Jazmin", mesa: 10, fecha: "18/10/2024"}

];

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




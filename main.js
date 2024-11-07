import prompt_sync from "prompt-sync";
import {comidas, bebidas, mostrarBebidas, mostrarComidas, } from "./carta.js";
import {ordenes, verOrden, calcularCobro} from "./ordenes.js";
import {comidas, bebidas, mesas,} from "./arreglos.js";


const prompt = prompt_sync();

function mostrarMenu() {
    
    console.log("Menu del restaurante");
    console.log("1. Ver carta");
    console.log("2. Pedir comida");
    console.log("3. Pedir bebida");
    console.log("4. Ver orden");
    console.log("5. Pagar");
    console.log("6. Salir");
}

function pedirComida() {
    console.log("Funcion pedir comida");
}

function pedirBebida() {
    console.log("Funcion pedir bebida");
}

function opciones() {
    // let id = parseInt(prompt("elegir opcion del menu: \n 1.Ir al  Menu principal de la aplicacion \n 2.pedir comida \n 3.pedir bebida \n 4.ver orden"));
    mostrarMenu();
    let id = parseInt(prompt("Opcion: "));
    switch (id) {
        case 1:
            mostrarBebidas();
            break;
        case 2:
            mostrarComidas();
            break;
        case 3:
            verOrden(1);
            break;
        case 4:
            pagarOrden();
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}

function cancelarReservas(opcion, nombre, fecha) {
    switch (opcion) {
        case `cancelar_especifica`:
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
console.log(reservas);

cancelarReservas(`cancelar_todas`);
console.log(reservas);

opciones();
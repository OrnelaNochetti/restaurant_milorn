import prompt_sync from "prompt-sync";
import {comidas, bebidas, mostrarBebidas, mostrarComidas, } from "./carta.js";
import {ordenes, verOrden, pagarOrden, calcularCobro} from "./ordenes.js";
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

function cancelarReservas(id) {
    
}
opciones();
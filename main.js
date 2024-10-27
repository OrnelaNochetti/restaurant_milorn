
import prompt_sync from "prompt-sync";
import { comidas, bebidas, mesas } from "./arreglos.js";

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

function Menu() {
    let id = prompt("elegir opcion del menu: \n 1.Ir al  Menu principal de laa aplicacion \n 2.pedir comida")
    switch (id) {

        case 1:
            mostrarMenu();
            break;
        case 2:
            pedirComida();
            break;
        case 3:
            pedirBebida();
            break;
        case 4:
            verOrden();
        default:
            break;
    }
}
Menu();
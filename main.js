
import prompt_sync from "prompt-sync";
import { mesas } from "./mesas.js";
import { comidas, bebidas } from "./menu.js";
import { reservas } from "./reservas.js";
import { mostrarMenu } from "./ordenes.js";

const prompt = prompt_sync();

function main() {
    mostrarMenu();
    let opcion = prompt("Escriba su opcion: ");
    //console.log(opcion);
    if (opcion == 1) {
        console.table(bebidas);
        let seleccionBebida = prompt("Seleccione una bebida: ")
        console.table(comidas);
        let seleccionComida = prompt("Seleccione una comida: ")
    }
}

main();
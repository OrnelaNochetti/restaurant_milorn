import prompt_sync from "prompt-sync";
import {comidas, bebidas, mostrarBebidas, mostrarComidas, } from "./carta.js";
import {ordenes, verOrden, calcularCobro} from "./ordenes.js";
import {reservas, cancelarReservas, buscarReservasPorNombre, agregarReserva} from "./reservas.js";
import { verMesas } from "./pedidos.js";


const prompt = prompt_sync();

function mostrarMenu() {

    console.log("Menu del restaurante");
    console.log("1. Ver carta");
    console.log("2. Pedir comida");
    console.log("3. Pedir bebida");
    console.log("4. Ver orden");
    console.log("5. Pagar");
    console.log("6. Cancelar reserva");
    console.log("7. Ver mesas");
    console.log("8. Agregar Reserva");
    
}

function opciones() {
     //let id = parseInt(prompt("elegir opcion del menu: \n 1.Ir al  Menu principal de la aplicacion \n 2.pedir comida \n 3.pedir bebida \n 4.ver orden"));
    mostrarMenu();
    let id = parseInt(prompt("Opcion: "));
    switch (id) {
        case 1:
            mostrarBebidas();
            mostrarComidas();
            //prompt("Presione una tecla para continuar")
            opciones()
            break; 
        case 2:
            mostrarComidas();
            //prompt("Presione una tecla para continuar")
            opciones()
            break;
        case 3:
            verOrden(3);
            //prompt("Presione una tecla para continuar")
            opciones()
            break;
        case 4:
            calcularCobro(3);
            //prompt("Presione una tecla para continuar")
            opciones()
            break;
        case 6:
                cancelarReservas("cancelar_especifica");
                //prompt("Presione una tecla para continuar")
                opciones()
                break;
         case 7: verMesas();
         opciones();
         break;
         case 8: agregarReserva();
         opciones();
         break;
        default:
            console.log("Opcion no valida");
            break;
}
}

opciones()
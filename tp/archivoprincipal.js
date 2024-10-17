import {mesas} from "./mesas.js";
import {comidas, bebidas} from "./menu.js";
import {personas_por_mesa} from "./personas.js";
import {reservas} from "./reservas.js";

function registrarOrden(orden) {
    return "la mesa asignada para: " + nombre + "es la: " + mesa + "el día: " + fecha
}

console.log (registrarOrden());
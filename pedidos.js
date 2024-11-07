import { reservas } from "./carta.js";

function pedirComida(id) {
    let mesas = mesas.find(m => m.id = id);
    let pedidoComida = prompt("Elija una opcion del menu");
    if (pedidoComida > 0 && pedidoComida <= comidas.length) {
        reservas.push({comidas})
    } else {
        console.log("opcion no valida");
    }
    
}

function pedirBebida(id) {
    let mesas = mesas.find(m => m.id = id);
    let pedidoBebida = prompt("Elija una opcion del menu");
    if (pedidoBebida > 0 && pedidoBebida <= bebidas.length) {
        reservas.push({bebidas})
    } else {
        console.log("opcion no valida");
    }
    
}

function verOrden(id) {
    let mesas = mesas.find(m => m.id == id);
    if (mesa) {
        console.log("Orden de la Mesa:", id);
        mesa.pedidos.forEach(pedido => {
            console.log(`- ${pedido.nombre}: ${pedido.cantidad}`);
        });
    } else {
        console.log("Mesa no encontrada.");
    }
}

export {pedidos, pedirComida, pedirBebida, verOrden }
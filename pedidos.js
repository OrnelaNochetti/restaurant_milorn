import {comidas, bebidas, mostrarComidas, mostrarBebidas} from "./carta.js";
import {mesas} from "./mesas.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const pedidos = []

function pedirComida() {
    let mesaQuePide = Number(prompt("Anote el id de la mesa:"));
    console.log(mesaQuePide);
    console.log(mesas);

/*
    let mesas = mesas.find(m => m.id = id);
    let pedidoComida = prompt("Elija una opcion del menu");
    if (pedidoComida > 0 && pedidoComida <= comidas.length) {
        pedidos.push({comidas})
    } else {
        console.log("opcion no valida");
    }
  */  
}
pedirComida();

function pedirBebida(id) {
    let mesas = mesas.find(m => m.id = id);
    let pedidoBebida = prompt("Elija una opcion del menu");
    if (pedidoBebida > 0 && pedidoBebida <= bebidas.length) {
        pedidos.push({bebidas})
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
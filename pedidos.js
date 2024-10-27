import { reservas } from "./arreglos";

const numero1 = 8000;
const numero2 = 8000;
const numero3 = 1000;
const numero4 = 2000;

const totalCalculado = numero1 + numero2 + numero3 + numero4;

const pedidos = [
    {
        numeroPedido: 1,
        mesa: 1,
        comidas: [3, 6,],
        bebida: [0, 3],
        fecha: "12-10-2024",
        totalPagar: totalCalculado
    }
];

console.log(`el total a pagar para el pedido ${pedidos[1].numeroPedido} es: $${pedidos[1].totalPagar}`);

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
export {pedidos, pedirComida, pedirBebida, }
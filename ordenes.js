
import prompt_sync from "prompt-sync";
import {pedidos} from "./pedidos.js";

const ordenes = []
/*
let mesas = [
    { id: 1, pedidos: [{ nombre: "coca cola", cantidad: 2, precio: 4000 }, { nombre: "ravioles con tuco", cantidad: 2, precio: 16000 }] },
    { id: 2, pedidos: [{ nombre: "agua con gas", cantidad: 2, precio: 2000 }, { nombre: "pure de papa con pechuga", cantidad: 2, precio: 11400 }] },
    { id: 3, pedidos: [{ nombre: "cerveza", cantidad: 1, precio: 5700 }, { nombre: "ñoquis a la crema", cantidad: 2, precio: 16000}] },
    { id: 4, pedidos: [{ nombre: "sprite", cantidad: 3, precio: 6000 }, {nombre: "milanesa de pollo napolitana", cantidad: 3, precio: 21000}] },
]
*/
function verOrden(id) {
    console.log("Funcion ver orden");
    const mesa = mesas.find(mesa => mesa.id === id)
    console.log(mesa.pedidos);
    
}

const menu = {
    "coca cola": 2000,
    "sprite": 2000,
    "agua con gas": 1000,
    "cerveza": 5700,
    "vino tinto": 10000,
    "ñoquis a la crema": 8000,
    "ravioles con tuco": 8000,
    "pure de papa con pechuga": 5700,
    "milanesa de pollo napolitana": 7000,
    "bife de chorizo con papas fritas": 16000
};

let mesas = [
    { id: 1, pedidos: [{ nombre: "coca cola", cantidad: 2, precio: 4000 }, { nombre: "ravioles con tuco", cantidad: 2, precio: 16000 }] },
    { id: 2, pedidos: [{ nombre: "agua con gas", cantidad: 2, precio: 2000 }, { nombre: "pure de papa con pechuga", cantidad: 2, precio: 11400 }] },
    { id: 3, pedidos: [{ nombre: "cerveza", cantidad: 1, precio: 5700 }, { nombre: "ñoquis a la crema", cantidad: 2, precio: 16000}] },
    { id: 4, pedidos: [{ nombre: "sprite", cantidad: 3, precio: 6000 }, {nombre: "milanesa de pollo napolitana", cantidad: 3, precio: 21000}] },
];

function calcularCobro(mesaId) {
    let mesa = mesas.find(m => m.id === mesaId);
    if(!mesa) {
        console.log("Mesa no encontrada.");
        return;
    }

    let totalGeneral = 0;
    for (let i = 0; i < mesa.pedidos.length; i++) {
        let pedido = mesa.pedidos[i];
        console.log(`${pedido.nombre} ha pedido: ${pedido.cantidad} - Subtotal: ${pedido.precio}`);
        totalGeneral += pedido.precio;
    }
    console.log(`El total a cobrar por la mesa ${mesaId} es: $${totalGeneral}`);
    return totalGeneral;
}
/*
function mostrarMenu() {
    console.log("Menu del restaurante:");
    for (let item in menu) {
        console.log(`${item} : $${item[menu]}`);
    }
}
function hacerPedido() {
    let mesaId = parseInt(prompt("Ingrese el numero de la mesa:"));
    let mesa = mesas.find(m => m.id === mesaId);

    if(!mesa) {
        console.log("Mesa no encontrada.");
        return;
    }
}

mostrarMenu();

let pedido = [];
let continuar = true;

while(continuar) {
    let item = prompt("Ingrese el nombre del item (o 'fin' para terminar):");
    if (item === 'fin') {
        continuar = false;    
    } else if (menu[item]) {
        let cantidad = parseInt(prompt("Ingrese la cantidad:"));
        let precio = menu[item] * cantidad;
        pedido.push({ nombre: item, cantidad: cantidad, precio: precio });
    } else {
        console.log("Item no encontrado en el menu.");
    }
}

mesa.pedidos.push(...pedido);
console.log(`Pedido para la mesa ${mesaId}:`);
pedido.forEach(p => console.log(`${p.nombre} (x${p.cantidad}): $${p.precio}`));

hacerPedido();
console.log(mesas);
*/
export {ordenes, verOrden, calcularCobro}

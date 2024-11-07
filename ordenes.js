
import prompt_sync from "prompt-sync";

const ordenes = []

let mesas = [
    { id: 1, pedidos: [{ nombre: "coca cola", cantidad: 2 }, { nombre: "ravioles con tuco", cantidad: 2 }] },
    { id: 2, pedidos: [{ nombre: "agua con gas", cantidad: 2 }, { nombre: "pure de papa con pechuga", cantidad: 2 }] },
    { id: 3, pedidos: [{ nombre: "cerveza", cantidad: 1 }, { nombre: "ñoquis a la crema", cantidad: 2}] },
    { id: 4, pedidos: [{ nombre: "sprite", cantidad: 3 }, {nombre: "milanesa de pollo napolitana", cantidad: 3}] },
]

function verOrden(id) {
    console.log("Funcion ver orden");
    const mesa = mesas.find(mesa => mesa.id === id)
    console.log(mesa.pedidos);
    
}

function calcularCobro(pedidos) {
    let totalGeneral = 0;
    for (let i = 0; i < pedidos.length; i++) {
        let pedido = pedidos[i];
        let subtotal = 0;
     for (let j = 0; j < pedido.items.length; j++) {
        let item = pedido.items[j];
        subtotal += menu[item];
        }

        console.log(pedido.nombre + " ha pedido: " + pedido.items.join(", ") + " - Subtotal: $" + subtotal);
        totalGeneral += subtotal;
    }
    
    console.log("El total a cobrar es: $" + totalGeneral);
    return totalGeneral;
}

calcularCobro(pedidos);


export {ordenes, verOrden, calcularCobro}

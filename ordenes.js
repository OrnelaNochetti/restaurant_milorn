
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
function calcularCobro (pedidos) {
    let totalGeneral = 0;
    for (let i=0; i < pedidos.length; i++) {
        let pedido = pedido [i];
        let subtotal=0;
 }
}

function pagarOrden(id) {
    console.log ("El total a pagar es: $" + totalGeneal);
    return totalGeneral;


}

export {ordenes, verOrden, pagarOrden, calcularCobro}

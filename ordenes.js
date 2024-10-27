
import prompt_sync from "prompt-sync";

const ordenes = []

let mesas = [
    { id: 1, pedidos: [{ nombre: "coca cola", cantidad: 2 }, { nombre: "ravioles con tuco", cantidad: 2 }] },
    { id: 2, pedidos: [{ nombre: "agua con gas", cantidad: 2 }, { nombre: "pure de papa con pechuga", cantidad: 2 }] },
]

function verOrden(id) {
    console.log("Funcion ver orden");
    const mesa = mesas.find(mesa => mesa.id === id)
    console.log(mesa.pedidos);
    
}

export {ordenes, verOrden}

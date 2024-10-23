// funciones del restaurante
export function mostrarMenu() {
    console.log("Menu del restaurante");
    console.log("1. Ver menu");
    console.log("2. Pedir comida");
    console.log("3. Pedir bebida");
    console.log("4. Ver orden");
    console.log("5. Pagar");
    console.log("6. Salir");
}

function verCarta() {
    console.log("Carta del restaurante");
    console.log("Comidas:");
    console.log("-ñoquis a la crema");
    console-log("-Ravioles con tuco");
    console.log("Bebidas");
    console.log("-Coca cola");
    console.log("-Cerveza");
}

function pedirComida() {
    const comida = prompt("Ingrese el nombre de la comida:");
    console.log("Has pedido: ${ñoquis a la crema}");
    console.log("Has pedido: ${ravioles con tuco}");
}

function pedirBebida() {
    const bebida = prompt("Ingrese el nombre de la bebida:");
    console.log(`Has pedido: ${bebida}`);
}

function verOrden() {
    console.log("Tu orden:");
    //recuperar datos del pedido
    const orden = obtenerOrden();
    return{

    }
}

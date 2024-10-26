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


export {pedidos}
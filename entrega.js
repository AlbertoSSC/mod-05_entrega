const carrito = [
    { id: 198752, name: "Tinta DJ27 Color", price: 52.95, count: 3, premium: true },
    { id: 75621, name: "Impresora ticketera PRO-201", price: 32.75, count: 2, premium: true },
    { id: 54657, name: "Caja de rollos de papel para ticketera", price: 5.95, count: 3, premium: false },
    { id: 3143, name: "Caja de folios DIN-A4 80gr", price: 9.95, count: 2, premium: false }
];

// Eliminar un producto del carrito de la compra.
carrito.splice(2, 1);



// Mostrar una estructura de carrito de la compra. Listar todos los productos.
for (product of carrito) {
    printCarrito(product)
};

function printCarrito(product) {
    console.log("------------------------")
    for (atrib in product) {
        console.log(atrib + ": " + product[atrib])
    }
};



//Calcular el total del carrito de la compra (ojo aquí truco multiplicar cantidad por valor).
var totalPrice = 0;

for (product of carrito) {
    total(product);
};

function total(product) {
    totalPrice += product.price * product.count
}

//Aplicar un descuento del 5% si la compra es mayor de 50 €
(totalPrice > 50) ? (totalPrice = totalPrice * 0.95) : totalPrice;

console.log("_________________________")
console.log("Total: " + totalPrice)



//Filtrar por los productos que sean prime
var noPremium = [];
var premium = [];

for (product of carrito) {
    premiumSelect(product);
};

function premiumSelect(product) {
    (product.premium === false)
        ? noPremium.push(product)
        : premium.push(product);
};

console.log ("_________________________");
console.log ("*** Productos premium ***")
for (prod of premium) {
    console.log ("- " + prod.name)
};
console.log ("_________________________");


// OPCIONALES
// Si todos los productos son prime que diga "Gastos de envió cero", si no "Con gastos de envío".
var shipping;

if (!noPremium.length) {
    shipping = "Gastos de envío cero"
    console.log("Gastos de envío cero")
} else {
    shipping = "Con gastos de envío"
    console.log("Con gastos de envío")
}



//Montarlo con HTML y API de HTML básica.
// (de esto tendríamos que haber hecho un ejemplo en la parte de dojo / kata). ?????????

document.getElementById("titulo-lista").innerHTML = "Lista de la compra";

for (product of carrito) {
    printCarritoDOM(product);
};

function printCarritoDOM(product) {
    var listado = ""
    for (atrib in product) {
        listado += "<li>" + atrib + ": " + product[atrib] + "</li>"
    }
    document.getElementById("list").innerHTML += "<ul>" + listado + "</ul>"
};

document.getElementById("list").innerHTML += "<h3>" + "Total: " + totalPrice + "</h3>";
document.getElementById("list").innerHTML += shipping;
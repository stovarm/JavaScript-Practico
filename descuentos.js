const precioOriginal = 120;
const descuento = 18;

const procentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * procentajePrecioConDescuento)/100;

// console.log({          //Forma para imprimir como si fuera un objeto
//     precioOriginal, 
//     descuento,
//     procentajePrecioConDescuento,
//     precioConDescuento
// })

// Segunda Parte del Taller - Crear la función.

function calcularPrecioConDescuento(precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento)/100;
    return precioConDescuento;
};

function calculatePriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;  // Con innerText peudo escribir en HTML el resultado. enlazo con el mismo ID que defini en HTML
    
};


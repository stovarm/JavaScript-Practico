const precioOriginal = 120;
const descuento = 18;

const procentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * procentajePrecioConDescuento)/100;

console.log({          //Forma para imprimir como si fuera un objeto
    precioOriginal, 
    descuento,
    procentajePrecioConDescuento,
    precioConDescuento
})


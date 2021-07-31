// const precioOriginal = 120;
// const descuento = 18;

// const procentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * procentajePrecioConDescuento)/100;

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

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let discountValue;

    switch  (couponValue) {
        case "SUPER15":
            discountValue = 15;
            break;
        case "SUPER30":
            discountValue = 30;
            break;
        case "SUPER50":
            discountValue = 50;
            break;
        case "SUPER70":
            discountValue = 70;
            break; 
        default:
            discountValue = 0;
            break;
    };

    if (discountValue == 0) { 
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El coupon no es válido, El precio se mantiene en: $" + priceValue;
    }   
        else {
            const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento son: $" + precioConDescuento;  // Con innerText peudo escribir en HTML el resultado. enlazo con el mismo ID que defini en HTML           
        }        
};


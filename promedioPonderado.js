const list = [
    {
        pants: "Black",
        quantity: 1000,
        price: 50,
    },
    {
        pants: "Blue",
        quantity: 300,
        price:  80,
    }
];

const quantityWithPrice = list.map(function (listObject){  //navego por el array y multiplico cada valor x cantidad. y creo un Nuevo array quantityWithPrice 
    return listObject.quantity * listObject.price;
});

const sumOfQuantityWithPrice = quantityWithPrice.reduce(  //con reduce sumo cada elemento del array, así tengo la suma total.
    function (sum = 0, currentVal) {
        return sum + currentVal;
    }
);

const quantityTotal = list.map(function(listObject){  //Obtengo un array solo con las cantidades para despues sumarlas.
    return listObject.quantity;
});

const sumOfQuantityTotal = quantityTotal.reduce(
    function (sum = 0, currentVal) {
        return sum + currentVal;
    }
)

const weightedMean = sumOfQuantityWithPrice / sumOfQuantityTotal;

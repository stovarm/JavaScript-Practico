const salariosCol = colombia.map(      //crear un nuevo array basado en la lista de colombia
    function (person) {
        return person.salary            //solo estoy llamando el dato de salary dentro de colombia
    }
);

const salariosColSorted = salariosCol.sort(   // Ordenamos los datos en un nuevo array
    function (a, b) {
        return a - b;
    }
);

function calcularMediaAritmetica(lista) {  //funcion para calcular Promedios
    const sumaLista = lista.reduce(
        function (a = 0, b) {
            return a + b;    
        }
    ); 
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;
};


//Calcular la mediana del array
function esPar(numerito) {     // Saber si es Par
    return (numerito % 2 === 0);  
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);   //con prse quito los decimales.

    if(esPar(lista.length)) {                 //Validamos si es par o no la lista
        const element1 = lista[mitad - 1];
        const element2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([
            element1,
            element2,
        ]);
        return mediana;                          //Calculamos la mediana con el promedio de los dos valores del centro
    } else {
        const mediana = lista[mitad];           //Calculamos la mediana con el valor de la mitad de la lista.
        return mediana;
    }
}

console.log(

    medianaSalarios(salariosColSorted)
);
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;    
        }
    ); 
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;
};

function calcularMediana (listaMediana) {
    listaMediana.sort(function(a,b) {       // Con .sort ordenamos de manera ascendente con la función comparar.
    return a - b;
    });

    const mitadLista = parseInt(listaMediana.length/2);
    let mediana;

    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (esPar(listaMediana.length)) {
        const elemento1 = listaMediana[mitadLista-1];
        const elemento2 = listaMediana[(mitadLista)];
    
        mediana = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    }
    else {
        mediana = listaMediana[mitadLista];
    }

    return  "Mediana: " + mediana + " Lista ordenada: " + listaMediana;
}
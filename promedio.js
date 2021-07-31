function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {              //.length es para identificar la cantidad de elementos del array
    //     sumaLista = sumaLista + lista[i];  //comienzo en 0 y le suma el valor en la posición (i) luego el siguien pq i vale ++, y así sumo todos.
    // };
    
    const sumaLista = lista.reduce(            //permite sumar cada uno de los elementos. podemos cambiar la operación a -,/, * etc
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;    
        }
    ); 
    
    const promedioLista = sumaLista / lista.length; 

    return promedioLista;

};
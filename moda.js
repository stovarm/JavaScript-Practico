/* const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const listaCount = {};  // convirtiendolo en un objeto.

lista.map(                            //Con map recorro todo el Array y con la función voy creando un objeto en el if le sumo 1 cuando lo vuelvo a encontrar y en el else lo creo por primera vez
    function (elemento){
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;      //con += es la abreviación de listaCount[elemento] = listaCount[elemento] + 1;
        } else {
            listaCount[elemento] = 1;
        }        
    }
); 

const listaArray = Object.entries(listaCount).sort(    //Object.entries me convierte un objeto en un Array. y con sort vamos a idenfiticar el mas grande.
    function (valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1];     //listaArray es un array con arrays por dentro. y vamos a organizarlo por el segundo array(cuanto se repitió cada uno)
    }
);

const moda = listaArray[listaArray.length - 1];  //Busca dentro del array la ultima posición. Cantidad de Elementos -1 pq siempre comenzamos por 0 en un array
 */

//reto funcion moda para cualquier lista


function calcularModa (lista){
    const listaCount = {};
    lista.map(                            //Con map recorro todo el Array y con la función voy creando un objeto en el if le sumo 1 cuando lo vuelvo a encontrar y en el else lo creo por primera vez
        function (elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;      //con += es la abreviación de listaCount[elemento] = listaCount[elemento] + 1;
            } else {
                listaCount[elemento] = 1;
            }        
        }
    ); 

    const listaArray = Object.entries(listaCount).sort(    //Object.entries me convierte un objeto en un Array. y con sort vamos a idenfiticar el mas grande.
        function (valorAcumulado, nuevoValor) {
           return valorAcumulado[1] - nuevoValor[1];     //listaArray es un array con arrays por dentro. y vamos a organizarlo por el segundo array(cuanto se repitió cada uno)
        }
    );

    return moda = listaArray[listaArray.length - 1];  //Busca dentro del array la ultima posición. Cantidad de Elementos -1 pq siempre comenzamos por 0 en un array


}
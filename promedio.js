const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {              //.length es para identificar la cantidad de elementos del array
    sumaLista1 = sumaLista1 + lista1[i];  //comienzo en 0 y le suma el valor en la posición (i) luego el siguien pq i vale ++, y así sumo todos.
};

const promedioLista1 = sumaLista1 / lista1.length;

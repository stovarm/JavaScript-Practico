// Código del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
// console.log("El Area del cuadrado es: " + areaCuadrado + "cm^2");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();


// Código del Triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulo3 = 4;
// console.log("Los lados del triángulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " +
// ladoTriangulo3 
// + "cm");
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");
// const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
// console.log("El Area del triángulo es: " + areaTriangulo + "cm^2");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};
console.groupEnd();


// Código del Círculo
console.group("Círculos");
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");
// console.log("PI es: " + PI + "cm");
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El Area del círculo es: " + areaCirculo + "cm^2");

const PI = Math.PI;
function diametroCirculo(radio) {
    return radio * 2;
};

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio) {
    return (radio * radio) * PI;
};
console.groupEnd;


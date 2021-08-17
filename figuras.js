//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

//Código del triángulo
console.group("Triangulo")


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}
function areaTriangulo(base, altura){
    return (base * altura) / 2
}


console.groupEnd();

//Código del círculo
console.group("Circulos");

//Radio
function diametroCirculo(radio) {
    return radio * 2;
}


//Pi
const PI = Math.PI;
console.log("PI es: " + PI)

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}


//Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}


console.groupEnd();

//Aquí interacuamos con el HTML
function calcularPerimetroCuarado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuarado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area= areaCuadrado(value);
    alert(area);
}


//Reto: Isosceles
function alturaTriangulo(lado1, lado2, base){
    if (lado1 == lado2){
        altura = Math.sqrt( (lado1*lado1) - (base * base)/ 4 )
        return alert("La altura es: " + altura);
    }
    else{
        return alert("Dame un triangulo isósceles");
    }
}
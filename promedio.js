const lista1 = [ 
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;
//let permite ser cambiado en el futuro en un ciclo
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    //reduce es un método,suma cada uno de los elementos de una función, o los multiplica o divide

    const promedioLista = sumaLista / lista.length;
    return promedioLista

}
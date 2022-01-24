//Every: verifica que todos los elementos del array cumplan con la
//misma condicion. si todos cumplen se devuelve verdadero si no falso.
const numeros =[10, 20, 30, 40, 50, -5];

//Determinar si todos los elementos del array de numeros son positivos

const EsPositivo = numeros.every(data => {
    return data > 0;
});

const EsPositivoVers2 = numeros.every(data => data > 0);

console.log("Elementos positivos : ", EsPositivo);
console.log("Elementos positivos Version 2: ", EsPositivoVers2);

//ForEach - Every - Filter
//Verificar si todos los elementos de una matriz son positivos
const matriz = [[1, -2, 3], [4, 5, -6], [7, 8, 9]];
matriz.forEach(function(data){
    console.log(data.every(data => data > 0))
}); 

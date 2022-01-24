console.log("Primer Programa Funcional..");

const numeros =[10, 20, 30, 40, 50, 60, 70, 1, 9, 11, 15];

//Programacion imperactiva
console.log("Programacion imperactiva..");
for(var i=0; i<numeros.length; i++)
{
   console.log(numeros[i]);
}

//Programacion Funcional
console.log("Programacion Funcional..");
numeros.forEach(data =>{
    console.log("Elemento: ", data);
});
numeros.forEach(function(item){
    console.log("Elemento => ", item);
});

//Listar los elementos pares del vertor numeros
//Utilice la funcion filter
const pares = numeros.filter(data => {
    return data % 2 == 0;
});

const pares2 = numeros.filter(data => data % 2 == 0);

console.log("Elemento Pares : ", pares);
console.log("Elemento Pares Version 2: ", pares2);

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Elementos impares del vector numero
function getImpares (array){
    return array.filter(data => {
        return (data % 2 == 1);
    });
}
console.log("Elemento Impares numeros : ", getImpares(numeros));
console.log("Elemento Impares arreglo : ", getImpares(arreglo));

//Se tiene un vector de ciudades. se pide imprimir cada ciudad
const cuidades = ["Esmeraldas", "Quito", "Guayaquil", "Portoviejo","Manta"];
cuidades.forEach(item =>{
    console.log(item);
});

//Se tiene un parrafo, y cada palabraesta separada por un espacio en blanco
//se pide usando la funcion split, imprimir cada palabra del parrafo Ejemplo:
//Bienvenido a la Puce Sede Esmeraldas
console.log("Funcion split.............");
const parrafo = "Bienvenido a la Puce Sede Esmeraldas";
function getPalabras(str)
{
    str.split(" ").forEach(data => {
        console.log(data);
    });
}
getPalabras(parrafo);

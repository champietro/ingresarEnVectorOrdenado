/*
Hacer un programa que dado un arreglo ordenado creciente 
de enteros de tamaño 10 que se encuentra precargado, 
solicite al usuario un numero
entero y lo inserte en el arreglo manteniendo su orden.
*/

let vector: number = new Array(10);
vector[0] = 0;
vector[1] = 1;
vector[2] = 22;
vector[3] = 33;
vector[4] = 44;
vector[5] = 55;
vector[6] = 66;
vector[7] = 77;
vector[8] = 88;
vector[9] = 99;

let numero: number;
let numeroAnterior: number;
let corte: boolean = false;
numero = Number(prompt("Ingrese un número: "));
for (let i = 0; i < 10; i++) {
  if (corte === false) {
    if (vector[i] >= numero) {
      numeroAnterior = i - 1;
      vector[i] = numero;
      corte = true;
    }
  }
}

for (i = 0; i < 10; i++) {
  console.log(vector[i]);
}

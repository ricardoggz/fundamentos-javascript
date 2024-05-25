//Arreglo: tipo de dato compuesto
//Arreglo: una colección de elementos
//Características: cada uno de los elementos se compone por un indice numérico

//const nombres = new Array('Ricardo', 'Alexis', 'Ernesto')
const nombres = ['Ricardo', 'Alexis', 'Ernesto']

//Imprime en consola el siguiene texto utilizando el indice del elemento:
//Mi nombre es Alexis

//Acceso por indice
//console.log('Mi nombre es' + ' ' +nombres[0])

//Desestructuracion
const [/*0*/,/*1*/,ernesto] = nombres
//console.log('Mi nombre es' +' ' + ernesto)

//Tipos de arreglos
//Arreglo unidimensional
const numeros = [1, '2', null, undefined]

//Arreglo bidimensional
const arreglo = [['Ricardo', 'Alexis', 'Ernesto']]
//console.log('Mi nombre es Ricardo')
//console.log('Mi nombre es' + ' ' + arreglo[0][1])

//Arreglo multidimensional
const arreglomulti = [[['Ricardo', 'Alexis', 'Ernesto']]]
console.log(arreglomulti[0][0][2])
//console.log('Mi nombre es Ricardo')
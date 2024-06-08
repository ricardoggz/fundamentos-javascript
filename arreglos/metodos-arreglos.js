//Arreglo: Es una colección de datos
//Elementos de un arreglo se dividen por indice numérico
//Empezando desde el número 0

//Métodos de los arreglos:
//Funciones que me permiten interactuar con los elementos
//de un arreglo:
//Borrar
//Actualizar
//Agregar más
//Generar un listado de todos los elementos
//const arreglo =[1,2,3,4,5]
//const arreglo2 = new Array(1,2,3,4,5)

//CRUD
//Create - crear
//Read - leer
//Update - actualizar
//Delete - eliminar

//Colección
const productos = new Array(
    'Playera' /*0*/,
    'Pantalón' /*1*/,
    'Shorts' /*2*/,
    'Calcetas' /*3*/,
    /*Corbatas*/
)

//Create - Crear
productos.push('Corbatas')

//Read - Leer
productos.map((producto)=>console.log(producto))

//Update
productos.splice(
    //índice o identificador del elemento
    3,
    //número de elementos que voy a actualizar
    1,
    //Nuevo elemento
    'Tenis'
)

//Delete
productos.splice(
    //índice o identificador del elemento
    0,
    //número de elementos que voy a eliminar
    1,
)
console.log(productos)
//2 tipos de funciones
function ejemplo1(){
    return console.log('Ejemplo')
}

//Arrow functions o funciones flecha
var ejemplo2 =()=> console.log('Ejemplo')

//Arrow = Funciones LAMBDA

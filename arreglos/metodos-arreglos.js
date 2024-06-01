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
    'Playera',
    'Pantalón',
    'Shorts',
    'Calcetas',
    /*Corbatas*/
)

//Create - Crear
productos.push('Corbatas')

//Read - Leer
productos.map((producto)=>console.log(producto))

//2 tipos de funciones
function ejemplo1(){
    return console.log('Ejemplo')
}

//Arrow functions o funciones flecha
var ejemplo2 =()=> console.log('Ejemplo')

//Arrow = Funciones LAMBDA

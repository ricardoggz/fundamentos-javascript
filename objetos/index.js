//Tipos de datos compuestos
//Usuario dentro de una app con suscripciones
//objeto
//Atributos
//valores
const usuario = {
    //Atributos y valores
    nombre:'Ricardo',
    edad:23,
    premium:false,
    pago:null,
    proximoPago:undefined
}

//Mi nombre es Ricardo
console.log('Mi nombre es' + ' ' + usuario.nombre)

//desestructuracion
const {proximoPago, nombre, edad, premium} = usuario
console.log('Mi nombre' + ' ' + proximoPago)

if(usuario.premium === false){
    console.log('Sin acceso')
}
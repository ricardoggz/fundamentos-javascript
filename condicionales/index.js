//Condicional: Un bloque de codigo que me permite evaluar una parte lógica
//del código
//1._ if else: Me permite evaluar uno o mas resultados y ejecutar un código
//en caso de que se cumpla u otro en caso de que no se cumpla

let calificacion = 10

if(calificacion === 10){
    //Lógica que se va a ejecutar en caso de que la condicion se cumpla
    //console.log('Aprobaste con excelencia')
}
else{
    //Lógica en caso de que la condicion no se cumpla
    //console.log('reprobaste')
}

//Mayor y menor que
if(calificacion >=6){
    //console.log('Aprobaste')
}
else{
    //console.log('Reprobaste')
}

//if, else if, else
if(calificacion >=6 && calificacion <=9){
    //Primer condicion
    //console.log('Aprobaste')
}
else if(calificacion === 10){
    //2da condicion
    //console.log('Aprobaste con excelencia')
}
else{
    //Condicion en caso de que ninguna de las anteriores se cumpla
    //console.log('reporbaste')
}

//Condicional switch
switch(calificacion){
    /*case 6:
        //console.log('Aprobaste')
    break;
    case 7:
        console.log('Aprobaste')
    break;
    case 8:
        console.log('Aprobaste')
    break;
    case 9:
        console.log('Aprobaste')
    break;
    case 10:
        console.log('Aprobaste con excelencia')
    break
    default:
        console.log('Reprobaste')
    break*/
}

//operador ternario
calificacion === 10 ? console.log('Aprobé con excelencia') : console.log('Reprobé')
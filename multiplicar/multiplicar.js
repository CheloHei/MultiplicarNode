const fs = require('fs');
const colores = require('colors');



let listar = (base,limite=10) =>{

    console.log('================================'.green);
    console.log('============LISTADO DE TABLA========='.green);
    console.log('================================'.green);

    for (let i = 0; i <= limite; i++) {
     console.log(`${base} * ${i} = ${base * i}`);

    }
    
}

let crearArchivo = (base,limite=10) => {
    return new Promise((resolve, reject)=> {


        if (!Number(base))
{
    reject(`el valor introducido de ${base} o ${limite} no es un numero`);
    return
}
    let data = '';

    for (let i = 0; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);

    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err)
            reject(err)
        else
            resolve('El archivo se guardo correctamente!')
    });
});
}

//Objeto global para situar archivos
/**
 * ==================AQUI SE GUARDAN LAS FUNCIONES QUE SE IMPORTARAN DESDE EL PRINCIPAL
 */
module.exports = {
    crearArchivo,
    listar
}


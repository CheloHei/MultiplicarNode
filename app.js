const argv = require('./config/yargs').argv;

const colores = require('colors');
//console.log(argv);

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}




//console.log(multiplicar);
//global process nos ofrece info del sistemas en gral.
//con argv vemos el path de la ubicacion de node y de nuestra carpeta actual de trabajo
//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];

//para pasar la base por consola "node app --palabra=parametro"
//let base = parametro.split('=')[1];

// console.log('Limite: '+argv.limite);
// console.log(argv.base);
//console.log(argv2);




// le colocamos al require .argv para extraer este elemento
const argv = require('yargs')
                    // se agregan opciones para que yargs esté atento a estas
                    .options({
                        'n': {
                            alias: 'number',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        },
                        'l': {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla de multiplicar en consola'
                        },
                        'h':{
                            alias:'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Especifica el factor máximo a multiplicar'
                        }
                    })
                    // puedo hacer validaciones de mis comandos antes de ejecutar mi programa. 
                    // Si arroja un error no lo sigue ejecutando
                    .check( (argv, options) => {
                        // si no es un número agregamos entre los paréntesis la opción a verificar
                        if(isNaN(argv.n)){
                            throw 'La base tiene que ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;   
const {createFile} = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

//limpia la consola antes de mostrar nuestro código; útil para mostrarlo a un cliente.
console.clear();

createFile(argv.n, argv.l, argv.h)
    .then( filename => console.log(filename.rainbow, 'creado'))
    .catch(err => console.log(err));

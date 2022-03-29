const fs = require('fs');
const colors = require('colors');

const createFile = async (n = 5, l = false, h=20) => {

    try {
        let exit = '';
        let consola = '';

        for (let i = 1; i <= h; i++) {
            exit += `${n} x ${i} = ${n * i}\n`;
            consola += `${n} ${'x'.brightRed} ${i} ${'='.brightYellow} ${n * i}\n`;
        }

        if (l) {
            console.log('===================='.brightMagenta);
            console.log('     Tabla del '.brightCyan, colors.brightBlue(n));
            console.log('===================='.brightMagenta);
            console.log(consola);
        }

        //Grabamos la tabla del cinco dentro de un archivo txt con writeFile.
        fs.writeFileSync(`./salida/tabla-${n}.txt`, exit);

        return `tabla-${n}.txt`

    } catch (error) {
        throw error;
    }

}

module.exports = {
    createFile
}
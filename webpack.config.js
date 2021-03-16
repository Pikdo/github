const path = require('path') //ayuda a usar las rutas sin importar el OS

module.export = {
    entry: path.resolve(__dirname,'js/funciones.js'),   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    }
}
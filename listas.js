class Lista {
    constructor() {
        // Se genera una lista la cual contendrá todos los registros que se necesiten agregar
        this.lista = [];
    }

    // Este método tiene como objetivo recibir una instancia y guardarla en la lista
    agregaArticulo(registro) {
       this.lista.push(registro);
    }

    // Este método tiene por objetivo recorrer la lista con los registros guardados
    muestraContenido() {
        this.lista.length > 0
            ? this.lista.forEach( registro => registro.describe() )
            : console.log('Ningún hay articulos registrados.');
    }
}
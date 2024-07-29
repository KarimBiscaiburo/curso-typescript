// Solemos tener problemas cuando podemos recibir varios tipos de datos diferentes y dentro de la funcion utilizamos metodos de solo un tipo de dato
function mostrarLongitud(dato: number | string) {
    console.log(dato.length)

    // El narriwong seria ir creando un tipo de envudo para filtrar tipos de datos que no concuerdan con lo que necesitamos
    // En este punto "dato" puede ser string o number
    if (typeof dato === "string") {
        // En este punto "dato" es tomado como un tipo string, por lo que ya tendriamos autocompletado
        console.log(dato.length)
    }

    // Si no pasa la validacion, "dato" ya seria de tipo numero, por lo que tendriamos autocompletado para este tipo
    console.log(dato.toString().length)

}
// HAY QUE TRATAR DE EVITARLO

interface Mario {
    nombre: string
    saltar: () => void
}

interface Sonic {
    nombre: string
    correr: () => void
}

type Personaje = Mario | Sonic

// El type guard nos sirve para verificar algunas cuestiones como cuando tenemos, en este caso, dos interfaces que lo unico que las diferencia son una funcion
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje) {
    if(checkIsSonic(personaje)) {
        personaje.correr()
    }
}
// Las interfaces se definen casi igual que los type y en algunos casos pueden ser lo mismo

type Hero = {
    nombre: string
    edad: number
    planeta: string
    activo: boolean
}

interface Heroe {
    nombre: string
    edad: number
    planeta: string
    activo: boolean
    volar: () => void
}

const hero: Heroe = {
    nombre: "Montoto",
    edad: 30,
    planeta: "Tierra",
    activo: true,
    volar: () => console.log("volando")
}

// Tambien pueden estar anidadas
interface Producto {
    id: number
    nombre: string
    precio: number
    cantidad: number
}

// Hay algo que no se puede hacer de esta manera con los types y es extener de otra interface
// Con los tipos se puede lograr extender pero no de la misma forma

interface Zapatilla extends Producto {
    // Este va a contener la misma estructura que Producto pero agregando talla
    talla: string
}


interface CarritoDeCompras {
    total: number
    productos: (Producto | Zapatilla)[]
}

// Se pueden extener automaticamente una misma interface
interface Casa {
    puertas: number
}

interface Casa {
    habitaciones: number
}
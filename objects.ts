const objeto: {
    readonly id: number
    nombre: string
    edad: number
    direccion?: string
    // Podemos tambien especificar que sea de un tipo enum (archivo de enums)
    estado: Estados
} = {
    id: 1,
    nombre: "Pepito",
    edad: 45,
    estado: Estados.Cargando
}

// Si la propiedad es readonly no vamos a poder modificarla
// objeto.id = 2
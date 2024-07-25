// Creacion de Alias

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// Aca unicamente declaramos un type, no se inicializan variables ni nada, solo los tipos de datos que, en este caso, tiene Hero
type Hero = {
    name: string
    age: number

    // De esta manera podemos declarar que un tipo de dato sea opcional, es decir, que al momento de utilizar el tipo Hero no se requiera si o si que exista "isActive", pero que si existe tiene que ser booleano
    isActive?: boolean

    // Se pueden crear datos que sean solo de lectura
    // Se pueden crear datos que sean otro tipo de dato
    readonly id?: HeroId
}
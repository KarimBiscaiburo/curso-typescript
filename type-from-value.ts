const address  = {
    planet: "Earth",
    city: "Mar del Plata"
}

// Permite crear tipos a partir de otros tipos (pueden ser funciones o lo que tengas definido)
type Address = typeof address;

const addressTwitch: Address = {
    planet: "Mars",
    city: "Unknow"
}
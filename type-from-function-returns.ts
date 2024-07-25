function createAddress() {
    return {
        planet: "Tierra",
        city: "Ciudad"
    }
}

// Podemos guardar en un tipo lo que devuelve una funcion
type Address1 = ReturnType<typeof createAddress>
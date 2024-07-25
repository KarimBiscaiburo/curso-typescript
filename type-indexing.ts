type HeroProperties = {
    isActive: boolean
    address: {
        planet: string
        city: string
    }
}

const heroAdress: HeroProperties["address"] = {
    planet: "Tierra",
    city: "Argentina"
}
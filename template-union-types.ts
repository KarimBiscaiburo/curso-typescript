type HexadecimalColor = `#${string}`;

// Ponemos el caso que no sabemos si guardamos los valores hexadecimales para los colores con "#" o sin

// Podemos declarar un tipo para que siempre tengamos configurado el formato de un tipo de dato
const color: HexadecimalColor = "ee5512";

const color1 = "aa03ff";

// Tambien podemos especificar que es lo que puede contener un type
type Mascotas = "perro" | "gato" | "tortuga"

// Asi mismo puede ser de un tipo que tenga varios tipos

type Color = "rojo" | "blanco" | "azul"
type Forma = "redondo" | "cuadrado"

type Mesa = Color & Forma